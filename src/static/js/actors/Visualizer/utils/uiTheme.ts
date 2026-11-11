import { config as globalConfig } from "../../../config"
import { getHueShiftedColor } from "../../../utils/color"
import { config } from "../config"
import type {
  BarsSettings,
  GUISettings,
  RgbaColor,
  VisualizationVariant,
} from "../../../types"

export type RingArc = keyof typeof config.ring.arcs

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

const getRingSegment = (
  arc: RingArc,
  color: RgbaColor,
  hueOffset: number
): RingSegment => ({
  arc,
  start: getHueShiftedColor(color, hueOffset - config.ring.hueShiftDegrees),
  end: getHueShiftedColor(color, hueOffset + config.ring.hueShiftDegrees),
})

/**
 * Generic helper for getting a single (usually channel-based) theme
 */
// prettier-ignore
const getSingleColorTheme = (color: RgbaColor, hueOffset = 0): UITheme => ({
  accent: getHueShiftedColor(color, hueOffset),
  ring: [getRingSegment("full", color, hueOffset)],
  trackStart: getHueShiftedColor(color, hueOffset - config.track.hueShiftDegrees),
  trackEnd: getHueShiftedColor(color, hueOffset + config.track.hueShiftDegrees),
})

const getBarsTheme = ({
  channels,
  colorChannelL,
  colorChannelR,
  hueShiftDegrees,
}: BarsSettings): UITheme => {
  // Two channels, with one half of the ring for each
  if (channels === globalConfig.channels.both) {
    const start = getHueShiftedColor(colorChannelL, hueShiftDegrees)
    const end = getHueShiftedColor(colorChannelR, hueShiftDegrees)

    const accent = `color-mix(in srgb, ${start}, ${end})`

    return {
      accent,
      ring: [
        getRingSegment("left", colorChannelL, hueShiftDegrees),
        getRingSegment("right", colorChannelR, hueShiftDegrees),
      ],
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
