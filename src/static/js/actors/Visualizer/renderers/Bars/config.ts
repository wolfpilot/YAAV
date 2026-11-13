export const config = {
  angleOffset: -1.5 * Math.PI, // Start drawing arc from bottom center
  // Bands per ring, shared by bass, mids and highs
  ringBandCountSingleChannel: 128,
  ringBandCountBothChannels: 64,
  maxFrequency: 20000,
  midsMaxFrequency: 6000,
  smoothingWindowSize: 5,
  centreOffset: 10,
  ringGap: 75,
  // Ordered from the innermost to the outermost ring
  rings: [
    { band: "bass", opacity: 1 },
    { band: "mids", opacity: 0.75 },
    { band: "highs", opacity: 0.5 },
  ] as const,
  // Faint ring behind the others, driven by the whole spectrum at once.
  // It starts at the bass ring and reaches the highs ring, then extends
  // past it by magnitude * lengthScale.
  backgroundRing: { opacity: 0.01, lineWidth: 5, lengthScale: 0 },
  lineWidths: { bass: 5, mids: 2.25, highs: 1.75 },
  // Keep the left and right colors identical when edited in the GUI
  linkedColors: true,
  colorLeft: { r: 90, g: 25, b: 225, a: 0.75 },
  colorRight: { r: 90, g: 25, b: 225, a: 0.75 },
  glowBlur: 10,
  // Groups of adjacent colours for faster processing
  colorGroups: 16,
  hueShiftDegrees: -180,
  // Magnitude (0 - 255) at which the player UI mimics the bars' color
  uiReferenceMagnitude: 100,
  saturationRange: { min: 75, max: 100 },
  lightnessRange: { min: 10, max: 90 },
}
