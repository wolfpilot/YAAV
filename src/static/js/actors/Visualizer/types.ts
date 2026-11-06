import type { Channel } from "../../types"

export interface ChannelSpectrumData {
  frequencyData: Uint8Array
  fftSize: number
  bassFrequencyData: Uint8Array
  bassFftSize: number
  sampleRate: number
}

export interface ChannelSpectrum {
  name: Channel
  data: ChannelSpectrumData | undefined
}

export interface SpectrumFrame {
  channels: ChannelSpectrum[]
}

export interface ChannelsData {
  channels: ChannelSpectrum[]
  isSolo: boolean
}

export interface Renderer {
  draw({ channels, isSolo }: ChannelsData): void
}
