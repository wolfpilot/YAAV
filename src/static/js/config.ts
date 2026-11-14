export const config = {
  // metadata
  track: {
    source: new URL("../sounds/music.mp3", import.meta.url),
  },
  // audio
  channels: {
    both: "L + R",
    left: "L",
    right: "R",
  },
  // visualization
  variant: {
    bars: "bars",
    electric: "electric",
  },
} as const
