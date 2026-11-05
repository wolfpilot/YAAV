export const config = {
  circle: {
    radius: 150,
    lineWidth: 3,
    stroke: ["blue", "purple"],
  },
  volumeBar: {
    angleOffset: -1.5 * Math.PI, // Start drawing arc from bottom center
    bandCountSingleChannel: 128,
    bandCountBothChannels: 256,
    maxFrequency: 20000,
    lineWidth: 3,
    fillLeft: (frequency: number) => `rgb(255, ${frequency}, 0)`,
    fillRight: (frequency: number) => `rgb(0, ${frequency}, 255)`,
  },
  electric: {
    minFrequency: 40,
    maxFrequency: 12000,
    bandCountSingleChannel: 64,
    bandCountBothChannels: 128,
    angleOffset: -1.5 * Math.PI,
    centreOffset: 10,
    lineWidth: 3,
    fill: `rgb(225, 225, 225)`,
  },
}
