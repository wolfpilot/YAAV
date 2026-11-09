import type { RgbaColor } from "../../../../types"
import { interpolate } from "../../../../utils/mathHelpers"
import { MinMaxRange } from "../../../../utils/types"

export interface HslaColor {
  h: number
  s: number
  l: number
  a: number
}

export const rgbToHsl = ({ r, g, b, a }: RgbaColor): HslaColor => {
  const red = r / 255
  const green = g / 255
  const blue = b / 255
  const max = Math.max(red, green, blue)
  const min = Math.min(red, green, blue)
  const delta = max - min
  const lightness = (max + min) / 2

  if (delta === 0) {
    return { h: 0, s: 0, l: lightness * 100, a }
  }

  const saturation = delta / (1 - Math.abs(2 * lightness - 1))
  let hue: number

  if (max === red) {
    hue = ((green - blue) / delta) % 6
  } else if (max === green) {
    hue = (blue - red) / delta + 2
  } else {
    hue = (red - green) / delta + 4
  }

  return {
    h: (hue * 60 + 360) % 360,
    s: saturation * 100,
    l: lightness * 100,
    a,
  }
}

/**
 * Get the bar color for a magnitude: the base color's hue is shifted, while
 * saturation and lightness move through their ranges (silent to maximum).
 */
export const getMagnitudeColor = ({
  color,
  magnitude,
  hueShiftDegrees,
  saturationRange,
  lightnessRange,
}: {
  color: HslaColor
  magnitude: number
  hueShiftDegrees: number
  saturationRange: MinMaxRange
  lightnessRange: MinMaxRange
}): string => {
  const progress = Math.max(0, Math.min(magnitude / 255, 1))
  const hue = (color.h + hueShiftDegrees * progress + 360) % 360
  const saturation = interpolate(saturationRange, progress)
  const lightness = interpolate(lightnessRange, progress)

  return `hsla(${hue}, ${saturation}%, ${lightness}%, ${color.a})`
}
