import { formatHsl, shiftHue, type HslaColor } from "../../../utils/color"
import { config } from "../config"

import { RingArc, RingSegment, UITheme } from "./types"

export const getRingSegment = (
  arc: RingArc,
  color: HslaColor
): RingSegment => ({
  arc,
  start: formatHsl(shiftHue(color, -config.ring.hueShiftDegrees)),
  end: formatHsl(shiftHue(color, config.ring.hueShiftDegrees)),
})

/**
 * Generic helper for getting a single (usually channel-based) theme
 */
export const getSingleColorTheme = (color: HslaColor): UITheme => ({
  accent: formatHsl(color),
  ring: [getRingSegment("full", color)],
  trackStart: formatHsl(shiftHue(color, -config.track.hueShiftDegrees)),
  trackEnd: formatHsl(shiftHue(color, config.track.hueShiftDegrees)),
})
