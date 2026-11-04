export const getDistinctFrequencyBands = (
  frequencyData,
  sampleRate,
  fftSize,
  bandCount,
  minFrequency,
  maxFrequency,
  scale
) => {
  const binWidth = sampleRate / fftSize
  const upperFrequency = Math.min(maxFrequency, sampleRate / 2)

  const firstBin = Math.max(1, Math.ceil(minFrequency / binWidth))
  const lastBin = Math.min(
    frequencyData.length,
    Math.ceil(upperFrequency / binWidth)
  )

  const count = Math.min(bandCount, Math.max(0, lastBin - firstBin))
  const bands = new Uint8Array(count)

  let start = firstBin

  for (let i = 0; i < count; i++) {
    const fraction = (i + 1) / count
    const boundary =
      scale === "linear"
        ? minFrequency + (upperFrequency - minFrequency) * fraction
        : minFrequency * (upperFrequency / minFrequency) ** fraction

    const desiredEnd = Math.ceil(boundary / binWidth)
    const lastAvailableEnd = lastBin - (count - i - 1)
    const end =
      i === count - 1
        ? lastBin
        : Math.max(start + 1, Math.min(desiredEnd, lastAvailableEnd))

    for (let bin = start; bin < end; bin++) {
      bands[i] = Math.max(bands[i], frequencyData[bin])
    }

    start = end
  }

  return bands
}
