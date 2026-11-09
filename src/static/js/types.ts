import type { config } from "./config"

export type ChannelName = (typeof config.channels)["left" | "right"]
export type ChannelSelection =
  (typeof config.channels)[keyof typeof config.channels]
export type VisualizationVariant =
  (typeof config.variant)[keyof typeof config.variant]

export interface VisualizationSettings {
  variant: VisualizationVariant
}

export interface RgbaColor {
  r: number
  g: number
  b: number
  a: number
}

export interface BarsSettings {
  channels: ChannelSelection
  ringBandCountSingleChannel: number
  ringBandCountBothChannels: number
  glowBlur: number
  colorChannelL: RgbaColor
  colorChannelR: RgbaColor
}

export interface ElectricSettings {
  bandCount: number
  ringsAmount: number
  rotationPeriodSeconds: number
  lineWidthMin: number
  lineWidthMax: number
}

export interface GUISettings {
  visualization: VisualizationSettings
  bars: BarsSettings
  electric: ElectricSettings
}
