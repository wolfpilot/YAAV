import { bassSpectrum, getAvailableBassBins } from "../../../utils/bassSpectrum"
import { getDistinctFrequencyBands } from "../../../utils/frequencyBands"
import type { ChannelData } from "../types"

export interface ChannelBandGroups {
  bass: number[]
  mids: number[]
  highs: number[]
}

const getBassBandCount = (data: ChannelData): number =>
  Math.min(
    bassSpectrum.bandCount,
    getAvailableBassBins(data.sampleRate, data.bassFftSize)
  )

const getBassBands = (data: ChannelData, bassBandCount: number): Uint8Array =>
  getDistinctFrequencyBands(
    data.bassFrequencyData,
    data.sampleRate,
    data.bassFftSize,
    bassBandCount,
    bassSpectrum.minFrequency,
    bassSpectrum.maxFrequency,
    "linear"
  )

export const getChannelBands = (
  data: ChannelData,
  totalBandCount: number,
  maxFrequency: number
): number[] => {
  const bassBandCount = getBassBandCount(data)
  const bassBands = getBassBands(data, bassBandCount)
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

/**
 * Get the bass, mids and highs bands as separate groups.
 *
 * Bass is the 20–250 Hz range; the remaining bands are split evenly between
 * the mids (up to midsMaxFrequency) and the highs (up to maxFrequency).
 */
export const getChannelBandGroups = (
  data: ChannelData,
  totalBandCount: number,
  midsMaxFrequency: number,
  maxFrequency: number
): ChannelBandGroups => {
  const bassBandCount = getBassBandCount(data)
  const bass = getBassBands(data, bassBandCount)
  const upperBandCount = Math.max(0, totalBandCount - bassBandCount)
  const midsBandCount = Math.ceil(upperBandCount / 2)
  const highsBandCount = upperBandCount - midsBandCount

  const getUpperBands = (
    bandCount: number,
    minFrequency: number,
    upperFrequency: number
  ) =>
    getDistinctFrequencyBands(
      data.frequencyData,
      data.sampleRate,
      data.fftSize,
      bandCount,
      minFrequency,
      upperFrequency,
      "logarithmic"
    )

  return {
    bass: Array.from(bass),
    mids: Array.from(
      getUpperBands(midsBandCount, bassSpectrum.maxFrequency, midsMaxFrequency)
    ),
    highs: Array.from(
      getUpperBands(highsBandCount, midsMaxFrequency, maxFrequency)
    ),
  }
}
