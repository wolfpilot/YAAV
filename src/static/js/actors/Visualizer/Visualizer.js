// Utils
import { config } from "./config"
import { config as globalConfig } from "../../config"
import { getCenter } from "../../utils/uiHelpers"
import { getStereoBandAngle } from "../../utils/spectrumHelpers"
import { getDistinctFrequencyBands } from "../../utils/frequencyBands"
import { bassSpectrum, getAvailableBassBins } from "../../utils/bassSpectrum"

class Visualizer {
  constructor(canvasCtx) {
    this._canvasCtx = canvasCtx
  }

  static getVolumeBarCoords(centre, angle, length) {
    const xStart = centre.x + Math.cos(angle) * config.circle.radius
    const yStart = centre.y + Math.sin(angle) * config.circle.radius
    const xEnd = centre.x + Math.cos(angle) * (config.circle.radius + length)
    const yEnd = centre.y + Math.sin(angle) * (config.circle.radius + length)

    return { xStart, yStart, xEnd, yEnd }
  }

  _drawVolumeBar(channel, frequency, coords) {
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

  _drawChannel(channel) {
    if (!channel.data) {
      return
    }

    const _centre = getCenter()
    const _side = channel.name === globalConfig.channels.left ? -1 : 1

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
      config.volumeBar.bandCount - bassBandCount,
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
      const _angle = getStereoBandAngle(
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

  /**
   * @public
   */
  draw(data) {
    this._drawUI()

    if (!data || !data.channels) {
      return
    }

    data.channels.forEach((channel) => this._drawChannel(channel))
  }
}

export default Visualizer
