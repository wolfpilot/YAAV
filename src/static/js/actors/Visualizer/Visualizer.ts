import { config } from "./config"
import { getCenter } from "../../utils/uiHelpers"
import type { GUISettings, VisualizationVariant } from "../../types"
import type { Renderer, VisualizerDrawOptions } from "./types"
import { createRenderer } from "./utils/rendererFactory"
import { getUITheme, type UITheme } from "./utils/uiTheme"

class Visualizer {
  private readonly _canvasCtx: CanvasRenderingContext2D
  private readonly _settings: GUISettings
  private _activeVariant: VisualizationVariant
  private _activeRenderer: Renderer

  constructor(canvasCtx: CanvasRenderingContext2D, settings: GUISettings) {
    this._canvasCtx = canvasCtx
    this._settings = settings
    this._activeVariant = settings.visualization.variant
    this._activeRenderer = this._createRenderer(this._activeVariant)
  }

  private _createRenderer(variant: VisualizationVariant): Renderer {
    return createRenderer(variant, this._canvasCtx, this._settings)
  }

  private _syncRenderer() {
    if (this._activeVariant !== this._settings.visualization.variant) {
      this._activeVariant = this._settings.visualization.variant
      this._activeRenderer = this._createRenderer(this._activeVariant)
    }
  }

  private _drawUI(theme: UITheme) {
    const centre = getCenter()
    // @TODO: Add dynamic multiple coloured arc generator
    const gradient = this._canvasCtx.createLinearGradient(
      0,
      window.innerHeight,
      0,
      0
    )
    gradient.addColorStop(0, theme.ringStart)
    gradient.addColorStop(1, theme.ringEnd)

    this._canvasCtx.lineWidth = config.circle.lineWidth
    this._canvasCtx.strokeStyle = gradient

    this._canvasCtx.beginPath()
    this._canvasCtx.arc(
      centre.x,
      centre.y,
      config.circle.radius,
      0,
      Math.PI * 2
    )
    this._canvasCtx.stroke()
  }

  draw({ spectrum, elapsedMs }: VisualizerDrawOptions) {
    const theme = getUITheme(this._settings.visualization.variant, this._settings)

    this._drawUI(theme)
    this._syncRenderer()

    if (!spectrum) return

    this._activeRenderer.draw({ channels: spectrum.channels, elapsedMs })
  }
}

export default Visualizer
