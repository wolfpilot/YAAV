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
  lineWidthMin: 0.5,
  lineWidthMax: 30,
  lineWidthDynamic: (min: number, max: number, percent: number) =>
    min + percent * max,
  uiRingHueShift: 15,
  uiTrackHueShift: 30,
  color: { r: 225, g: 25, b: 150, a: 1 },
  fillDynamic: ({ h, s, l, a }: HslaColor, opacity: number) =>
    `hsla(${h}, ${s}%, ${l}%, ${a * opacity})`,
  hueShiftDegrees: 90,
  // Band magnitude (0 - 255) at which the player UI mimics the rings' color
  uiReferenceMagnitude: 100,
  // Band opacity follows its magnitude, so rings fade out when music stops
  bandOpacity: {
    // Magnitude (0 - 255) at which a band is fully opaque
    fullMagnitude: 100,
  },
}
