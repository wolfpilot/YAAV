import { config as globalConfig } from "../../../config"
import { getHueShiftedColor } from "../../../utils/color"
import { config } from "../config"
import type {
  BarsSettings,
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

/**
 * Generic helper for getting a single (usually channel-based) theme
 */
// prettier-ignore
const getSingleColorTheme = (color: RgbaColor, hueOffset = 0): UITheme => ({
  accent: getHueShiftedColor(color, hueOffset),
  ringStart: getHueShiftedColor(color, hueOffset - config.ring.hueShiftDegrees),
  ringEnd: getHueShiftedColor(color, hueOffset + config.ring.hueShiftDegrees),
  trackStart: getHueShiftedColor(color, hueOffset - config.track.hueShiftDegrees),
  trackEnd: getHueShiftedColor(color, hueOffset + config.track.hueShiftDegrees),
})

const getBarsTheme = ({
  channels,
  colorChannelL,
  colorChannelR,
  hueShiftDegrees,
}: BarsSettings): UITheme => {
  // Two channels
  if (channels === globalConfig.channels.both) {
    const start = getHueShiftedColor(colorChannelL, hueShiftDegrees)
    const end = getHueShiftedColor(colorChannelR, hueShiftDegrees)

    const accent = `color-mix(in srgb, ${start}, ${end})`

    return {
      accent,
      ringStart: start,
      ringEnd: end,
      trackStart: start,
      trackEnd: end,
    }
  }

  // Single channel
  const color =
    channels === globalConfig.channels.left ? colorChannelL : colorChannelR

  return getSingleColorTheme(color, hueShiftDegrees)
}

export const getUITheme = (
  variant: VisualizationVariant,
  settings: GUISettings
): UITheme => {
  switch (variant) {
    case "electric":
      return getSingleColorTheme(settings.electric.color)
    default:
      return getBarsTheme(settings.bars)
  }
}
