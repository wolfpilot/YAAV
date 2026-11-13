import { config as globalConfig } from "../../../../config"
import { getStereoBandAngle } from "../../../../utils/spectrumHelpers"
import { getCenter } from "../../../../utils/uiHelpers"
import { movingAverage } from "../../../../utils/smoothing"
import { config as visualizerConfig } from "../../config"
import { getChannelBandGroups } from "./helpers"
import { getChannelBands } from "../getChannelBands"
import { rgbToHsl, type HslaColor } from "../../../../utils/color"
import { getMagnitudeColor } from "./color"
import { config } from "./config"
import type { BarsSettings } from "../../../../types"
import type {
  RendererDrawOptions,
  Channel,
  ChannelData,
  Renderer,
} from "../../types"
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

  private static getRingRadius(ringIndex: number): number {
    return (
      visualizerConfig.ring.radius +
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

  private static getColorGroup(magnitude: number): number {
    const progress = Math.max(0, Math.min(magnitude / 255, 1))

    return Math.min(
      config.colorGroups - 1,
      Math.floor(progress * config.colorGroups)
    )
  }

  /** Get the magnitude at the middle of a color group. */
  private static getGroupMagnitude(group: number): number {
    return ((group + 0.5) / config.colorGroups) * 255
  }

  private _getGroupFill(group: number, baseColor: HslaColor): string {
    return getMagnitudeColor({
      color: baseColor,
      magnitude: BarsRenderer.getGroupMagnitude(group),
      hueShiftDegrees: this.settings.hueShiftDegrees,
      saturationRange: this.settings.saturationRange,
      lightnessRange: this.settings.lightnessRange,
    })
  }

  /**
   * Draw all bands of a ring with one stroke per color group instead of one
   * per bar. Strokes (and their glow) are the expensive part of drawing.
   */
  private _drawBands({
    bands,
    radius,
    lineWidth,
    getLength,
    channelContext,
  }: {
    bands: number[]
    radius: number
    lineWidth: number
    getLength: (magnitude: number) => number
    channelContext: ChannelDrawContext
  }) {
    const { centre, side, isSolo, baseColor } = channelContext
    const paths: Path2D[] = []

    bands.forEach((magnitude, bandIndex) => {
      if (magnitude === 0) {
        return
      }

      const angle = BarsRenderer.getBandAngle({
        bandIndex,
        bandCount: bands.length,
        side,
        isSolo,
      })
      const { xStart, yStart, xEnd, yEnd } = BarsRenderer.getVolumeBarCoords({
        centre,
        angle,
        radius,
        length: getLength(magnitude),
      })
      const group = BarsRenderer.getColorGroup(magnitude)
      const path = (paths[group] ??= new Path2D())

      path.moveTo(xStart, yStart)
      path.lineTo(xEnd, yEnd)
    })

    this.canvasCtx.lineWidth = lineWidth

    paths.forEach((path, group) => {
      const fill = this._getGroupFill(group, baseColor)

      this.canvasCtx.strokeStyle = fill
      this.canvasCtx.shadowColor = fill
      this.canvasCtx.stroke(path)
    })
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
    this.canvasCtx.globalAlpha = ring.opacity

    this._drawBands({
      bands,
      radius: BarsRenderer.getRingRadius(ringIndex),
      lineWidth: this.settings.lineWidths[ring.band],
      getLength: (magnitude) => magnitude / 8,
      channelContext,
    })
  }

  private _drawBackgroundRing({
    data,
    channelContext,
  }: {
    data: ChannelData
    channelContext: ChannelDrawContext
  }) {
    const { opacity, lineWidth, lengthScale } = config.backgroundRing
    const bandCount = this._getBandsPerRing(channelContext.isSolo)
    const bands = movingAverage(
      getChannelBands(data, bandCount, config.maxFrequency),
      config.smoothingWindowSize
    )
    const radius = BarsRenderer.getRingRadius(0)
    const highsRadius = BarsRenderer.getRingRadius(config.rings.length - 1)
    const spanToHighs = highsRadius - radius

    // The ring is too faint for a glow to be visible, so skip the blur passes
    this.canvasCtx.save()
    this.canvasCtx.globalAlpha = opacity
    this.canvasCtx.shadowBlur = 0

    this._drawBands({
      bands,
      radius,
      lineWidth,
      getLength: (magnitude) => spanToHighs + magnitude * lengthScale,
      channelContext,
    })

    this.canvasCtx.restore()
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

    this._drawBackgroundRing({ data: channel.data, channelContext })

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
