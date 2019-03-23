// Utils
import { config } from "./config";
import { getCenter, formatSeconds } from "../../utils/helpers";
import { lockUserSelection, unlockUserSelection } from "../../utils/uiHelpers";

const initialState = {
  hasUserInteracted: false,
  isPlaying: true
};

class Visualizer {
  constructor(canvasCtx) {
    this._canvasCtx = canvasCtx;

    this._onPointerMove = this._onPointerMove.bind(this);
    this._onPointerUp = this._onPointerUp.bind(this);
  }

  state = {
    ...initialState
  };

  _drawVolumeBar(channel, frequency, coords) {
    const fill = channel === config.channels.left ?
      config.volumeBar.fillLeft(frequency) :
      config.volumeBar.fillRight(frequency);

    this._canvasCtx.lineWidth = config.volumeBar.lineWidth;
    this._canvasCtx.strokeStyle = fill;

    this._canvasCtx.beginPath();
    this._canvasCtx.moveTo(coords.xStart, coords.yStart);
    this._canvasCtx.lineTo(coords.xEnd, coords.yEnd);
    this._canvasCtx.stroke();
  }

  _getVolumeBarCoords(centre, angle, length) {
    const xStart = centre.x + (Math.cos(angle) * config.circle.radius);
    const yStart = centre.y + (Math.sin(angle) * config.circle.radius);
    const xEnd = centre.x + (Math.cos(angle) * (config.circle.radius + length));
    const yEnd = centre.y + (Math.sin(angle) * (config.circle.radius + length));

    return { xStart, yStart, xEnd, yEnd };
  }

  _drawVolume(analyser, channel) {
    // Extract audio data
    const bufferLength = analyser.frequencyBinCount; // Frequency bar count
    const freqData = new Uint8Array(bufferLength);

    // Calculate angle
    const rads = Math.PI / bufferLength;
    const angleMultiplier = channel === config.channels.left ? -1 : 1;
    const centre = getCenter();

    analyser.getByteFrequencyData(freqData);

    // Loop through all sample frames
    for (let i = 0; i < bufferLength; i++) {
      const angle = (angleMultiplier * rads * i) + config.volumeBar.angleOffset;
      const length = freqData[i] / 2;

      // Calculate coordinates
      const coords = this._getVolumeBarCoords(centre, angle, length);

      // Draw single bar
      this._drawVolumeBar(channel, freqData[i], coords);
    }
  }

  _drawUI() {
    const centre = getCenter();
    // @TODO: Add dynamic multiple coloured arc generator
    const gradient = this._canvasCtx.createLinearGradient(0, window.innerHeight, 0, 0);
    gradient.addColorStop(0, config.circle.stroke[0]);
    gradient.addColorStop(1, config.circle.stroke[1]);

    this._canvasCtx.lineWidth = config.circle.lineWidth;
    this._canvasCtx.strokeStyle = gradient;

    this._canvasCtx.beginPath();
    this._canvasCtx.arc(centre.x, centre.y, config.circle.radius, 0, Math.PI * 2);
    this._canvasCtx.stroke();
  }

  /**
   * @public
   */
  draw() {
    this._drawUI();

    if (!this.state.isPlaying) { return; }

    if (this._analyserL && this._analyserR) {
      this._drawVolume(this._analyserL, config.channels.left);
      this._drawVolume(this._analyserR, config.channels.right);
    }
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

    const val = e.clientX - _bounds.x;

    this._audio.currentTime = this._audio.duration * (val / _bounds.width);
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

    const splitter = this._audioCtx.createChannelSplitter(2);
    const merger = this._audioCtx.createChannelMerger(2);

    // Connect to source
    const source = this._audioCtx.createMediaElementSource(this._audio);

    // Connect source to splitter
    source.connect(splitter, 0, 0);

    // Connect each channel to its own analyser
    splitter.connect(this._analyserL, 0);
    splitter.connect(this._analyserR, 1);

    // Connect back to the merger
    this._analyserL.connect(merger, 0, 0);
    this._analyserR.connect(merger, 0, 1);

    // Connect both channels back to the audio source
    merger.connect(this._audioCtx.destination, 0, 0);
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
    const playBtn = document.querySelector('[data-play-btn]');
    const pauseBtn = document.querySelector('[data-pause-btn]');

    playBtn.addEventListener('click', () => this._playAudio());
    pauseBtn.addEventListener('click', () => this._pauseAudio());

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

export default Visualizer;
