export interface EaseOptions {
  from: number
  to: number
  duration: number
  callback?: (value: number) => void
  ease?: (progress: number) => number
}

export interface MinMaxRange {
  min: number
  max: number
}

export type FrequencyScale = "linear" | "logarithmic"
