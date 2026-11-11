import { config as globalConfig } from "../../../config"
import {
  formatHsl,
  rgbToHsl,
  shiftHue,
  type HslaColor,
} from "../../../utils/color"
import { config } from "../config"
import { config as barsConfig } from "../renderers/Bars/config"
import { getMagnitudeHsl } from "../renderers/Bars/color"
import type {
  BarsSettings,
  GUISettings,
  RgbaColor,
  VisualizationVariant,
} from "../../../types"

export type RingArc = "full" | "left" | "right"

/**
 * A part of the ring, with a gradient running from the bottom to the top
 */
export interface RingSegment {
  arc: RingArc
  start: string
  end: string
}

export interface UITheme {
  accent: string
  ring: RingSegment[]
  trackStart: string
  trackEnd: string
}

const getRingSegment = (arc: RingArc, color: HslaColor): RingSegment => ({
  arc,
  start: formatHsl(shiftHue(color, -config.ring.hueShiftDegrees)),
  end: formatHsl(shiftHue(color, config.ring.hueShiftDegrees)),
})

/**
 * Generic helper for getting a single (usually channel-based) theme
 */
const getSingleColorTheme = (color: HslaColor): UITheme => ({
  accent: formatHsl(color),
  ring: [getRingSegment("full", color)],
  trackStart: formatHsl(shiftHue(color, -config.track.hueShiftDegrees)),
  trackEnd: formatHsl(shiftHue(color, config.track.hueShiftDegrees)),
})

const getBarsTheme = (settings: BarsSettings): UITheme => {
  const { channels, colorChannelL, colorChannelR } = settings

  // The color a bar of this channel has at the reference magnitude
  const getReferenceColor = (channelColor: RgbaColor): HslaColor =>
    getMagnitudeHsl({
      color: rgbToHsl(channelColor),
      magnitude: barsConfig.uiReferenceMagnitude,
      hueShiftDegrees: settings.hueShiftDegrees,
      saturationRange: settings.saturationRange,
      lightnessRange: settings.lightnessRange,
    })

  // Two channels, with one half of the ring for each
  if (channels === globalConfig.channels.both) {
    const left = getReferenceColor(colorChannelL)
    const right = getReferenceColor(colorChannelR)

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

  // Single channel
  const color =
    channels === globalConfig.channels.left ? colorChannelL : colorChannelR

  return getSingleColorTheme(getReferenceColor(color))
}

export const getUITheme = (
  variant: VisualizationVariant,
  settings: GUISettings
): UITheme => {
  switch (variant) {
    case "electric":
      return getSingleColorTheme(rgbToHsl(settings.electric.color))
    default:
      return getBarsTheme(settings.bars)
  }
}
