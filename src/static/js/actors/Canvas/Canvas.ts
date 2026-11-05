// Setup
const defaults = {
  fill: "rgb(0, 0, 0)",
}

class Canvas {
  private _canvasEl: HTMLCanvasElement
  private _canvasCtx: CanvasRenderingContext2D
  private _width: number
  private _height: number
  private _pixelRatio: number

  constructor(
    canvasEl: HTMLCanvasElement,
    canvasCtx: CanvasRenderingContext2D
  ) {
    this._canvasEl = canvasEl
    this._canvasCtx = canvasCtx
    this._width = 0
    this._height = 0
    this._pixelRatio = 0
  }

  state = {
    ...defaults,
  }

  /**
   * @public
   */
  draw() {
    this._canvasCtx.clearRect(0, 0, this._width, this._height)
    this._canvasCtx.fillStyle = defaults.fill
    this._canvasCtx.fillRect(0, 0, this._width, this._height)
  }

  resize() {
    const width = window.innerWidth
    const height = window.innerHeight
    const pixelRatio = window.devicePixelRatio || 1

    if (
      width === this._width &&
      height === this._height &&
      pixelRatio === this._pixelRatio
    ) {
      return
    }

    this._width = width
    this._height = height
    this._pixelRatio = pixelRatio
    this._canvasEl.width = Math.round(width * pixelRatio)
    this._canvasEl.height = Math.round(height * pixelRatio)
    this._canvasCtx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
  }

  /**
   * @public
   */
  init() {
    this.resize()
  }
}

export default Canvas
