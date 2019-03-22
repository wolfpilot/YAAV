// Modules
import Canvas from './actors/Canvas/Canvas';
import Visualizer from './actors/Visualizer/Visualizer';

// Setup
const initialState = {
  isRunning: true
};

// Setup
class App {
  state = {
    ...initialState
  };

  _tick() {
    if (!this.state.isRunning) { return; }

    this._actors.forEach(actor => actor.draw());

    requestAnimationFrame(timestamp => this._tick(timestamp));
  }

  init() {
    const canvasEl = document.getElementById('canvas');
    const canvasCtx = canvasEl.getContext('2d');

    this._canvas = new Canvas(canvasEl, canvasCtx);
    this._visualizer = new Visualizer(canvasCtx);

    this._actors = [
      this._canvas,
      this._visualizer
    ];

    this._actors.forEach(actor => actor.init());

    this._tick();
  }
}

export default App;
