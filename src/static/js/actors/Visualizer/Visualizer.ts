import { config } from "./config"
import { getCenter } from "../../utils/uiHelpers"
import type { GUISettings, VisualizationVariant } from "../../types"
import type { Renderer, VisualizerDrawOptions } from "./types"
import { createRenderer } from "./utils/rendererFactory"
import { RingSegment, UITheme } from "./ui/types"
import { getUITheme } from "./ui/theme"

class Visualizer {
  private readonly _canvasCtx: CanvasRenderingContext2D
  private readonly _settings: GUISettings
  private _activeVariant: VisualizationVariant
  private _activeRenderer: Renderer
  private _appliedUITheme?: string

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

  private _syncUITheme(theme: UITheme) {
    const serializedTheme = JSON.stringify(theme)

    if (serializedTheme === this._appliedUITheme) return

    this._appliedUITheme = serializedTheme

    const rootStyle = document.documentElement.style

    rootStyle.setProperty("--ui-accent", theme.accent)
    rootStyle.setProperty("--ui-ring-start", theme.ring[0].start)
    rootStyle.setProperty(
      "--ui-ring-end",
      theme.ring[theme.ring.length - 1].end
    )
    rootStyle.setProperty("--ui-track-start", theme.trackStart)
    rootStyle.setProperty("--ui-track-end", theme.trackEnd)
  }

  private _drawRingSegment({ arc, start, end }: RingSegment) {
    const centre = getCenter()
    const gradient = this._canvasCtx.createLinearGradient(
      0,
      window.innerHeight,
      0,
      0
    )
    gradient.addColorStop(0, start)
    gradient.addColorStop(1, end)

    this._canvasCtx.lineWidth = config.ring.lineWidth
    this._canvasCtx.strokeStyle = gradient

    this._canvasCtx.beginPath()
    this._canvasCtx.arc(
      centre.x,
      centre.y,
      config.ring.radius,
      config.ring.arcs[arc].start,
      config.ring.arcs[arc].end
    )
    this._canvasCtx.stroke()
  }

  private _drawUI(theme: UITheme) {
    theme.ring.forEach((segment) => this._drawRingSegment(segment))
  }

  draw({ spectrum, elapsedMs }: VisualizerDrawOptions) {
    const theme = getUITheme(
      this._settings.visualization.variant,
      this._settings
    )

    this._syncUITheme(theme)
    this._drawUI(theme)
    this._syncRenderer()

    if (!spectrum) return

    this._activeRenderer.draw({ channels: spectrum.channels, elapsedMs })
  }
}

export default Visualizer
