// Utils
import { config } from "./config";
import { config as globalConfig } from "../../config";
import { formatSeconds, isArrayZeroedOut } from "../../utils/mathHelpers";
import { getKeyCode } from "../../utils/inputHelpers";
import { lockUserSelection, unlockUserSelection } from "../../utils/uiHelpers";
import { fadeIn, fadeOut } from "../../utils/audioHelpers";

// Modules
import Visualizer from '../Visualizer/Visualizer';

const initialState = {
  hasUserInteracted: false,
  isPlaying: false,
  isVolumeFading: false,
  isBinDataEmpty: true
};

class Player {
  constructor(canvasCtx) {
    this._visualizer = new Visualizer(canvasCtx);

    this._onPointerMove = this._onPointerMove.bind(this);
    this._onPointerUp = this._onPointerUp.bind(this);
  }

  state = {
    ...initialState
  };

  static getChannelData(analyser) {
    const bufferLength = analyser.frequencyBinCount; // Frequency bar count
    const frequencyData = new Uint8Array(bufferLength);

    // Order is important; first read the data, then process it.
    // .getByteFrequencyData() doesn't return anything, it simply updates the original object.
    analyser.getByteFrequencyData(frequencyData);

    // A completely zeroed-out bin data array means total silence
    const dataIsEmpty = isArrayZeroedOut(frequencyData);

    if (dataIsEmpty) { return; }

    return {
      bufferLength,
      frequencyData
    }
  }

  _getAudioData() {
    // Unfortunately, after pausing there is a small delay until the bin data array empties out
    // which means that calling .pause() doesn't necessarily reflect the real state of the audio.
    // This is mostly a performance optimisation so that we don't draw empty sample frames.
    if (!this.state.isPlaying && this.state.isBinDataEmpty) { return; }

    const channelLeftData = Player.getChannelData(this._analyserL);
    const channelRightData = Player.getChannelData(this._analyserR);

    // Because we're processing each channel separately, some tracks may (at times)
    // only return data for one channel. Therefore, the channels are to be drawn separately.
    if (!channelLeftData && !channelRightData) {
      this.state.isBinDataEmpty = true;

      return;
    }

    this.state.isBinDataEmpty = false;

    return {
      channels: [
        {
          name: globalConfig.channels.left,
          data: channelLeftData
        },
        {
          name: globalConfig.channels.right,
          data: channelRightData
        }
      ]
    };
  }

  draw() {
    const data = this._getAudioData();

    this._visualizer.draw(data);
  }

  _resetVolume() {
    this._audio.volume = 1;
    this._audio.muted = false;
  }

  _muteVolume() {
    this._audio.volume = 0;
    this._audio.muted = true;
  }

  /**
   * @param {Object} e - The mouse event
   */
  _seek = e => {
    const _bounds = this._elements.progress.getBoundingClientRect();
    const _min = _bounds.x;
    const _max = _bounds.x + _bounds.width;

    // Out of bounds
    if (e.pageX < _min || e.pageX > _max) { return; }

    const _val = e.clientX - _bounds.x;

    this._audio.currentTime = this._audio.duration * (_val / _bounds.width);
  };

  _onPointerUp = () => {
    unlockUserSelection(document.body);

    this._resetVolume();

    document.removeEventListener('pointerup', this._onPointerUp);
    document.removeEventListener('pointermove', this._onPointerMove);
  };

  _onPointerMove = e => {
    this._seek(e);
  };

  _onPointerDown = e => {
    lockUserSelection(document.body);

    this._muteVolume();
    this._seek(e);

    document.addEventListener('pointermove', this._onPointerMove);
    document.addEventListener('pointerup', this._onPointerUp);
  };

  _onKeyDown(e) {
    const _keyCode = getKeyCode(e);

    if (!_keyCode) { return; }

    // Detect spacebar press
    if (_keyCode === 32) {
      // Prevent triggering other events when any UI buttons (ex: play, pause)
      // are focused and the user presses spacebar
      e.preventDefault();

      this._togglePlayback();
    }
  }

  _updateProgress = () => {
    const _percent = (this._audio.currentTime / this._audio.duration) * 100;

    this._elements.progressBar.style.maxWidth = `${_percent}%`;
    this._elements.elapsedTime.textContent = formatSeconds(this._audio.currentTime);
    this._elements.totalTime.textContent = formatSeconds(this._audio.duration);
  };

  _setupAudioAnalyser() {
    this._analyserL = this._audioCtx.createAnalyser();
    this._analyserR = this._audioCtx.createAnalyser();
    this._analyserL.fftSize = config.blockLength;
    this._analyserR.fftSize = config.blockLength;

    const _splitter = this._audioCtx.createChannelSplitter(2);
    const _merger = this._audioCtx.createChannelMerger(2);

    // Connect to source
    const _source = this._audioCtx.createMediaElementSource(this._audio);

    // Connect source to splitter
    _source.connect(_splitter, 0, 0);

    // Connect each channel to its own analyser
    _splitter.connect(this._analyserL, 0);
    _splitter.connect(this._analyserR, 1);

    // Connect back to the merger
    this._analyserL.connect(_merger, 0, 0);
    this._analyserR.connect(_merger, 0, 1);

    // Connect both channels back to the audio source
    _merger.connect(this._audioCtx.destination, 0, 0);
  }

  /**
   * @NOTE: In some browsers (ex: Safari), the AudioContext starts in 'suspended' state
   * @NOTE: and unlocking it requires a user-gesture event.
   */
  _unlockAudioContext() {
    if (this._audioCtx.state === 'suspended') {
      this._audioCtx.resume();
    }
  }

  _initAudio() {
    // The AudioContext needs to be created after a user interaction has taken place
    this._audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    this.state.hasUserInteracted = true;

    this._unlockAudioContext();

    this._audio.play()
      .then(() => {
        this.state.isPlaying = true;
        this.state.isBinDataEmpty = false;
        this._elements.player.setAttribute('data-is-playing', 'true');

        this._setupAudioAnalyser();
      })
      .catch(error => {
        // The play() Promise has been rejected, waiting for user input
        console.log(error);
      });
  }

  _togglePlayback() {
    this.state.isPlaying ? this._pauseAudio() : this._playAudio();
  }

  async _pauseAudio() {
    if (this.state.isVolumeFading) { return; }

    this.state.isVolumeFading = true;
    this._elements.player.setAttribute('data-is-playing', 'false');

    await fadeOut(this._audio);

    this.state.isPlaying = false;
    this.state.isVolumeFading = false;

    this._audio.pause();
  }

  /**
   * @NOTE: On Chrome, this auto-play was temporarily disabled. For more info, see link below:
   * @NOTE: https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#webaudio
   */
  async _playAudio() {
    if (this.state.hasUserInteracted) {
      if (this.state.isVolumeFading) { return; }

      this.state.isPlaying = true;
      this.state.isVolumeFading = true;
      this.state.isBinDataEmpty = false;
      this._elements.player.setAttribute('data-is-playing', 'true');

      this._audio.play();

      await fadeIn(this._audio);

      this.state.isVolumeFading = false;

      return;
    }

    this._initAudio();
  }

  _addEventListeners() {
    const _playBtn = document.querySelector('[data-play-btn]');
    const _pauseBtn = document.querySelector('[data-pause-btn]');

    _playBtn.addEventListener('click', () => this._playAudio());
    _pauseBtn.addEventListener('click', () => this._pauseAudio());
    window.addEventListener('keydown', e => this._onKeyDown(e));
    this._elements.progress.addEventListener('pointerdown', e => this._onPointerDown(e));
    this._audio.addEventListener('timeupdate', () => this._updateProgress());
  }

  _cacheSelectors() {
    this._elements = {
      player: document.querySelector('[data-player]'),
      progress: document.querySelector('[data-player-progress]'),
      progressBar: document.querySelector('[data-player-progress-bar]'),
      elapsedTime: document.querySelector('[data-player-elapsed-time]'),
      totalTime: document.querySelector('[data-player-total-time]')
    };
  }

  _setupWebAudio() {
    this._audio = document.createElement('audio');
    this._audio.src = config.audioSource;

    document.body.appendChild(this._audio);
  }

  /**
   * @public
   */
  init() {
    this._setupWebAudio();
    this._cacheSelectors();
    this._addEventListeners();
  }
}

export default Player;
