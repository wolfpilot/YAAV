export const bassSpectrum = {
  minFrequency: 20,
  maxFrequency: 250,
  bandCount: 32,
}

export const getAvailableBassBins = (sampleRate, fftSize) => {
  const binWidth = sampleRate / fftSize
  const firstBin = Math.max(1, Math.ceil(bassSpectrum.minFrequency / binWidth))
  const endBin = Math.min(
    fftSize / 2,
    Math.ceil(bassSpectrum.maxFrequency / binWidth)
  )

  return Math.max(0, endBin - firstBin)
}

export const getBassFftSize = (sampleRate) => {
  for (let fftSize = 2048; fftSize <= 32768; fftSize *= 2) {
    if (getAvailableBassBins(sampleRate, fftSize) >= bassSpectrum.bandCount) {
      return fftSize
    }
  }

  return 32768
}
