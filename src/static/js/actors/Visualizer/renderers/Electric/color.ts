import { shiftHue, type HslaColor } from "../../../../utils/color"

/**
 * Get the color for a band magnitude (0 - 255): the hue shifts with the
 * magnitude, up to the full shift at the maximum.
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
