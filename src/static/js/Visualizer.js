// Setup
const defaults = {
  isRunning: true,
  isPlaying: false,
  audioSource: require('../sounds/music.mp3'),
  canvasFill: 'rgb(0, 0, 0)',
  audioBarFill: 'rgb(255, 255, 255)',
  blockLength: 1024
};

class Visualizer {
  state = {
    ...defaults
  };

  _drawVolumeBars() {
    const bufferLength = this.analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    const barWidth = (window.innerWidth / bufferLength) * 2.5;
    let posX = 0;
    let posY = 0;

    this.analyser.getByteFrequencyData(dataArray);

    for (let i = 0; i < bufferLength; i++) {
      const barHeight = dataArray[i] / 2;

      posY = window.innerHeight - barHeight / 2;

      this.canvasCtx.fillStyle = defaults.audioBarFill;
      this.canvasCtx.fillRect(posX, posY, barWidth, barHeight);

      posX += barWidth + 1;
    }
  }

  _tick() {
    if (!this.state.isRunning) { return; }

    this.canvasCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    this.canvasCtx.fillStyle = defaults.canvasFill;
    this.canvasCtx.fillRect(0, 0, window.innerWidth, window.innerHeight);

    if (this.analyser && this.state.isPlaying) {
      this._drawVolumeBars();
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
