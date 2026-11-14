import { parseWebStream } from "music-metadata"

// Modules
import Player from "./actors/Player/Player"
import Canvas from "./actors/Canvas/Canvas"
import GUI from "./managers/GUI/GUI"
import { config } from "./config"
import { config as barsConfig } from "./actors/Visualizer/renderers/Bars/config"
import { config as electricConfig } from "./actors/Visualizer/renderers/Electric/config"
import type { GUISettings } from "./types"
import { getErrorMessage } from "./utils/errorHelpers"
import { Track } from "./actors/Player/types"

// Setup
const initialState = {
  isRunning: true,
}

const settings: GUISettings = {
  visualization: {
    variant: config.variant.bars,
  },
  bars: {
    channels: config.channels.both,
    ringBandCountSingleChannel: barsConfig.ringBandCountSingleChannel,
    ringBandCountBothChannels: barsConfig.ringBandCountBothChannels,
    glowBlur: barsConfig.glowBlur,
    lineWidths: { ...barsConfig.lineWidths },
    hueShiftDegrees: barsConfig.hueShiftDegrees,
    saturationRange: { ...barsConfig.saturationRange },
    lightnessRange: { ...barsConfig.lightnessRange },
    linkedColors: barsConfig.linkedColors,
    colorChannelL: { ...barsConfig.colorLeft },
    colorChannelR: { ...barsConfig.colorRight },
  },
  electric: {
    bandCount: electricConfig.bandCount,
    ringsAmount: electricConfig.ringsAmount,
    ringSpacing: electricConfig.ringSpacing,
    hueShiftDegrees: electricConfig.hueShiftDegrees,
    rotationPeriodSeconds: electricConfig.rotationPeriodSeconds,
    lineWidthMin: electricConfig.lineWidthMin,
    lineWidthMax: electricConfig.lineWidthMax,
    color: { ...electricConfig.color },
  },
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

  async _getMetadata() {
    try {
      const response = await fetch(config.track.source)

      const contentType = response.headers.get("Content-Type")
      const contentLength = response.headers.get("Content-Length")

      const mimeType = contentType || undefined
      const size = contentLength ? parseInt(contentLength, 10) : undefined

      const metadata = await parseWebStream(response.body, {
        mimeType,
        size,
      })

      return metadata
    } catch (error) {
      console.error("Error parsing metadata:", getErrorMessage(error))
    }
  }

  async init() {
    const canvasEl = document.getElementById("canvas")
    if (!(canvasEl instanceof HTMLCanvasElement)) {
      throw new Error("Canvas element not found")
    }

    const canvasCtx = canvasEl.getContext("2d")
    if (!canvasCtx) {
      throw new Error("2D canvas context is unavailable")
    }

    const metadata = await this._getMetadata()
    if (!metadata) {
      throw new Error("Could not parse metadata")
    }

    const track: Track = {
      source: config.track.source,
      artistName: metadata.common.artist || "",
      trackName: metadata.common.title || "",
    }

    this._gui = new GUI(settings)
    this._canvas = new Canvas(canvasEl, canvasCtx)
    this._player = new Player(canvasCtx, settings, track)

    this._gui.init()
    this._canvas.init()
    this._player.init()

    window.addEventListener("resize", this._onResize)

    this._tick()
  }
}

export default App
