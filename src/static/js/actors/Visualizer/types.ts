import type { ChannelName } from "../../types"

export interface ChannelData {
  frequencyData: Uint8Array
  fftSize: number
  bassFrequencyData: Uint8Array
  bassFftSize: number
  sampleRate: number
}

export interface Channel {
  name: ChannelName
  data?: ChannelData
}

export interface SpectrumFrame {
  channels: Channel[]
}

export interface VisualizerDrawOptions {
  spectrum?: SpectrumFrame
  elapsedMs: number
}

export interface RendererDrawOptions {
  channels: Channel[]
  elapsedMs: number
}

export interface Renderer {
  draw(options: RendererDrawOptions): void
}
