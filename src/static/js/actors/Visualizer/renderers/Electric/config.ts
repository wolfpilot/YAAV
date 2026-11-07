export const config = {
  minFrequency: 40,
  maxFrequency: 12000,
  bandCountSingleChannel: 64,
  bandCountBothChannels: 128,
  angleOffset: -1.5 * Math.PI,
  rotationPeriodSeconds: 60,
  centreOffset: 10,
  ringsAmount: 10,
  ringSpacing: 3,
  lineWidthDynamic: (val: number) => val * 30,
  fillDynamic: (opacity: number) => `rgba(75, 25, 225, ${opacity})`,
}
