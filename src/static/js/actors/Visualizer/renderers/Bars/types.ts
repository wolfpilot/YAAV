import type { HslaColor } from "../../../../utils/color"
import type { config } from "./config"

export type RingConfig = (typeof config.rings)[number]

/**
 * Values shared by every bar drawn for a single channel.
 */
export interface ChannelDrawContext {
  centre: Point
  side: number
  isSolo: boolean
  baseColor: HslaColor
}

export interface Point {
  x: number
  y: number
}

export interface VolumeBarCoords {
  xStart: number
  yStart: number
  xEnd: number
  yEnd: number
}
