export const config = {
  angleOffset: -1.5 * Math.PI, // Start drawing arc from bottom center
  bandCountSingleChannel: 256,
  bandCountBothChannels: 128,
  maxFrequency: 20000,
  smoothingWindowSize: 5,
  lineWidth: 3,
  fillLeft: (frequency: number) => `rgb(255, ${frequency}, 0)`,
  fillRight: (frequency: number) => `rgb(0, ${frequency}, 255)`,
}
