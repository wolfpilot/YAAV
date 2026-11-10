import { getHueShiftedColor } from "../../../utils/color"
import { config } from "../config"
import { config as electricConfig } from "../renderers/Electric/config"
import type { GUISettings, VisualizationVariant } from "../../../types"

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
    case "electric": {
      const { color } = settings.electric

      return {
        accent: getHueShiftedColor(color, 0),
        ringStart: getHueShiftedColor(color, -electricConfig.uiRingHueShift),
        ringEnd: getHueShiftedColor(color, electricConfig.uiRingHueShift),
        trackStart: getHueShiftedColor(color, -electricConfig.uiTrackHueShift),
        trackEnd: getHueShiftedColor(color, electricConfig.uiTrackHueShift),
      }
    }
    default:
      return {
        accent: config.colors.accent,
        ringStart: config.colors.ring[0],
        ringEnd: config.colors.ring[1],
        trackStart: config.colors.track[0],
        trackEnd: config.colors.track[1],
      }
  }
}
