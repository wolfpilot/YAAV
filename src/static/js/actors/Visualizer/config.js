export const config = {
  circle: {
    radius: 150,
    lineWidth: 3,
    stroke: ["blue", "purple"],
  },
  volumeBar: {
    angleOffset: -1.5 * Math.PI, // Start drawing arc from bottom center
    bandCount: 128,
    maxFrequency: 20000,
    lineWidth: 3,
    fillLeft: (frequency) => `rgb(255, ${frequency}, 0)`,
    fillRight: (frequency) => `rgb(0, ${frequency}, 255)`,
  },
}
