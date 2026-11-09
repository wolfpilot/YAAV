import { MinMaxRange } from "./types"

/**
 * Format seconds to hours and minutes
 * @NOTE: Will always return at least minutes and seconds
 * @returns The formatted time like "1:05" or "2:34:59" or "255:05:59"
 */
export const formatSeconds = (time: number): string => {
  const hours = Math.floor(time / 3600)
  const minutes = Math.floor((time % 3600) / 60)
  const seconds = Math.floor(time % 60)

  let formattedTime = ""

  if (hours > 0) {
    formattedTime += `${hours}:${minutes < 10 ? "0" : ""}`
  }

  formattedTime += `0${minutes}:${seconds < 10 ? "0" : ""}`
  formattedTime += `${seconds}`

  return formattedTime
}

export const isArrayZeroedOut = (arr: Uint8Array): boolean => {
  return arr.every((val) => val === 0)
}

export const interpolate = (
  { min, max }: MinMaxRange,
  progress: number
): number => min + (max - min) * progress
