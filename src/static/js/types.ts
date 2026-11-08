import type { config } from "./config"

export type ChannelName = (typeof config.channels)["left" | "right"]
export type ChannelSelection =
  (typeof config.channels)[keyof typeof config.channels]
export type VisualizationVariant =
  (typeof config.variant)[keyof typeof config.variant]

export interface BarsSettings {
  channels: ChannelSelection
}

export interface ElectricSettings {
  ringsAmount: number
}

export interface VisualizationSettings {
  bars: BarsSettings
  electric: ElectricSettings
  variant: VisualizationVariant
}
