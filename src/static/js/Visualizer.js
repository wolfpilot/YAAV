// Setup
const defaults = {
  isRunning: false,
  fill: '#000',
  audioSource: require('../sounds/music.mp3')
};

class Visualizer {
  state = {
    ...defaults
  };

  _tick() {
    if (this.state.isRunning) { return; }

    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    this.ctx.fillStyle = defaults.fill;
    this.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

    requestAnimationFrame(timestamp => this._tick(timestamp));
  }

  _resizeCanvas() {
    this.canvasEl.width = window.innerWidth;
    this.canvasEl.height = window.innerHeight;
  }

  _setupCanvas() {
    this.canvasEl = document.getElementById('canvas');
    this.ctx = this.canvasEl.getContext('2d');
  }

  _startPlayback() {
    return this.audio.play();
  }

  _addEventListeners() {
    const playBtn = document.getElementById('play-btn');

    playBtn.addEventListener('click', () => this._startPlayback());
  }

  /**
   * @NOTE: On Chrome, this auto-play was temporarily disabled. For more info, see link below:
   * @NOTE: https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#webaudio
   */
  _initAudio() {
    this._startPlayback()
      .then(() => {
        this.state.isRunning = true;
      })
      .catch(error => {
        // The play() Promise has been rejected, waiting for user input
        console.log(error);

        this._addEventListeners();
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
    this._initAudio();
    this._setupCanvas();
    this._resizeCanvas();
    this._tick();
  }
}

export default Visualizer;
