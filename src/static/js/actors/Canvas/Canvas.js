// Setup
const defaults = {
  fill: 'rgb(0, 0, 0)'
};

class Visualizer {
  constructor(canvasEl, canvasCtx) {
    this._canvasEl = canvasEl;
    this._canvasCtx = canvasCtx;
  }

  state = {
    ...defaults
  };

  /**
   * @public
   */
  draw() {
    this._canvasCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    this._canvasCtx.fillStyle = defaults.fill;
    this._canvasCtx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  }

  _resizeCanvas() {
    this._canvasEl.width = window.innerWidth;
    this._canvasEl.height = window.innerHeight;
  }

  /**
   * @public
   */
  init() {
    this._resizeCanvas();
  }
}

export default Visualizer;
