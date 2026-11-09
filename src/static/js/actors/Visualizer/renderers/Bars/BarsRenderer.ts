import { config as globalConfig } from "../../../../config"
import { getStereoBandAngle } from "../../../../utils/spectrumHelpers"
import { getCenter } from "../../../../utils/uiHelpers"
import { movingAverage } from "../../../../utils/smoothing"
import { config as visualizerConfig } from "../../config"
import { getChannelBandGroups } from "./helpers"
import { rgbToHsl } from "../../../../utils/color"
import { getMagnitudeColor } from "./color"
import { config } from "./config"
import type { BarsSettings } from "../../../../types"
import type { RendererDrawOptions, Channel, Renderer } from "../../types"
import type {
  ChannelDrawContext,
  Point,
  RingConfig,
  VolumeBarCoords,
} from "./types"

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

  private static getRingRadius(ringIndex: number): number {
    return (
      visualizerConfig.circle.radius +
      config.centreOffset +
      ringIndex * config.ringGap
    )
  }

  private static getBandAngle({
    bandIndex,
    bandCount,
    side,
    isSolo,
  }: {
    bandIndex: number
    bandCount: number
    side: number
    isSolo: boolean
  }): number {
    if (isSolo) {
      return (
        config.angleOffset +
        (side * (bandIndex + 0.5) * Math.PI * 2) / bandCount
      )
    }

    return getStereoBandAngle(bandIndex, bandCount, side, config.angleOffset)
  }

  private _getBandsPerRing(isSolo: boolean): number {
    return isSolo
      ? this.settings.ringBandCountSingleChannel
      : this.settings.ringBandCountBothChannels
  }

  private _drawBand({
    magnitude,
    bandIndex,
    bandCount,
    radius,
    lineWidth,
    channelContext,
  }: {
    magnitude: number
    bandIndex: number
    bandCount: number
    radius: number
    lineWidth: number
    channelContext: ChannelDrawContext
  }) {
    const { centre, side, isSolo, baseColor } = channelContext

    const angle = BarsRenderer.getBandAngle({
      bandIndex,
      bandCount,
      side,
      isSolo,
    })
    const coords = BarsRenderer.getVolumeBarCoords({
      centre,
      angle,
      radius,
      length: magnitude / 10,
    })
    const fill = getMagnitudeColor({
      color: baseColor,
      magnitude,
      hueShiftDegrees: this.settings.hueShiftDegrees,
      saturationRange: this.settings.saturationRange,
      lightnessRange: this.settings.lightnessRange,
    })

    this._drawVolumeBar({ fill, coords, lineWidth })
  }

  private _drawRing({
    ring,
    ringIndex,
    bands,
    channelContext,
  }: {
    ring: RingConfig
    ringIndex: number
    bands: number[]
    channelContext: ChannelDrawContext
  }) {
    const radius = BarsRenderer.getRingRadius(ringIndex)

    this.canvasCtx.globalAlpha = ring.opacity

    bands.forEach((magnitude, bandIndex) => {
      if (magnitude === 0) {
        return
      }

      this._drawBand({
        magnitude,
        bandIndex,
        bandCount: bands.length,
        radius,
        lineWidth: this.settings.lineWidths[ring.band],
        channelContext,
      })
    })
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

    const side = channel.name === globalConfig.channels.left ? 1 : -1
    const channelContext: ChannelDrawContext = {
      centre: getCenter(),
      side,
      isSolo,
      baseColor: rgbToHsl(
        side === 1 ? this.settings.colorChannelL : this.settings.colorChannelR
      ),
    }
    const bandGroups = getChannelBandGroups({
      data: channel.data,
      bandsPerRing: this._getBandsPerRing(isSolo),
      midsMaxFrequency: config.midsMaxFrequency,
      maxFrequency: config.maxFrequency,
    })

    config.rings.forEach((ring, ringIndex) => {
      this._drawRing({
        ring,
        ringIndex,
        bands: movingAverage(bandGroups[ring.band], config.smoothingWindowSize),
        channelContext,
      })
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
