import { getCenter } from "../../../../utils/uiHelpers"
import { config as visualizerConfig } from "../../config"
import { getChannelBands } from "../getChannelBands"
import { config } from "./config"
import type { RendererDrawOptions, Channel, Renderer } from "../../types"

class ElectricRenderer implements Renderer {
  constructor(private readonly canvasCtx: CanvasRenderingContext2D) {}

  private _drawChannel({
    channel,
    isSolo,
    rotationAngle,
  }: {
    channel: Channel
    isSolo: boolean
    rotationAngle: number
  }) {
    if (!channel.data) return

    const centre = getCenter()
    const totalBandCount = isSolo
      ? config.bandCountBothChannels
      : config.bandCountSingleChannel
    const bands = getChannelBands(
      channel.data,
      totalBandCount,
      config.maxFrequency
    )

    if (bands.length === 0) return

    this.canvasCtx.lineWidth = config.lineWidth
    this.canvasCtx.strokeStyle = config.fill

    this.canvasCtx.beginPath()

    for (let i = 0; i < bands.length; i++) {
      const magnitude = bands[i]
      const length = magnitude / 2
      const angle =
        config.angleOffset +
        rotationAngle +
        ((i + 0.5) * Math.PI * 2) / bands.length
      const radius =
        visualizerConfig.circle.radius + length + config.centreOffset

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

  private _calculateRotation(elapsedMs: number) {
    const elapsedS = elapsedMs / 1000

    const rotationFactor = elapsedS % config.rotationPeriodSeconds
    const rotationDegree = rotationFactor * Math.PI * 2

    const rotationAngle = rotationDegree / config.rotationPeriodSeconds

    return rotationAngle
  }

  draw({ channels, isSolo, elapsedMs }: RendererDrawOptions) {
    const rotationAngle = this._calculateRotation(elapsedMs)

    channels.forEach((channel) =>
      this._drawChannel({ channel, isSolo, rotationAngle })
    )
  }
}

export default ElectricRenderer
