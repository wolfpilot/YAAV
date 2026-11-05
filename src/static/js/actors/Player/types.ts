export interface Track {
  source: URL
  artistName: string
  trackName: string
}

export interface PlayerElements {
  player: HTMLElement
  progress: HTMLElement
  progressBar: HTMLElement
  artistName: HTMLElement
  trackName: HTMLElement
  elapsedTime: HTMLElement
  totalTime: HTMLElement
}
