import { getCenter } from "../../../../utils/uiHelpers"
import { config as visualizerConfig } from "../../config"
import { getChannelBands } from "../getChannelBands"
import { config } from "./config"
import type { ElectricSettings } from "../../../../types"
import type { RendererDrawOptions, Renderer } from "../../types"
import { easeInOutCubic } from "../../../../utils/easings"

class ElectricRenderer implements Renderer {
  constructor(
    private readonly canvasCtx: CanvasRenderingContext2D,
    private readonly settings: ElectricSettings
  ) {}

  private _drawBands({
    bands,
    rotationAngle,
  }: {
    bands: number[]
    rotationAngle: number
  }) {
    const centre = getCenter()

    const ringsAmount = this.settings.ringsAmount

    for (let i = 0; i < ringsAmount; i++) {
      const progress = ringsAmount === 1 ? 0 : i / (ringsAmount - 1)

      const sqProgres = Math.pow(progress, 2)
      const inverseSqProgress = Math.pow(1 - progress, 2)

      this.canvasCtx.lineWidth = config.lineWidthDynamic(
        this.settings.lineWidthMin,
        this.settings.lineWidthMax,
        sqProgres
      )
      this.canvasCtx.strokeStyle = config.fillDynamic(inverseSqProgress)

      this.canvasCtx.beginPath()

      for (let j = 0; j < bands.length; j++) {
        const magnitude = easeInOutCubic(2.5 + i) * bands[j] * 0.0025
        const length = magnitude / 2
        const angle =
          config.angleOffset +
          rotationAngle +
          ((j + 0.5) * Math.PI * 2) / bands.length
        const radius =
          visualizerConfig.circle.radius +
          length +
          config.centreOffset +
          i * config.ringSpacing

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
