const defaults = {
  isPaused: false,
  fill: '#000'
};

class Visualizer {
  _tick() {
    if (this.state.isPaused) { return; }

    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    this.ctx.fillStyle = defaults.fill;
    this.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

    requestAnimationFrame(timestamp => this._tick(timestamp));
  }

  _setupCanvas() {
    this.canvasEl.width = window.innerWidth;
    this.canvasEl.height = window.innerHeight;
  }

  _setup() {
    this.canvasEl = document.getElementById('canvas');
    this.ctx = this.canvasEl.getContext('2d');

    this._setupCanvas();

    this.state = {
      ...defaults
    };
  }

  init() {
    this._setup();
    this._tick();
  }
}

export default Visualizer;
