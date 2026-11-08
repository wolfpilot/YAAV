import type { config } from "./config"

export type ChannelName = (typeof config.channels)["left" | "right"]
export type ChannelSelection =
  (typeof config.channels)[keyof typeof config.channels]
export type VisualizationVariant =
  (typeof config.variant)[keyof typeof config.variant]

export interface VisualizationSettings {
  variant: VisualizationVariant
}

export interface BarsSettings {
  channels: ChannelSelection
}

export interface ElectricSettings {
  ringsAmount: number
}

export interface GUISettings {
  visualization: VisualizationSettings
  bars: BarsSettings
  electric: ElectricSettings
}
