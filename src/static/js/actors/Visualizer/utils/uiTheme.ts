import { getHueShiftedColor } from "../../../utils/color"
import { config } from "../config"
import type {
  GUISettings,
  RgbaColor,
  VisualizationVariant,
} from "../../../types"

export interface UITheme {
  accent: string
  ringStart: string
  ringEnd: string
  trackStart: string
  trackEnd: string
}

export const getUITheme = (
  variant: VisualizationVariant,
  settings: GUISettings
): UITheme => {
  switch (variant) {
    case "electric":
      const { color } = settings.electric

      return {
        accent: getHueShiftedColor(color, 0),
        ringStart: getHueShiftedColor(color, -config.ring.hueShiftDegrees),
        ringEnd: getHueShiftedColor(color, config.ring.hueShiftDegrees),
        trackStart: getHueShiftedColor(color, -config.track.hueShiftDegrees),
        trackEnd: getHueShiftedColor(color, config.track.hueShiftDegrees),
      }
    default:
      return {
        accent: config.accent.color,
        ringStart: config.ring.colors[0],
        ringEnd: config.ring.colors[1],
        trackStart: config.track.colors[0],
        trackEnd: config.track.colors[1],
      }
  }
}
