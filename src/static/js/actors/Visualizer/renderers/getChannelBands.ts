import { bassSpectrum, getAvailableBassBins } from "../../../utils/bassSpectrum"
import { getDistinctFrequencyBands } from "../../../utils/frequencyBands"
import type { ChannelData } from "../types"

export interface ChannelBandGroups {
  bass: number[]
  mids: number[]
  highs: number[]
}

export const getBassBandCount = (data: ChannelData): number =>
  Math.min(
    bassSpectrum.bandCount,
    getAvailableBassBins(data.sampleRate, data.bassFftSize)
  )

export const getBassBands = (
  data: ChannelData,
  bassBandCount: number
): Uint8Array =>
  getDistinctFrequencyBands(
    data.bassFrequencyData,
    data.sampleRate,
    data.bassFftSize,
    bassBandCount,
    bassSpectrum.minFrequency,
    bassSpectrum.maxFrequency,
    "linear"
  )

export const getUpperBands = (
  data: ChannelData,
  totalBandCount: number,
  bassBandCount: number,
  maxFrequency: number
) =>
  getDistinctFrequencyBands(
    data.frequencyData,
    data.sampleRate,
    data.fftSize,
    totalBandCount - bassBandCount,
    bassSpectrum.maxFrequency,
    maxFrequency,
    "logarithmic"
  )

export const getChannelBands = (
  data: ChannelData,
  totalBandCount: number,
  maxFrequency: number
): number[] => {
  const bassBandCount = getBassBandCount(data)
  const bassBands = getBassBands(data, bassBandCount)

  const upperBands = getUpperBands(
    data,
    totalBandCount,
    bassBandCount,
    maxFrequency
  )

  return [...bassBands, ...upperBands]
}
