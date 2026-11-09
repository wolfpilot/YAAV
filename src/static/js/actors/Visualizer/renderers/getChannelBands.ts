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
 * Get the bass, mids and highs bands as separate groups of equal length.
 *
 * Every group has the same band count so that their angles align across rings.
 * The count shrinks to what the scarcest group can resolve, which is usually
 * the bass range of the bass analyser.
 */
export const getChannelBandGroups = ({
  data,
  bandsPerRing,
  midsMaxFrequency,
  maxFrequency,
}: {
  data: ChannelData
  bandsPerRing: number
  midsMaxFrequency: number
  maxFrequency: number
}): ChannelBandGroups => {
  const getUpperBands = (
    bandCount: number,
    minFrequency: number,
    upperFrequency: number
  ) =>
    Array.from(
      getDistinctFrequencyBands(
        data.frequencyData,
        data.sampleRate,
        data.fftSize,
        bandCount,
        minFrequency,
        upperFrequency,
        "logarithmic"
      )
    )

  const getGroups = (bandCount: number): ChannelBandGroups => ({
    bass: Array.from(getBassBands(data, bandCount)),
    mids: getUpperBands(bandCount, bassSpectrum.maxFrequency, midsMaxFrequency),
    highs: getUpperBands(bandCount, midsMaxFrequency, maxFrequency),
  })

  const groups = getGroups(bandsPerRing)
  const alignedCount = Math.min(
    groups.bass.length,
    groups.mids.length,
    groups.highs.length
  )

  return alignedCount === bandsPerRing ? groups : getGroups(alignedCount)
}
