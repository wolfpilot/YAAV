import { config } from "./config"
import { config as globalConfig } from "../../config"
import { getCenter } from "../../utils/uiHelpers"
import BarsRenderer from "./renderers/Bars/BarsRenderer"
import ElectricRenderer from "./renderers/Electric/ElectricRenderer"
import type { VisualizationSettings, VisualizationVariant } from "../../types"
import type { Renderer, VisualizerDrawOptions } from "./types"

type RendererFactory = (
  canvasCtx: CanvasRenderingContext2D,
  settings: VisualizationSettings
) => Renderer

const renderers: Record<VisualizationVariant, RendererFactory> = {
  [globalConfig.variant.bars]: (canvasCtx, settings) =>
    new BarsRenderer(canvasCtx, settings.bars),
  [globalConfig.variant.electric]: (canvasCtx) =>
    new ElectricRenderer(canvasCtx),
}

class Visualizer {
  private readonly _canvasCtx: CanvasRenderingContext2D
  private readonly _settings: VisualizationSettings
  private _variant: VisualizationVariant
  private _renderer: Renderer

  constructor(
    canvasCtx: CanvasRenderingContext2D,
    settings: VisualizationSettings
  ) {
    this._canvasCtx = canvasCtx
    this._settings = settings
    this._variant = settings.variant
    this._renderer = this._createRenderer(this._variant)
  }

  private _createRenderer(variant: VisualizationVariant): Renderer {
    const createRenderer = renderers[variant]

    return createRenderer(this._canvasCtx, this._settings)
  }

  private _syncRenderer() {
    if (this._variant !== this._settings.variant) {
      this._variant = this._settings.variant

      this._renderer = this._createRenderer(this._variant)
    }
  }

  private _drawUI() {
    const centre = getCenter()
    // @TODO: Add dynamic multiple coloured arc generator
    const gradient = this._canvasCtx.createLinearGradient(
      0,
      window.innerHeight,
      0,
      0
    )
    gradient.addColorStop(0, config.circle.stroke[0])
    gradient.addColorStop(1, config.circle.stroke[1])

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
    this._drawUI()
    this._syncRenderer()

    if (!spectrum) return

    this._renderer.draw({ channels: spectrum.channels, elapsedMs })
  }
}

export default Visualizer
