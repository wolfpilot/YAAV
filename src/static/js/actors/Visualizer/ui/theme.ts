import type { GUISettings, VisualizationVariant } from "../../../types"
import { UITheme } from "./types"
import { getBarsTheme } from "./variants/barsThemeHelpers"
import { getElectricTheme } from "./variants/electricThemeHelpers"

export const getUITheme = (
  variant: VisualizationVariant,
  settings: GUISettings
): UITheme => {
  switch (variant) {
    case "electric":
      return getElectricTheme(settings.electric)
    default:
      return getBarsTheme(settings.bars)
  }
}
