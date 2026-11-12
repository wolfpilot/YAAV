import type { HslaColor } from "../../../../utils/color"

export const config = {
  minFrequency: 40,
  maxFrequency: 12000,
  bandCount: 128,
  angleOffset: -1.5 * Math.PI,
  rotationPeriodSeconds: 60,
  centreOffset: 5,
  ringsAmount: 10,
  ringSpacing: 3,
  hueShiftDegrees: 0,
  lineWidthMin: 0.5,
  lineWidthMax: 30,
  lineWidthDynamic: (min: number, max: number, percent: number) =>
    min + percent * max,
  uiRingHueShift: 15,
  uiTrackHueShift: 30,
  color: { r: 75, g: 25, b: 225, a: 1 },
  fillDynamic: ({ h, s, l, a }: HslaColor, opacity: number) =>
    `hsla(${h}, ${s}%, ${l}%, ${a * opacity})`,
}
