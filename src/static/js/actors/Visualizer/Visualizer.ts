import { config } from "./config"
import { config as globalConfig } from "../../config"
import { getCenter } from "../../utils/uiHelpers"
import BarsRenderer from "./renderers/Bars/BarsRenderer"
import ElectricRenderer from "./renderers/Electric/ElectricRenderer"
import type { VisualizationSettings, VisualizationVariant } from "../../types"
import type { SpectrumFrame, Renderer, ChannelsData } from "./types"

type RendererConstructor = new (canvasCtx: CanvasRenderingContext2D) => Renderer

const renderers: Record<VisualizationVariant, RendererConstructor> = {
  [globalConfig.variant.bars]: BarsRenderer,
  [globalConfig.variant.electric]: ElectricRenderer,
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
    const VariantRenderer = renderers[variant]

    return new VariantRenderer(this._canvasCtx)
  }

  private _syncRenderer() {
    if (this._variant !== this._settings.variant) {
      this._variant = this._settings.variant

      this._renderer = this._createRenderer(this._variant)
    }
  }

  private _getChannels(data: SpectrumFrame): ChannelsData {
    const selectedChannels = this._settings.channels

    const isSolo = selectedChannels !== globalConfig.channels.both
    const channels = isSolo
      ? data.channels.filter((channel) => channel.name === selectedChannels)
      : data.channels

    return {
      channels,
      isSolo,
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

  draw(data?: SpectrumFrame) {
    this._drawUI()

    if (!data) return

    this._syncRenderer()
    this._renderer.draw(this._getChannels(data))
  }
}

export default Visualizer
