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
    { band: "bass", lineWidth: 5, opacity: 1 },
    { band: "mids", lineWidth: 3.75, opacity: 0.75 },
    { band: "highs", lineWidth: 2.5, opacity: 0.5 },
  ] as const,
  colorLeft: { r: 25, g: 0, b: 225, a: 1 },
  colorRight: { r: 25, g: 0, b: 225, a: 1 },
  glowBlur: 10,
}
