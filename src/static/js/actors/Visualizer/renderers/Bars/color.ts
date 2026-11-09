import type { HslaColor } from "../../../../utils/color"
import { interpolate } from "../../../../utils/mathHelpers"
import { MinMaxRange } from "../../../../utils/types"

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
