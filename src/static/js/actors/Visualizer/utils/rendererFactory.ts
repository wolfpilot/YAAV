import BarsRenderer from "../renderers/Bars/BarsRenderer"
import ElectricRenderer from "../renderers/Electric/ElectricRenderer"
import type { GUISettings, VisualizationVariant } from "../../../types"
import type { Renderer } from "../types"

export const createRenderer = (
  variant: VisualizationVariant,
  canvasCtx: CanvasRenderingContext2D,
  settings: GUISettings
): Renderer => {
  switch (variant) {
    case "electric":
      return new ElectricRenderer(canvasCtx, settings.electric)
    default:
      return new BarsRenderer(canvasCtx, settings.bars)
  }
}
