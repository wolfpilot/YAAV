// Modules
import Player from "./actors/Player/Player"
import Canvas from "./actors/Canvas/Canvas"
import GUI from "./managers/GUI/GUI"

// Setup
const initialState = {
  isRunning: true,
}

// Setup
class App {
  state = {
    ...initialState,
  }

  _draw() {
    // Order is important, canvas needs to be first to draw
    this._canvas.draw()
    this._player.draw()
  }

  _onResize = () => {
    this._canvas.resize()
    this._draw()
  }

  _tick() {
    if (!this.state.isRunning) {
      return
    }

    this._draw()

    requestAnimationFrame((timestamp) => this._tick(timestamp))
  }

  init() {
    const canvasEl = document.getElementById("canvas")
    const canvasCtx = canvasEl.getContext("2d")

    this._gui = new GUI()
    this._canvas = new Canvas(canvasEl, canvasCtx)
    this._player = new Player(canvasCtx)

    this._gui.init()
    this._canvas.init()
    this._player.init()

    window.addEventListener("resize", this._onResize)

    this._tick()
  }
}

export default App
