import { shiftHue, type HslaColor } from "../../../../utils/color"

/**
 * Get the color for a band magnitude (0 - 255)
 *
 * The hue shifts with the magnitude up to the full shift at the maximum.
 */
export const getBandColor = ({
  color,
  magnitude,
  hueShiftDegrees,
}: {
  color: HslaColor
  magnitude: number
  hueShiftDegrees: number
}): HslaColor => {
  const progress = Math.max(0, Math.min(magnitude / 255, 1))

  return shiftHue(color, hueShiftDegrees * progress)
}

/**
 * Get the opacity multiplier for a band.
 *
 * Silent bands are transparent and the loudest ones are fully opaque.
 */
export const getBandOpacity = ({
  magnitude,
  fullMagnitude,
}: {
  magnitude: number
  fullMagnitude: number
}): number => Math.max(0, Math.min(magnitude / fullMagnitude, 1))
