// Modules
import Player from './actors/Player/Player';
import Canvas from './actors/Canvas/Canvas';

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
    this._player = new Player(canvasCtx);

    // Order is important, canvas needs to be first to draw
    this._actors = [
      this._canvas,
      this._player
    ];

    this._actors.forEach(actor => actor.init());

    this._tick();
  }
}

export default App;
