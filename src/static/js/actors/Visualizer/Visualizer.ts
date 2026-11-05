// Utils
import { config } from "./config"
import { config as globalConfig } from "../../config"
import { getCenter } from "../../utils/uiHelpers"
import { getStereoBandAngle } from "../../utils/spectrumHelpers"
import { getDistinctFrequencyBands } from "../../utils/frequencyBands"
import { bassSpectrum, getAvailableBassBins } from "../../utils/bassSpectrum"
import type { Channel, VisualizationSettings } from "../../types"
import type {
  ChannelSpectrum,
  Point,
  SpectrumFrame,
  VolumeBarCoords,
} from "./types"

class Visualizer {
  private _canvasCtx: CanvasRenderingContext2D
  private _settings: VisualizationSettings

  constructor(
    canvasCtx: CanvasRenderingContext2D,
    settings: VisualizationSettings
  ) {
    this._canvasCtx = canvasCtx
    this._settings = settings
  }

  static getVolumeBarCoords(
    centre: Point,
    angle: number,
    length: number
  ): VolumeBarCoords {
    const xStart = centre.x + Math.cos(angle) * config.circle.radius
    const yStart = centre.y + Math.sin(angle) * config.circle.radius
    const xEnd = centre.x + Math.cos(angle) * (config.circle.radius + length)
    const yEnd = centre.y + Math.sin(angle) * (config.circle.radius + length)

    return { xStart, yStart, xEnd, yEnd }
  }

  _drawVolumeBar(channel: Channel, frequency: number, coords: VolumeBarCoords) {
    const _fill =
      channel === globalConfig.channels.left
        ? config.volumeBar.fillLeft(frequency)
        : config.volumeBar.fillRight(frequency)

    this._canvasCtx.lineWidth = config.volumeBar.lineWidth
    this._canvasCtx.strokeStyle = _fill

    this._canvasCtx.beginPath()
    this._canvasCtx.moveTo(coords.xStart, coords.yStart)
    this._canvasCtx.lineTo(coords.xEnd, coords.yEnd)
    this._canvasCtx.stroke()
  }

  _drawElectricChannel(channel: ChannelSpectrum, isBothChannels: boolean) {
    const _centre = getCenter()

    if (!channel.data) return

    const totalBandCount = isBothChannels
      ? config.electric.bandCountBothChannels
      : config.electric.bandCountSingleChannel
    const bassBandCount = Math.min(
      bassSpectrum.bandCount,
      getAvailableBassBins(channel.data.sampleRate, channel.data.bassFftSize)
    )
    const bassBands = getDistinctFrequencyBands(
      channel.data.bassFrequencyData,
      channel.data.sampleRate,
      channel.data.bassFftSize,
      bassBandCount,
      bassSpectrum.minFrequency,
      bassSpectrum.maxFrequency,
      "linear"
    )
    const upperBands = getDistinctFrequencyBands(
      channel.data.frequencyData,
      channel.data.sampleRate,
      channel.data.fftSize,
      totalBandCount - bassBandCount,
      bassSpectrum.maxFrequency,
      config.electric.maxFrequency,
      "logarithmic"
    )

    const _bands = [...bassBands, ...upperBands]

    if (_bands.length === 0) return

    this._canvasCtx.lineWidth = config.electric.lineWidth
    this._canvasCtx.strokeStyle = config.electric.fill
    this._canvasCtx.beginPath()
    for (let i = 0; i < _bands.length; i++) {
      const _magnitude = _bands[i]
      const _length = _magnitude / 2

      const _angle =
        config.electric.angleOffset + ((i + 0.5) * Math.PI * 2) / _bands.length

      const radius =
        config.circle.radius + _length + config.electric.centreOffset
      const x = _centre.x + Math.cos(_angle) * radius
      const y = _centre.y + Math.sin(_angle) * radius

      if (i === 0) {
        this._canvasCtx.moveTo(x, y)
      } else {
        this._canvasCtx.lineTo(x, y)
      }
    }
    this._canvasCtx.closePath()
    this._canvasCtx.stroke()
  }

  _drawBarsChannel(channel: ChannelSpectrum, isBothChannels: boolean) {
    if (!channel.data) {
      return
    }

    const _centre = getCenter()
    const _side = channel.name === globalConfig.channels.left ? 1 : -1

    const totalBandCount = isBothChannels
      ? config.volumeBar.bandCountBothChannels
      : config.volumeBar.bandCountSingleChannel

    const bassBandCount = Math.min(
      bassSpectrum.bandCount,
      getAvailableBassBins(channel.data.sampleRate, channel.data.bassFftSize)
    )
    const bassBands = getDistinctFrequencyBands(
      channel.data.bassFrequencyData,
      channel.data.sampleRate,
      channel.data.bassFftSize,
      bassBandCount,
      bassSpectrum.minFrequency,
      bassSpectrum.maxFrequency,
      "linear"
    )
    const upperBands = getDistinctFrequencyBands(
      channel.data.frequencyData,
      channel.data.sampleRate,
      channel.data.fftSize,
      totalBandCount - bassBandCount,
      bassSpectrum.maxFrequency,
      config.volumeBar.maxFrequency,
      "logarithmic"
    )

    const _bands = [...bassBands, ...upperBands]

    for (let i = 0; i < _bands.length; i++) {
      const _magnitude = _bands[i]

      if (_magnitude === 0) {
        continue
      }

      const _length = _magnitude / 2
      const _angle = isBothChannels
        ? config.volumeBar.angleOffset +
          (_side * (i + 0.5) * Math.PI * 2) / _bands.length
        : getStereoBandAngle(
            i,
            _bands.length,
            _side,
            config.volumeBar.angleOffset
          )
      const _coords = Visualizer.getVolumeBarCoords(_centre, _angle, _length)

      this._drawVolumeBar(channel.name, _magnitude, _coords)
    }
  }

  _drawUI() {
    const _centre = getCenter()
    // @TODO: Add dynamic multiple coloured arc generator
    const _gradient = this._canvasCtx.createLinearGradient(
      0,
      window.innerHeight,
      0,
      0
    )
    _gradient.addColorStop(0, config.circle.stroke[0])
    _gradient.addColorStop(1, config.circle.stroke[1])

    this._canvasCtx.lineWidth = config.circle.lineWidth
    this._canvasCtx.strokeStyle = _gradient

    this._canvasCtx.beginPath()
    this._canvasCtx.arc(
      _centre.x,
      _centre.y,
      config.circle.radius,
      0,
      Math.PI * 2
    )
    this._canvasCtx.stroke()
  }

  _drawElectric(data: SpectrumFrame) {
    const selectedChannels = this._settings.channels

    const isBothChannels = selectedChannels !== globalConfig.channels.both
    const channels = isBothChannels
      ? data.channels.filter((channel) => channel.name === selectedChannels)
      : data.channels

    channels.forEach((channel) =>
      this._drawElectricChannel(channel, isBothChannels)
    )
  }

  _drawBars(data: SpectrumFrame) {
    const selectedChannels = this._settings.channels

    const isBothChannels = selectedChannels !== globalConfig.channels.both
    const channels = isBothChannels
      ? data.channels.filter((channel) => channel.name === selectedChannels)
      : data.channels

    channels.forEach((channel) =>
      this._drawBarsChannel(channel, isBothChannels)
    )
  }

  /**
   * @public
   */
  draw(data?: SpectrumFrame) {
    this._drawUI()

    if (!data || !data.channels) {
      return
    }

    const variant = this._settings.variant

    switch (variant) {
      case "bars":
        this._drawBars(data)
        break
      case "electric":
        this._drawElectric(data)
        break
      default:
        console.log("NOPE")
    }
  }
}

export default Visualizer
