// Utils
import { config } from "./config";
import { config as globalConfig } from "../../config";
import { formatSeconds } from "../../utils/helpers";
import { lockUserSelection, unlockUserSelection } from "../../utils/uiHelpers";

// Modules
import Visualizer from '../Visualizer/Visualizer';

const initialState = {
  hasUserInteracted: false,
  isPlaying: false
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

    analyser.getByteFrequencyData(frequencyData);

    return {
      bufferLength,
      frequencyData
    }
  }

  _getAudioData() {
    if (!this.state.isPlaying) { return; }

    const channelLeftData = Player.getChannelData(this._analyserL);
    const channelRightData = Player.getChannelData(this._analyserR);

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

        this._setupAudioAnalyser();
      })
      .catch(error => {
        // The play() Promise has been rejected, waiting for user input
        console.log(error);
      });
  }

  _pauseAudio() {
    this._audio.pause();

    this.state.isPlaying = false;
  }

  /**
   * @NOTE: On Chrome, this auto-play was temporarily disabled. For more info, see link below:
   * @NOTE: https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#webaudio
   */
  _playAudio() {
    if (this.state.hasUserInteracted) {
      this._audio.play();

      this.state.isPlaying = true;

      return;
    }

    this._initAudio();
  }

  _addEventListeners() {
    const _playBtn = document.querySelector('[data-play-btn]');
    const _pauseBtn = document.querySelector('[data-pause-btn]');

    _playBtn.addEventListener('click', () => this._playAudio());
    _pauseBtn.addEventListener('click', () => this._pauseAudio());

    this._audio.addEventListener('timeupdate', () => this._updateProgress());
    this._elements.progress.addEventListener('pointerdown', e => this._onPointerDown(e));
  }

  _cacheSelectors() {
    this._elements = {
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
