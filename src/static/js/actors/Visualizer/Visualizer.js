// Utils
import { config } from "./config";
import { config as globalConfig } from "../../config";
import { getCenter } from "../../utils/uiHelpers";

class Visualizer {
  constructor(canvasCtx) {
    this._canvasCtx = canvasCtx;
  }

  static getVolumeBarCoords(centre, angle, length) {
    const xStart = centre.x + (Math.cos(angle) * config.circle.radius);
    const yStart = centre.y + (Math.sin(angle) * config.circle.radius);
    const xEnd = centre.x + (Math.cos(angle) * (config.circle.radius + length));
    const yEnd = centre.y + (Math.sin(angle) * (config.circle.radius + length));

    return { xStart, yStart, xEnd, yEnd };
  }

  _drawVolumeBar(channel, frequency, coords) {
    const _fill = channel === globalConfig.channels.left ?
      config.volumeBar.fillLeft(frequency) :
      config.volumeBar.fillRight(frequency);

    this._canvasCtx.lineWidth = config.volumeBar.lineWidth;
    this._canvasCtx.strokeStyle = _fill;

    this._canvasCtx.beginPath();
    this._canvasCtx.moveTo(coords.xStart, coords.yStart);
    this._canvasCtx.lineTo(coords.xEnd, coords.yEnd);
    this._canvasCtx.stroke();
  }

  _drawChannel(channel) {
    if (!channel.data) { return; }

    // Cache centre coordinates
    const _centre = getCenter();

    // Calculate angle
    const _rads = Math.PI / channel.data.bufferLength;
    const _angleMultiplier = channel.name === globalConfig.channels.left ? -1 : 1;

    // Loop through all volume bars
    for (let i = 0; i < channel.data.bufferLength; i++) {
      const _frequency = channel.data.frequencyData[i];
      const _length = _frequency / 2;
      const _angle = (_angleMultiplier * _rads * i) + config.volumeBar.angleOffset;

      // Calculate coordinates
      const _coords = Visualizer.getVolumeBarCoords(_centre, _angle, _length);

      // Draw single bar
      this._drawVolumeBar(channel.name, _frequency, _coords);
    }
  }

  _drawUI() {
    const _centre = getCenter();
    // @TODO: Add dynamic multiple coloured arc generator
    const _gradient = this._canvasCtx.createLinearGradient(0, window.innerHeight, 0, 0);
    _gradient.addColorStop(0, config.circle.stroke[0]);
    _gradient.addColorStop(1, config.circle.stroke[1]);

    this._canvasCtx.lineWidth = config.circle.lineWidth;
    this._canvasCtx.strokeStyle = _gradient;

    this._canvasCtx.beginPath();
    this._canvasCtx.arc(_centre.x, _centre.y, config.circle.radius, 0, Math.PI * 2);
    this._canvasCtx.stroke();
  }

  /**
   * @public
   */
  draw(data) {
    this._drawUI();

    if (!data || !data.channels) { return; }

    data.channels.forEach(channel => this._drawChannel(channel));
  }
}

export default Visualizer;
