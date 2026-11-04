// Modules
import Player from "./actors/Player/Player"
import Canvas from "./actors/Canvas/Canvas"
import GUI from "./managers/GUI/GUI"
import { config } from "./config"

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

    const settings = {
      channels: config.channels.both,
      variant: config.variant.bars,
    }

    this._gui = new GUI(settings)
    this._canvas = new Canvas(canvasEl, canvasCtx)
    this._player = new Player(canvasCtx, settings)

    this._gui.init()
    this._canvas.init()
    this._player.init()

    window.addEventListener("resize", this._onResize)

    this._tick()
  }
}

export default App
