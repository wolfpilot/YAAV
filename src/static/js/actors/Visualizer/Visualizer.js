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

  _drawVolumeImpulse(centre, angle, length = 0) {
    // @TODO: Move to config
    const radius = 3;
    const startAngle = 0;
    const endAngle = Math.PI * 2;
    const _offset = 5;

    // @Note: Inside
    // const x = centre.x + (Math.cos(angle) * (config.circle.radius - (length / 5) - _offset));
    // const y = centre.y + (Math.sin(angle) * (config.circle.radius - (length / 5) - _offset));
    const x = centre.x + (Math.cos(angle) * (config.circle.radius + length + _offset));
    const y = centre.y + (Math.sin(angle) * (config.circle.radius + length + _offset));

    this._canvasCtx.fillStyle = 'rgba(0, 0, 255, 0.25)';

    this._canvasCtx.beginPath();
    this._canvasCtx.arc(x, y, radius, startAngle, endAngle);
    this._canvasCtx.fill();
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
    // if (!channel.data) { return; }
    if (!channel.data || !channel.data.bufferLength) { return; }

    // Cache centre coordinates
    const _centre = getCenter();

    // Calculate angle
    const _rads = Math.PI / channel.data.bufferLength;
    const _angleMultiplier = channel.name === globalConfig.channels.left ? -1 : 1;
    const _angleAlignmentOffset = channel.name === globalConfig.channels.left ? -_rads / 2 : _rads / 2;

    // Loop through all volume bars
    for (let i = 0; i < channel.data.bufferLength; i++) {
      const _frequency = channel.data.frequencyData[i];
      const _length = _frequency / 2;
      const _angle = (_angleMultiplier * _rads * i) + config.volumeBar.angleOffset + _angleAlignmentOffset;

      // Calculate coordinates
      const _coords = Visualizer.getVolumeBarCoords(_centre, _angle, _length);

      // Draw single bar
      if (channel.data) {
        this._drawVolumeBar(channel.name, _frequency, _coords);
      }

      this._drawVolumeImpulse(_centre, _angle, _length);
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
