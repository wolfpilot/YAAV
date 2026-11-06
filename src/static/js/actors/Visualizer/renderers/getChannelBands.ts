import { bassSpectrum, getAvailableBassBins } from "../../../utils/bassSpectrum"
import { getDistinctFrequencyBands } from "../../../utils/frequencyBands"
import type { ChannelData } from "../types"

export const getChannelBands = (
  data: ChannelData,
  totalBandCount: number,
  maxFrequency: number
): number[] => {
  const bassBandCount = Math.min(
    bassSpectrum.bandCount,
    getAvailableBassBins(data.sampleRate, data.bassFftSize)
  )
  const bassBands = getDistinctFrequencyBands(
    data.bassFrequencyData,
    data.sampleRate,
    data.bassFftSize,
    bassBandCount,
    bassSpectrum.minFrequency,
    bassSpectrum.maxFrequency,
    "linear"
  )
  const upperBands = getDistinctFrequencyBands(
    data.frequencyData,
    data.sampleRate,
    data.fftSize,
    totalBandCount - bassBandCount,
    bassSpectrum.maxFrequency,
    maxFrequency,
    "logarithmic"
  )

  return [...bassBands, ...upperBands]
}
