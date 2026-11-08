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
  fillDynamic: (opacity: number) => `rgba(75, 25, 225, ${opacity})`,
}
