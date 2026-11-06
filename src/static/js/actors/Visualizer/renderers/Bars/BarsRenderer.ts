import { config as globalConfig } from "../../../../config"
import { getStereoBandAngle } from "../../../../utils/spectrumHelpers"
import { getCenter } from "../../../../utils/uiHelpers"
import { config as visualizerConfig } from "../../config"
import { getChannelBands } from "../getChannelBands"
import { barsConfig } from "./config"
import type { Channel } from "../../../../types"
import type { ChannelsData, ChannelSpectrum, Renderer } from "../../types"
import type { Point, VolumeBarCoords } from "./types"

class BarsRenderer implements Renderer {
  constructor(private readonly canvasCtx: CanvasRenderingContext2D) {}

  private static getVolumeBarCoords(
    centre: Point,
    angle: number,
    length: number
  ): VolumeBarCoords {
    const xStart = centre.x + Math.cos(angle) * visualizerConfig.circle.radius
    const yStart = centre.y + Math.sin(angle) * visualizerConfig.circle.radius
    const xEnd =
      centre.x + Math.cos(angle) * (visualizerConfig.circle.radius + length)
    const yEnd =
      centre.y + Math.sin(angle) * (visualizerConfig.circle.radius + length)

    return { xStart, yStart, xEnd, yEnd }
  }

  private _drawVolumeBar(
    channel: Channel,
    frequency: number,
    coords: VolumeBarCoords
  ) {
    const fill =
      channel === globalConfig.channels.left
        ? barsConfig.fillLeft(frequency)
        : barsConfig.fillRight(frequency)

    this.canvasCtx.lineWidth = barsConfig.lineWidth
    this.canvasCtx.strokeStyle = fill

    this.canvasCtx.beginPath()
    this.canvasCtx.moveTo(coords.xStart, coords.yStart)
    this.canvasCtx.lineTo(coords.xEnd, coords.yEnd)
    this.canvasCtx.stroke()
  }

  private _drawChannel(channel: ChannelSpectrum, isSolo: boolean) {
    if (!channel.data) return

    const centre = getCenter()
    const side = channel.name === globalConfig.channels.left ? 1 : -1
    const totalBandCount = isSolo
      ? barsConfig.bandCountBothChannels
      : barsConfig.bandCountSingleChannel
    const bands = getChannelBands(
      channel.data,
      totalBandCount,
      barsConfig.maxFrequency
    )

    if (bands.length === 0) return

    for (let i = 0; i < bands.length; i++) {
      const magnitude = bands[i]

      if (magnitude === 0) continue

      const length = magnitude / 2
      const angle = isSolo
        ? barsConfig.angleOffset +
          (side * (i + 0.5) * Math.PI * 2) / bands.length
        : getStereoBandAngle(i, bands.length, side, barsConfig.angleOffset)
      const coords = BarsRenderer.getVolumeBarCoords(centre, angle, length)

      this._drawVolumeBar(channel.name, magnitude, coords)
    }
  }

  draw({ channels, isSolo }: ChannelsData) {
    channels.forEach((channel) => this._drawChannel(channel, isSolo))
  }
}

export default BarsRenderer
