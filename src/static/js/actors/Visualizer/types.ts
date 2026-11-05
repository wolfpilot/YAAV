import type { Channel } from "../../types"

export interface Point {
  x: number
  y: number
}

export interface VolumeBarCoords {
  xStart: number
  yStart: number
  xEnd: number
  yEnd: number
}

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
