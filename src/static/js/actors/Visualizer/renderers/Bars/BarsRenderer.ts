import { config as globalConfig } from "../../../../config"
import { getStereoBandAngle } from "../../../../utils/spectrumHelpers"
import { getCenter } from "../../../../utils/uiHelpers"
import { config as visualizerConfig } from "../../config"
import { getChannelBands } from "../getChannelBands"
import { config } from "./config"
import type { BarsSettings, ChannelName } from "../../../../types"
import type { RendererDrawOptions, Channel, Renderer } from "../../types"
import type { Point, VolumeBarCoords } from "./types"

class BarsRenderer implements Renderer {
  constructor(
    private readonly canvasCtx: CanvasRenderingContext2D,
    private readonly settings: BarsSettings
  ) {}

  private static getVolumeBarCoords({
    centre,
    angle,
    length,
  }: {
    centre: Point
    angle: number
    length: number
  }): VolumeBarCoords {
    const xStart = centre.x + Math.cos(angle) * visualizerConfig.circle.radius
    const yStart = centre.y + Math.sin(angle) * visualizerConfig.circle.radius
    const xEnd =
      centre.x + Math.cos(angle) * (visualizerConfig.circle.radius + length)
    const yEnd =
      centre.y + Math.sin(angle) * (visualizerConfig.circle.radius + length)

    return { xStart, yStart, xEnd, yEnd }
  }

  private _drawVolumeBar({
    channelName,
    frequency,
    coords,
  }: {
    channelName: ChannelName
    frequency: number
    coords: VolumeBarCoords
  }) {
    const fill =
      channelName === globalConfig.channels.left
        ? config.fillLeft(frequency)
        : config.fillRight(frequency)

    this.canvasCtx.lineWidth = config.lineWidth
    this.canvasCtx.strokeStyle = fill

    this.canvasCtx.beginPath()
    this.canvasCtx.moveTo(coords.xStart, coords.yStart)
    this.canvasCtx.lineTo(coords.xEnd, coords.yEnd)
    this.canvasCtx.stroke()
  }

  private _drawChannel({
    channel,
    isSolo,
  }: {
    channel: Channel
    isSolo: boolean
  }) {
    if (!channel.data) {
      return
    }

    const centre = getCenter()
    const side = channel.name === globalConfig.channels.left ? 1 : -1
    const totalBandCount = isSolo
      ? config.bandCountBothChannels
      : config.bandCountSingleChannel
    const bands = getChannelBands(
      channel.data,
      totalBandCount,
      config.maxFrequency
    )

    for (let i = 0; i < bands.length; i++) {
      const magnitude = bands[i]

      if (magnitude === 0) {
        continue
      }

      const length = magnitude / 2
      const angle = isSolo
        ? config.angleOffset + (side * (i + 0.5) * Math.PI * 2) / bands.length
        : getStereoBandAngle(i, bands.length, side, config.angleOffset)
      const coords = BarsRenderer.getVolumeBarCoords({ centre, angle, length })

      this._drawVolumeBar({
        channelName: channel.name,
        frequency: magnitude,
        coords,
      })
    }
  }

  draw({ channels }: RendererDrawOptions) {
    const selectedChannels = this.settings.channels
    const isSolo = selectedChannels !== globalConfig.channels.both
    const visibleChannels = isSolo
      ? channels.filter((channel) => channel.name === selectedChannels)
      : channels

    visibleChannels.forEach((channel) => this._drawChannel({ channel, isSolo }))
  }
}

export default BarsRenderer
