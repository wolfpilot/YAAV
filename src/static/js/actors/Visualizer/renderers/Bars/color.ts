import type { HslaColor } from "../../../../utils/color"
import { interpolate } from "../../../../utils/mathHelpers"
import { MinMaxRange } from "../../../../utils/types"

interface MagnitudeColorOptions {
  color: HslaColor
  magnitude: number
  hueShiftDegrees: number
  saturationRange: MinMaxRange
  lightnessRange: MinMaxRange
}

/**
 * Get the color for a magnitude: the base color's hue is shifted, while
 * saturation and lightness move through their ranges (silent to maximum).
 */
export const getMagnitudeHsl = ({
  color,
  magnitude,
  hueShiftDegrees,
  saturationRange,
  lightnessRange,
}: MagnitudeColorOptions): HslaColor => {
  const progress = Math.max(0, Math.min(magnitude / 255, 1))

  return {
    h: (color.h + hueShiftDegrees * progress + 360) % 360,
    s: interpolate(saturationRange, progress),
    l: interpolate(lightnessRange, progress),
    a: color.a,
  }
}

export const getMagnitudeColor = (options: MagnitudeColorOptions): string => {
  const { h, s, l, a } = getMagnitudeHsl(options)

  return `hsla(${h}, ${s}%, ${l}%, ${a})`
}
