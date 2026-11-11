export const config = {
  angleOffset: -1.5 * Math.PI, // Start drawing arc from bottom center
  // Bands per ring, shared by bass, mids and highs
  ringBandCountSingleChannel: 128,
  ringBandCountBothChannels: 64,
  maxFrequency: 20000,
  midsMaxFrequency: 6000,
  smoothingWindowSize: 5,
  centreOffset: 10,
  ringGap: 50,
  // Ordered from the innermost to the outermost ring
  rings: [
    { band: "bass", opacity: 1 },
    { band: "mids", opacity: 0.75 },
    { band: "highs", opacity: 0.5 },
  ] as const,
  lineWidths: { bass: 5, mids: 3.75, highs: 2.5 },
  colorLeft: { r: 25, g: 125, b: 225, a: 1 },
  colorRight: { r: 25, g: 125, b: 225, a: 1 },
  glowBlur: 10,
  hueShiftDegrees: 225,
  // Magnitude (0 - 255) at which the player UI mimics the bars' color
  uiReferenceMagnitude: 100,
  saturationRange: { min: 75, max: 100 },
  lightnessRange: { min: 10, max: 90 },
}
