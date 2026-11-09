export const config = {
  angleOffset: -1.5 * Math.PI, // Start drawing arc from bottom center
  // Bands per ring, shared by bass, mids and highs
  ringBandCountSingleChannel: 64,
  ringBandCountBothChannels: 32,
  maxFrequency: 20000,
  midsMaxFrequency: 4000,
  smoothingWindowSize: 5,
  centreOffset: 10,
  ringGap: 40,
  // Ordered from the innermost to the outermost ring
  rings: [
    { band: "bass", lineWidth: 5, opacity: 1 },
    { band: "mids", lineWidth: 3, opacity: 0.75 },
    { band: "highs", lineWidth: 1, opacity: 0.5 },
  ] as const,
  colorLeft: { r: 255, g: 0, b: 0, a: 1 },
  colorRight: { r: 0, g: 0, b: 255, a: 1 },
  glowBLur: 10,
}
