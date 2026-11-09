// Utils
import { config } from "./config"
import { config as globalConfig } from "../../config"
import { formatSeconds, isArrayZeroedOut } from "../../utils/mathHelpers"
import { getKeyCode } from "../../utils/inputHelpers"
import { lockUserSelection, unlockUserSelection } from "../../utils/uiHelpers"
import { fadeIn, fadeOut } from "../../utils/audioHelpers"
import { bassSpectrum, getBassFftSize } from "../../utils/bassSpectrum"
import type { GUISettings } from "../../types"
import type { PlayerElements, Track } from "./types"
import type { ChannelData, SpectrumFrame } from "../Visualizer/types"

// Modules
import Visualizer from "../Visualizer/Visualizer"

const initialState = {
  hasUserInteracted: false,
  isPlaying: false,
  isVolumeFading: false,
  isBinDataEmpty: true,
}

class Player {
  private _visualizer: Visualizer
  private readonly _settings: GUISettings
  private _audio!: HTMLAudioElement
  private _audioCtx?: AudioContext
  private _analyserL!: AnalyserNode
  private _analyserR!: AnalyserNode
  private _bassAnalyserL!: AnalyserNode
  private _bassAnalyserR!: AnalyserNode
  private _elements!: PlayerElements
  private _elapsedMs: number
  private _lastPlayingSampleTime?: number

  constructor(
    canvasCtx: CanvasRenderingContext2D,
    settings: GUISettings
  ) {
    this._settings = settings
    this._visualizer = new Visualizer(canvasCtx, settings)

    this._elapsedMs = 0

    this._onPointerMove = this._onPointerMove.bind(this)
    this._onPointerUp = this._onPointerUp.bind(this)
  }

  state = {
    ...initialState,
  }

  static getChannelData(
    analyser: AnalyserNode,
    bassAnalyser: AnalyserNode
  ): ChannelData | undefined {
    const bufferLength = analyser.frequencyBinCount
    const frequencyData = new Uint8Array(bufferLength)
    const bassFrequencyData = new Uint8Array(bassAnalyser.frequencyBinCount)

    // Order is important; first read the data, then process it.
    // .getByteFrequencyData() doesn't return anything, it simply updates the original object.
    analyser.getByteFrequencyData(frequencyData)
    bassAnalyser.getByteFrequencyData(bassFrequencyData)

    // A completely zeroed-out bin data array means total silence
    const dataIsEmpty =
      isArrayZeroedOut(frequencyData) && isArrayZeroedOut(bassFrequencyData)

    if (dataIsEmpty) {
      return
    }

    return {
      frequencyData,
      fftSize: analyser.fftSize,
      bassFrequencyData,
      bassFftSize: bassAnalyser.fftSize,
      sampleRate: analyser.context.sampleRate,
    }
  }

  /**
   * Resize the bass analysers to resolve as many bands as the active variant needs.
   */
  private _syncBassFftSize() {
    if (!this._audioCtx) {
      return
    }

    const { visualization, bars } = this._settings
    const isBars = visualization.variant === globalConfig.variant.bars
    const bandCount = !isBars
      ? bassSpectrum.bandCount
      : bars.channels === globalConfig.channels.both
        ? bars.ringBandCountBothChannels
        : bars.ringBandCountSingleChannel
    const fftSize = getBassFftSize(
      this._audioCtx.sampleRate,
      Math.max(bandCount, bassSpectrum.bandCount)
    )

    if (this._bassAnalyserL.fftSize === fftSize) {
      return
    }

    this._bassAnalyserL.fftSize = fftSize
    this._bassAnalyserR.fftSize = fftSize
  }

  _getAudioData(): SpectrumFrame | undefined {
    // Unfortunately, after pausing there is a small delay until the bin data array empties out
    // which means that calling .pause() doesn't necessarily reflect the real state of the audio.
    // This is mostly a performance optimisation so that we don't draw empty sample frames.
    if (!this.state.isPlaying && this.state.isBinDataEmpty) {
      return
    }

    this._syncBassFftSize()

    const channelLeftData = Player.getChannelData(
      this._analyserL,
      this._bassAnalyserL
    )
    const channelRightData = Player.getChannelData(
      this._analyserR,
      this._bassAnalyserR
    )

    // Because we're processing each channel separately, some tracks may (at times)
    // only return data for one channel. Therefore, the channels are to be drawn separately.
    if (!channelLeftData && !channelRightData) {
      this.state.isBinDataEmpty = true

      return
    }

    this.state.isBinDataEmpty = false

    return {
      channels: [
        {
          name: globalConfig.channels.left,
          data: channelLeftData,
        },
        {
          name: globalConfig.channels.right,
          data: channelRightData,
        },
      ],
    }
  }

  private _updateElapsedPlayingTime() {
    const now = performance.now()

    const isPlaying =
      !this._audio.seeking && !this._audio.paused && !this._audio.ended

    if (isPlaying && this._lastPlayingSampleTime !== undefined) {
      const newElapsedTime = now - this._lastPlayingSampleTime

      this._elapsedMs += newElapsedTime
    }

    this._lastPlayingSampleTime = isPlaying ? now : undefined
  }

  draw() {
    this._updateElapsedPlayingTime()

    const spectrum = this._getAudioData()

    this._visualizer.draw({
      spectrum,
      elapsedMs: this._elapsedMs,
    })
  }

  _resetVolume() {
    this._audio.volume = 1
    this._audio.muted = false
  }

  _muteVolume() {
    this._audio.volume = 0
    this._audio.muted = true
  }

  /**
   * @param e - The pointer event
   */
  _seek = (e: PointerEvent) => {
    const _bounds = this._elements.progress.getBoundingClientRect()
    const _min = _bounds.x
    const _max = _bounds.x + _bounds.width

    // Out of bounds
    if (e.pageX < _min || e.pageX > _max) {
      return
    }

    const _val = e.clientX - _bounds.x

    this._audio.currentTime = this._audio.duration * (_val / _bounds.width)
  }

  _onPointerUp = () => {
    unlockUserSelection(document.body)

    this._resetVolume()

    document.removeEventListener("pointerup", this._onPointerUp)
    document.removeEventListener("pointermove", this._onPointerMove)
  }

  _onPointerMove = (e: PointerEvent) => {
    this._seek(e)
  }

  _onPointerDown = (e: PointerEvent) => {
    if (!this._audioCtx) {
      return
    }

    lockUserSelection(document.body)

    this._muteVolume()
    this._seek(e)

    document.addEventListener("pointermove", this._onPointerMove)
    document.addEventListener("pointerup", this._onPointerUp)
  }

  _onKeyDown(e: KeyboardEvent) {
    const _keyCode = getKeyCode(e)

    if (!_keyCode) {
      return
    }

    // Detect spacebar press
    if (_keyCode === 32) {
      // Prevent triggering other events when any UI buttons (ex: play, pause)
      // are focused and the user presses spacebar
      e.preventDefault()

      this._togglePlayback()
    }
  }

  _updateProgress = () => {
    const _percent = (this._audio.currentTime / this._audio.duration) * 100

    this._elements.progressBar.style.maxWidth = `${_percent}%`
    this._elements.elapsedTime.textContent = formatSeconds(
      this._audio.currentTime
    )
    this._elements.totalTime.textContent = formatSeconds(this._audio.duration)
  }

  _setupAudioAnalyser() {
    if (!this._audioCtx) {
      throw new Error("Audio context is unavailable")
    }

    // Set up overall analyzer
    this._analyserL = this._audioCtx.createAnalyser()
    this._analyserR = this._audioCtx.createAnalyser()

    this._analyserL.fftSize = config.fftSize
    this._analyserR.fftSize = config.fftSize
    this._analyserL.maxDecibels = config.maxDecibels
    this._analyserR.maxDecibels = config.maxDecibels

    // Set up bass analyzer
    this._bassAnalyserL = this._audioCtx.createAnalyser()
    this._bassAnalyserR = this._audioCtx.createAnalyser()

    const bassFftSize = getBassFftSize(this._audioCtx.sampleRate)
    this._bassAnalyserL.fftSize = bassFftSize
    this._bassAnalyserR.fftSize = bassFftSize
    this._bassAnalyserL.maxDecibels = config.maxDecibels
    this._bassAnalyserR.maxDecibels = config.maxDecibels

    // Connect to source
    const _source = this._audioCtx.createMediaElementSource(this._audio)

    // Connect source to splitter
    const _splitter = this._audioCtx.createChannelSplitter(2)

    _source.connect(_splitter, 0, 0)

    // Analyse each channel at two resolutions without adding another audio path
    _splitter.connect(this._bassAnalyserL, 0)
    _splitter.connect(this._bassAnalyserR, 1)

    this._bassAnalyserL.connect(this._analyserL)
    this._bassAnalyserR.connect(this._analyserR)

    // Connect back to the merger
    const _merger = this._audioCtx.createChannelMerger(2)

    this._analyserL.connect(_merger, 0, 0)
    this._analyserR.connect(_merger, 0, 1)

    // Connect both channels back to the audio source
    _merger.connect(this._audioCtx.destination, 0, 0)
  }

  _loadTrack(track: Track) {
    this._audio.src = track.source.href
    this._audio.load()

    this._elements.artistName.textContent = track.artistName
    this._elements.trackName.textContent = track.trackName
  }

  /**
   * @NOTE: In some browsers (ex: Safari), the AudioContext starts in 'suspended' state
   * @NOTE: and unlocking it requires a user-gesture event.
   */
  _unlockAudioContext() {
    if (!this._audioCtx) {
      return
    }

    if (this._audioCtx.state === "suspended") {
      this._audioCtx.resume()
    }
  }

  _initAudio() {
    // The AudioContext needs to be created after a user interaction has taken place
    const audioWindow = window as Window & {
      webkitAudioContext?: typeof AudioContext
    }
    const AudioContextConstructor =
      window.AudioContext || audioWindow.webkitAudioContext
    if (!AudioContextConstructor) {
      throw new Error("Web Audio is unavailable")
    }

    // Lock down sample rate so it's consistent across different devices
    this._audioCtx = new AudioContextConstructor({
      sampleRate: config.audioSampleRate,
    })

    this.state.hasUserInteracted = true

    this._unlockAudioContext()
    this._loadTrack(config.track)

    this._audio
      .play()
      .then(() => {
        this.state.isPlaying = true
        this.state.isBinDataEmpty = false
        this._elements.player.setAttribute("data-is-playing", "true")

        this._setupAudioAnalyser()
      })
      .catch((error) => {
        // The play() Promise has been rejected, waiting for user input
        console.log(error)
      })
  }

  _togglePlayback() {
    this.state.isPlaying ? this._pauseAudio() : this._playAudio()
  }

  async _pauseAudio() {
    if (this.state.isVolumeFading) {
      return
    }

    this.state.isVolumeFading = true
    this._elements.player.setAttribute("data-is-playing", "false")

    await fadeOut(this._audio)

    this.state.isPlaying = false
    this.state.isVolumeFading = false

    this._audio.pause()
  }

  /**
   * @NOTE: On Chrome, this auto-play was temporarily disabled. For more info, see link below:
   * @NOTE: https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#webaudio
   */
  async _playAudio() {
    if (this.state.hasUserInteracted) {
      if (this.state.isVolumeFading) {
        return
      }

      this.state.isPlaying = true
      this.state.isVolumeFading = true
      this.state.isBinDataEmpty = false
      this._elements.player.setAttribute("data-is-playing", "true")

      this._audio.play()

      await fadeIn(this._audio)

      this.state.isVolumeFading = false

      return
    }

    this._initAudio()
  }

  _addEventListeners() {
    const _playBtn = this._getElement("[data-play-btn]")
    const _pauseBtn = this._getElement("[data-pause-btn]")

    _playBtn.addEventListener("click", () => this._playAudio())
    _pauseBtn.addEventListener("click", () => this._pauseAudio())
    window.addEventListener("keydown", (e) => this._onKeyDown(e))
    this._elements.progress.addEventListener("pointerdown", (e) =>
      this._onPointerDown(e)
    )
    this._audio.addEventListener("timeupdate", () => this._updateProgress())
  }

  _cacheSelectors() {
    this._elements = {
      player: this._getElement("[data-player]"),
      progress: this._getElement("[data-player-progress]"),
      progressBar: this._getElement("[data-player-progress-bar]"),
      artistName: this._getElement("[data-player-artist-name]"),
      trackName: this._getElement("[data-player-track-name]"),
      elapsedTime: this._getElement("[data-player-elapsed-time]"),
      totalTime: this._getElement("[data-player-total-time]"),
    }
  }

  _getElement(selector: string): HTMLElement {
    const element = document.querySelector<HTMLElement>(selector)
    if (!element) {
      throw new Error(`Player element not found: ${selector}`)
    }
    return element
  }

  _setupWebAudio() {
    this._audio = document.createElement("audio")

    document.body.appendChild(this._audio)
  }

  /**
   * @public
   */
  init() {
    this._setupWebAudio()
    this._cacheSelectors()
    this._addEventListeners()
  }
}

export default Player
