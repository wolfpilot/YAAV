import { getCenter } from "../../../../utils/uiHelpers"
import { config as visualizerConfig } from "../../config"
import { getChannelBands } from "../getChannelBands"
import { electricConfig } from "./config"
import type { ChannelsData, ChannelSpectrum, Renderer } from "../../types"

class ElectricRenderer implements Renderer {
  constructor(private readonly canvasCtx: CanvasRenderingContext2D) {}

  private _drawChannel(channel: ChannelSpectrum, isSolo: boolean) {
    if (!channel.data) return

    const centre = getCenter()
    const totalBandCount = isSolo
      ? electricConfig.bandCountBothChannels
      : electricConfig.bandCountSingleChannel
    const bands = getChannelBands(
      channel.data,
      totalBandCount,
      electricConfig.maxFrequency
    )

    if (bands.length === 0) return

    this.canvasCtx.lineWidth = electricConfig.lineWidth
    this.canvasCtx.strokeStyle = electricConfig.fill

    this.canvasCtx.beginPath()

    for (let i = 0; i < bands.length; i++) {
      const magnitude = bands[i]
      const length = magnitude / 2
      const angle =
        electricConfig.angleOffset + ((i + 0.5) * Math.PI * 2) / bands.length
      const radius =
        visualizerConfig.circle.radius + length + electricConfig.centreOffset

      const x = centre.x + Math.cos(angle) * radius
      const y = centre.y + Math.sin(angle) * radius

      i === 0
        ? // Move to first vector
          this.canvasCtx.moveTo(x, y)
        : // Otherwise connect
          this.canvasCtx.lineTo(x, y)
    }

    this.canvasCtx.closePath()
    this.canvasCtx.stroke()
  }

  draw({ channels, isSolo }: ChannelsData) {
    channels.forEach((channel) => this._drawChannel(channel, isSolo))
  }
}

export default ElectricRenderer
