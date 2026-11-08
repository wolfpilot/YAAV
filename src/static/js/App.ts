// Modules
import Player from "./actors/Player/Player"
import Canvas from "./actors/Canvas/Canvas"
import GUI from "./managers/GUI/GUI"
import { config } from "./config"
import { config as electricConfig } from "./actors/Visualizer/renderers/Electric/config"
import type { GUISettings } from "./types"

// Setup
const initialState = {
  isRunning: true,
}

// Setup
class App {
  private _canvas!: Canvas
  private _player!: Player
  private _gui!: GUI

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

    requestAnimationFrame(() => this._tick())
  }

  init() {
    const canvasEl = document.getElementById("canvas")
    if (!(canvasEl instanceof HTMLCanvasElement)) {
      throw new Error("Canvas element not found")
    }

    const canvasCtx = canvasEl.getContext("2d")
    if (!canvasCtx) {
      throw new Error("2D canvas context is unavailable")
    }

    const settings: GUISettings = {
      visualization: {
        variant: config.variant.bars,
      },
      bars: {
        channels: config.channels.both,
      },
      electric: {
        ringsAmount: electricConfig.ringsAmount,
      },
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
