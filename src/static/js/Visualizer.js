// Setup
const defaults = {
  // Status
  isRunning: true,
  isPlaying: false,
  // Audio
  audioSource: require('../sounds/music.mp3'),
  blockLength: 512,
  // Styling
  canvasFill: 'rgb(0, 0, 0)',
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

function getCenter() {
  return {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
  }
}

class Visualizer {
  state = {
    ...defaults
  };

  _drawVolumeBar(coords, frequency) {
    this.canvasCtx.lineWidth = defaults.volumeBar.lineWidth;
    this.canvasCtx.strokeStyle = defaults.volumeBar.fill(frequency);

    this.canvasCtx.beginPath();
    this.canvasCtx.moveTo(coords.xStart, coords.yStart);
    this.canvasCtx.lineTo(coords.xEnd, coords.yEnd);
    this.canvasCtx.stroke();
  }

  _drawVolume() {
    const bufferLength = this.analyser.frequencyBinCount; // Frequency bar count
    const freqData = new Uint8Array(bufferLength);
    const rads = Math.PI * 2 / bufferLength;
    const centre = getCenter();

    this.analyser.getByteFrequencyData(freqData);

    // Draw volume bars
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
    const gradient = this.canvasCtx.createLinearGradient(0, window.innerHeight, 0, 0);
    gradient.addColorStop(0, defaults.circle.stroke[0]);
    gradient.addColorStop(1, defaults.circle.stroke[1]);

    this.canvasCtx.lineWidth = defaults.circle.lineWidth;
    this.canvasCtx.strokeStyle = gradient;

    this.canvasCtx.beginPath();
    this.canvasCtx.arc(centre.x, centre.y, defaults.circle.radius, 0, Math.PI * 2);
    this.canvasCtx.stroke();
  }

  _tick() {
    if (!this.state.isRunning) { return; }

    this.canvasCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    this.canvasCtx.fillStyle = defaults.canvasFill;
    this.canvasCtx.fillRect(0, 0, window.innerWidth, window.innerHeight);

    this._drawUI();

    if (this.analyser && this.state.isPlaying) {
      this._drawVolume();
    }

    requestAnimationFrame(timestamp => this._tick(timestamp));
  }

  _resizeCanvas() {
    this.canvasEl.width = window.innerWidth;
    this.canvasEl.height = window.innerHeight;
  }

  _setupCanvas() {
    this.canvasEl = document.getElementById('canvas');
    this.canvasCtx = this.canvasEl.getContext('2d');
  }

  _setupAudioAnalyser() {
    this.audioCtx = new AudioContext();
    this.analyser = this.audioCtx.createAnalyser();
    this.analyser.fftSize = defaults.blockLength;

    const source = this.audioCtx.createMediaElementSource(this.audio);
    source.connect(this.analyser);
    this.analyser.connect(this.audioCtx.destination);
  }

  _startPlayback() {
    return this.audio.play();
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
    this.audio = document.createElement('audio');
    this.audio.src = defaults.audioSource;
    this.audio.controls = 'true';

    document.body.appendChild(this.audio);

    this.audio.style.width = `${window.innerWidth}px`;
  }

  init() {
    this._setupWebAudio();
    this._addEventListeners();
    this._setupCanvas();
    this._resizeCanvas();
    this._tick();
  }
}

export default Visualizer;
