import { config as globalConfig } from "../../../../config"
import { getStereoBandAngle } from "../../../../utils/spectrumHelpers"
import { getCenter } from "../../../../utils/uiHelpers"
import { movingAverage } from "../../../../utils/smoothing"
import { config as visualizerConfig } from "../../config"
import { getChannelBandGroups } from "../getChannelBands"
import { getMagnitudeColor, rgbToHsl } from "./color"
import { config } from "./config"
import type { BarsSettings } from "../../../../types"
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
    radius,
    length,
  }: {
    centre: Point
    angle: number
    radius: number
    length: number
  }): VolumeBarCoords {
    const xStart = centre.x + Math.cos(angle) * radius
    const yStart = centre.y + Math.sin(angle) * radius
    const xEnd = centre.x + Math.cos(angle) * (radius + length)
    const yEnd = centre.y + Math.sin(angle) * (radius + length)

    return { xStart, yStart, xEnd, yEnd }
  }

  private _drawVolumeBar({
    fill,
    coords,
    lineWidth,
  }: {
    fill: string
    coords: VolumeBarCoords
    lineWidth: number
  }) {
    this.canvasCtx.lineWidth = lineWidth
    this.canvasCtx.strokeStyle = fill
    this.canvasCtx.shadowColor = fill

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
    const baseColor = rgbToHsl(
      side === 1 ? this.settings.colorChannelL : this.settings.colorChannelR
    )
    const hueShiftDegrees = side === 1 ? 60 : -60
    const bandsPerRing = isSolo
      ? this.settings.ringBandCountSingleChannel
      : this.settings.ringBandCountBothChannels
    const bandGroups = getChannelBandGroups({
      data: channel.data,
      bandsPerRing,
      midsMaxFrequency: config.midsMaxFrequency,
      maxFrequency: config.maxFrequency,
    })

    config.rings.forEach(({ band, lineWidth, opacity }, ringIndex) => {
      const bands = movingAverage(bandGroups[band], config.smoothingWindowSize)
      const radius =
        visualizerConfig.circle.radius +
        config.centreOffset +
        ringIndex * config.ringGap

      this.canvasCtx.globalAlpha = opacity

      for (let i = 0; i < bands.length; i++) {
        const magnitude = bands[i]

        if (magnitude === 0) {
          continue
        }

        const length = magnitude / 10
        const angle = isSolo
          ? config.angleOffset + (side * (i + 0.5) * Math.PI * 2) / bands.length
          : getStereoBandAngle(i, bands.length, side, config.angleOffset)
        const coords = BarsRenderer.getVolumeBarCoords({
          centre,
          angle,
          radius,
          length,
        })

        this._drawVolumeBar({
          fill: getMagnitudeColor({
            color: baseColor,
            magnitude,
            hueShiftDegrees,
          }),
          coords,
          lineWidth,
        })
      }
    })
  }

  draw({ channels }: RendererDrawOptions) {
    this.canvasCtx.save()
    this.canvasCtx.lineCap = "round"
    this.canvasCtx.shadowBlur = this.settings.glowBlur

    const selectedChannels = this.settings.channels
    const isSolo = selectedChannels !== globalConfig.channels.both
    const visibleChannels = isSolo
      ? channels.filter((channel) => channel.name === selectedChannels)
      : channels

    visibleChannels.forEach((channel) => this._drawChannel({ channel, isSolo }))

    this.canvasCtx.restore()
  }
}

export default BarsRenderer
