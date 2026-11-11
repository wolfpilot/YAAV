import { config as globalConfig } from "../../../../config"
import { formatHsl, rgbToHsl, type HslaColor } from "../../../../utils/color"
import { config as barsConfig } from "../../renderers/Bars/config"
import { getMagnitudeHsl } from "../../renderers/Bars/color"
import type { BarsSettings, RgbaColor } from "../../../../types"
import { UITheme } from "../types"
import { getRingSegment, getSingleColorTheme } from "../helpers"

// The color a bar of this channel has at the reference magnitude
const getReferenceColor = (
  channelColor: RgbaColor,
  settings: BarsSettings
): HslaColor =>
  getMagnitudeHsl({
    color: rgbToHsl(channelColor),
    magnitude: barsConfig.uiReferenceMagnitude,
    hueShiftDegrees: settings.hueShiftDegrees,
    saturationRange: settings.saturationRange,
    lightnessRange: settings.lightnessRange,
  })

export const getBarsTheme = (settings: BarsSettings): UITheme => {
  const { channels, colorChannelL, colorChannelR } = settings

  // Two channels => one semi-circle per
  if (channels === globalConfig.channels.both) {
    const left = getReferenceColor(colorChannelL, settings)
    const right = getReferenceColor(colorChannelR, settings)

    const ringL = getRingSegment("left", left)
    const ringR = getRingSegment("right", right)

    const accent = `color-mix(in srgb, ${formatHsl(left)}, ${formatHsl(right)})`

    return {
      accent,
      ring: [ringL, ringR],
      trackStart: formatHsl(left),
      trackEnd: formatHsl(right),
    }
  }

  // Single channel => one full circle per
  const color =
    channels === globalConfig.channels.left ? colorChannelL : colorChannelR

  return getSingleColorTheme(getReferenceColor(color, settings))
}
