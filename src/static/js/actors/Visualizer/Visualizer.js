// Utils
import { getCenter } from "../../utils/helpers";

// Setup
const defaults = {
  // Status
  isPlaying: true,
  // Audio
  audioSource: require('../../../sounds/music.mp3'),
  blockLength: 512,
  // Styling
  circle: {
    radius: 150,
    lineWidth: 3,
    stroke: ['blue', 'purple']
  },
  volumeBar: {
    lineWidth: 3,
    fill: frequency => `rgb(100, ${frequency}, 205)`
  }
};

class Visualizer {
  constructor(canvasCtx) {
    this._canvasCtx = canvasCtx;
  }

  state = {
    ...defaults
  };

  _drawVolumeBar(coords, frequency) {
    this._canvasCtx.lineWidth = defaults.volumeBar.lineWidth;
    this._canvasCtx.strokeStyle = defaults.volumeBar.fill(frequency);

    this._canvasCtx.beginPath();
    this._canvasCtx.moveTo(coords.xStart, coords.yStart);
    this._canvasCtx.lineTo(coords.xEnd, coords.yEnd);
    this._canvasCtx.stroke();
  }

  _drawVolume() {
    const bufferLength = this._analyser.frequencyBinCount; // Frequency bar count
    const freqData = new Uint8Array(bufferLength);
    const rads = Math.PI * 2 / bufferLength;
    const centre = getCenter();

    this._analyser.getByteFrequencyData(freqData);

    // Loop through all sample frames
    for (let i = 0; i < bufferLength; i++) {
      const angle = rads * i;
      const length = freqData[i] / 2;

      // Calculate coordinates
      const xStart = centre.x + (Math.cos(angle) * defaults.circle.radius);
      const yStart = centre.y + (Math.sin(angle) * defaults.circle.radius);
      const xEnd = centre.x + (Math.cos(angle) * (defaults.circle.radius + length));
      const yEnd = centre.y + (Math.sin(angle) * (defaults.circle.radius + length));

      const coords = { xStart, yStart, xEnd, yEnd };

      // Draw single bar
      this._drawVolumeBar(coords, freqData[i]);
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

    if (this._analyser && this.state.isPlaying) {
      this._drawVolume();
    }
  }

  _setupAudioAnalyser() {
    this._audioCtx = new AudioContext();
    this._analyser = this._audioCtx.createAnalyser();
    this._analyser.fftSize = defaults.blockLength;

    const source = this._audioCtx.createMediaElementSource(this._audio);
    source.connect(this._analyser);
    this._analyser.connect(this._audioCtx.destination);
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
