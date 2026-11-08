/** Get a centered moving average without wrapping the ends. */
export const movingAverage = (
  values: ArrayLike<number>,
  windowSize: number
): number[] => {
  if (!Number.isInteger(windowSize) || windowSize < 1 || windowSize % 2 === 0) {
    throw new RangeError("windowSize must be a positive odd integer")
  }

  const radius = (windowSize - 1) / 2
  const result = new Array<number>(values.length)

  for (let i = 0; i < values.length; i++) {
    const start = Math.max(0, i - radius)
    const end = Math.min(values.length - 1, i + radius)
    let sum = 0

    for (let j = start; j <= end; j++) {
      sum += values[j]
    }

    result[i] = sum / (end - start + 1)
  }

  return result
}
