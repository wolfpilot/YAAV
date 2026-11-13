import { getCenter } from "../../../../utils/uiHelpers"
import { config as visualizerConfig } from "../../config"
import { getChannelBands } from "../getChannelBands"
import { config } from "./config"
import type { ElectricSettings } from "../../../../types"
import type { RendererDrawOptions, Renderer } from "../../types"
import { easeInOutCubic } from "../../../../utils/easings"
import { rgbToHsl, type HslaColor } from "../../../../utils/color"
import { getBandColor, getBandOpacity } from "./color"

class ElectricRenderer implements Renderer {
  constructor(
    private readonly canvasCtx: CanvasRenderingContext2D,
    private readonly settings: ElectricSettings
  ) {}

  private _getBandColor(baseColor: HslaColor, magnitude: number): HslaColor {
    return getBandColor({
      color: baseColor,
      magnitude,
      hueShiftDegrees: this.settings.hueShiftDegrees,
    })
  }

  private _getBandFill(
    baseColor: HslaColor,
    magnitude: number,
    ringOpacity: number
  ): string {
    const bandOpacity = getBandOpacity({
      magnitude,
      ...config.bandOpacity,
    })

    return config.fillDynamic(
      this._getBandColor(baseColor, magnitude),
      ringOpacity * bandOpacity
    )
  }

  /**
   * Get a gradient running around the ring, with a color for each band. The
   * colors only depend on the bands, so every ring has the same colors.
   */
  private _createRingGradient({
    bands,
    baseColor,
    centre,
    rotationAngle,
    opacity,
  }: {
    bands: number[]
    baseColor: HslaColor
    centre: ReturnType<typeof getCenter>
    rotationAngle: number
    opacity: number
  }) {
    const gradient = this.canvasCtx.createConicGradient(
      config.angleOffset + rotationAngle,
      centre.x,
      centre.y
    )

    bands.forEach((magnitude, index) => {
      gradient.addColorStop(
        (index + 0.5) / bands.length,
        this._getBandFill(baseColor, magnitude, opacity)
      )
    })

    // The start of the ring sits between the last and the first band
    const seamMagnitude = (bands[0] + bands[bands.length - 1]) / 2
    const seamColor = this._getBandFill(baseColor, seamMagnitude, opacity)

    gradient.addColorStop(0, seamColor)
    gradient.addColorStop(1, seamColor)

    return gradient
  }

  private _drawBands({
    bands,
    rotationAngle,
  }: {
    bands: number[]
    rotationAngle: number
  }) {
    const centre = getCenter()

    const ringsAmount = this.settings.ringsAmount
    const baseColor = rgbToHsl(this.settings.color)

    for (let i = 0; i < ringsAmount; i++) {
      const progress = ringsAmount === 1 ? 0 : i / (ringsAmount - 1)

      const sqProgres = Math.pow(progress, 2)
      const inverseSqProgress = Math.pow(1 - progress, 2)

      this.canvasCtx.lineWidth = config.lineWidthDynamic(
        this.settings.lineWidthMin,
        this.settings.lineWidthMax,
        sqProgres
      )
      this.canvasCtx.strokeStyle = this._createRingGradient({
        bands,
        baseColor,
        centre,
        rotationAngle,
        opacity: inverseSqProgress,
      })

      this.canvasCtx.beginPath()

      for (let j = 0; j < bands.length; j++) {
        const magnitude = easeInOutCubic(2.5 + i) * bands[j] * 0.0025
        const length = magnitude / 2
        const angle =
          config.angleOffset +
          rotationAngle +
          ((j + 0.5) * Math.PI * 2) / bands.length
        const radius =
          visualizerConfig.ring.radius +
          length +
          config.centreOffset +
          i * this.settings.ringSpacing

        const x = centre.x + Math.cos(angle) * radius
        const y = centre.y + Math.sin(angle) * radius

        j === 0
          ? // Move to first vector
            this.canvasCtx.moveTo(x, y)
          : // Otherwise connect
            this.canvasCtx.lineTo(x, y)
      }

      this.canvasCtx.closePath()
      this.canvasCtx.stroke()
    }
  }

  private _calculateRotation(elapsedMs: number) {
    const elapsedS = elapsedMs / 1000

    const rotationFactor = elapsedS % this.settings.rotationPeriodSeconds
    const rotationDegree = rotationFactor * Math.PI * 2

    const rotationAngle = rotationDegree / this.settings.rotationPeriodSeconds

    return rotationAngle
  }

  draw({ channels, elapsedMs }: RendererDrawOptions) {
    const channelBands = channels
      .flatMap(({ data }) =>
        data
          ? [
              getChannelBands(
                data,
                this.settings.bandCount,
                config.maxFrequency
              ),
            ]
          : []
      )
      .filter((bands) => bands.length > 0)

    if (channelBands.length === 0) return

    const bands = channelBands[0].map(
      (_, index) =>
        channelBands.reduce((sum, channel) => sum + channel[index], 0) /
        channelBands.length
    )
    const rotationAngle = this._calculateRotation(elapsedMs)

    this._drawBands({ bands, rotationAngle })
  }
}

export default ElectricRenderer
