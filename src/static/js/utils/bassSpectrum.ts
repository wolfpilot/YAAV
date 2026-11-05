const BASS_FFT_BLOCK_SIZE = 2048
const BASS_FFT_MAX_SIZE = 32768

export const bassSpectrum = {
  minFrequency: 20,
  maxFrequency: 250,
  bandCount: 32,
}

/**
 * Get the number of usable FFT bins in the 20–250 Hz bass range.
 */
export const getAvailableBassBins = (
  sampleRate: number,
  fftSize: number
): number => {
  const binWidth = sampleRate / fftSize
  const firstBin = Math.max(1, Math.ceil(bassSpectrum.minFrequency / binWidth))
  const endBin = Math.min(
    fftSize / 2,
    Math.ceil(bassSpectrum.maxFrequency / binWidth)
  )

  return Math.max(0, endBin - firstBin)
}

/**
 * Get the smallest supported FFT size with at least 32 bass bins.
 *
 * Returns Web Audio's maximum when that resolution is unavailable.
 */
export const getBassFftSize = (sampleRate: number): number => {
  // prettier-ignore
  for (let fftSize = BASS_FFT_BLOCK_SIZE; fftSize <= BASS_FFT_MAX_SIZE; fftSize *= 2) {
    if (getAvailableBassBins(sampleRate, fftSize) < bassSpectrum.bandCount) {
      continue;
    }

    return fftSize;
  }

  return BASS_FFT_MAX_SIZE
}
