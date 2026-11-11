export type RingArc = "full" | "left" | "right"

export interface RingSegment {
  arc: RingArc
  start: string
  end: string
}

export interface UITheme {
  accent: string
  ring: RingSegment[]
  trackStart: string
  trackEnd: string
}
