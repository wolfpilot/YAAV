// Utils
import { getCenter } from "../../utils/helpers";

// Setup
const defaults = {
  // Status
  isPlaying: true,
  // Audio
  audioSource: require('../../../sounds/music.mp3'),
  channels: {
    left: 'L',
    right: 'R'
  },
  blockLength: 256,
  // Styling
  circle: {
    radius: 150,
    lineWidth: 3,
    stroke: ['blue', 'purple']
  },
  volumeBar: {
    angleOffset: 1.5 * Math.PI, // Start drawing arc from top center
    lineWidth: 3,
    fillLeft: frequency => `rgb(255, ${frequency}, 0)`,
    fillRight: frequency => `rgb(0, ${frequency}, 255)`
  }
};

class Visualizer {
  constructor(canvasCtx) {
    this._canvasCtx = canvasCtx;
  }

  state = {
    ...defaults
  };

  _drawVolumeBar(channel, frequency, coords) {
    const fill = channel === defaults.channels.left ?
      defaults.volumeBar.fillLeft(frequency) :
      defaults.volumeBar.fillRight(frequency);

    this._canvasCtx.lineWidth = defaults.volumeBar.lineWidth;
    this._canvasCtx.strokeStyle = fill;

    this._canvasCtx.beginPath();
    this._canvasCtx.moveTo(coords.xStart, coords.yStart);
    this._canvasCtx.lineTo(coords.xEnd, coords.yEnd);
    this._canvasCtx.stroke();
  }

  _getVolumeBarCoords(centre, angle, length) {
    const xStart = centre.x + (Math.cos(angle) * defaults.circle.radius);
    const yStart = centre.y + (Math.sin(angle) * defaults.circle.radius);
    const xEnd = centre.x + (Math.cos(angle) * (defaults.circle.radius + length));
    const yEnd = centre.y + (Math.sin(angle) * (defaults.circle.radius + length));

    return { xStart, yStart, xEnd, yEnd };
  }

  _drawVolume(analyser, channel) {
    // Extract audio data
    const bufferLength = analyser.frequencyBinCount; // Frequency bar count
    const freqData = new Uint8Array(bufferLength);

    // Calculate angle
    const rads = Math.PI / bufferLength;
    const angleMultiplier = channel === defaults.channels.left ? -1 : 1;
    const centre = getCenter();

    analyser.getByteFrequencyData(freqData);

    // Loop through all sample frames
    for (let i = 0; i < bufferLength; i++) {
      const angle = (angleMultiplier * rads * i) + defaults.volumeBar.angleOffset;
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
    gradient.addColorStop(0, defaults.circle.stroke[0]);
    gradient.addColorStop(1, defaults.circle.stroke[1]);

    this._canvasCtx.lineWidth = defaults.circle.lineWidth;
    this._canvasCtx.strokeStyle = gradient;

    this._canvasCtx.beginPath();
    this._canvasCtx.arc(centre.x, centre.y, defaults.circle.radius, 0, Math.PI * 2);
    this._canvasCtx.stroke();
  }

  /**
   * @public
   */
  draw() {
    this._drawUI();

    if (!this.state.isPlaying) { return; }

    if (this._analyserL && this._analyserR) {
      this._drawVolume(this._analyserL, defaults.channels.left);
      this._drawVolume(this._analyserR, defaults.channels.right);
    }
  }

  _setupAudioAnalyser() {
    this._audioCtx = new AudioContext();

    this._analyserL = this._audioCtx.createAnalyser();
    this._analyserR = this._audioCtx.createAnalyser();
    this._analyserL.fftSize = defaults.blockLength;
    this._analyserR.fftSize = defaults.blockLength;

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

  _startPlayback() {
    return this._audio.play();
  }

  _addEventListeners() {
    const playBtn = document.getElementById('play-btn');

    playBtn.addEventListener('click', () => this._initAudio());
  }

  /**
   * @NOTE: On Chrome, this auto-play was temporarily disabled. For more info, see link below:
   * @NOTE: https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#webaudio
   */
  _initAudio() {
    this._startPlayback()
      .then(() => {
        this.state.isPlaying = true;

        this._setupAudioAnalyser();
      })
      .catch(error => {
        // The play() Promise has been rejected, waiting for user input
        console.log(error);
      });
  }

  _setupWebAudio() {
    this._audio = document.createElement('audio');
    this._audio.src = defaults.audioSource;
    this._audio.controls = 'true';

    document.body.appendChild(this._audio);

    this._audio.style.width = `${window.innerWidth}px`;
  }

  /**
   * @public
   */
  init() {
    this._setupWebAudio();
    this._addEventListeners();
  }
}

export default Visualizer;
