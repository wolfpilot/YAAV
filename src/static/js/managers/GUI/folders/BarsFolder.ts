import { config } from "../../../config"
import type { BarsSettings } from "../../../types"
import { Pane } from "tweakpane"

export const addBarsFolder = (pane: Pane, settings: BarsSettings) => {
  const folder = pane.addFolder({
    title: "Bars",
    expanded: false,
  })

  folder.addBinding(settings, "channels", {
    options: {
      "L + R": config.channels.both,
      L: config.channels.left,
      R: config.channels.right,
    },
  })

  folder.addBinding(settings, "ringBandCountSingleChannel", {
    min: 8,
    max: 128,
    step: 8,
  })

  folder.addBinding(settings, "ringBandCountBothChannels", {
    min: 4,
    max: 64,
    step: 4,
  })

  folder.addBinding(settings, "colorChannelL", {
    color: {
      alpha: true,
    },
  })

  folder.addBinding(settings, "colorChannelR", {
    color: {
      alpha: true,
    },
  })

  folder.addBinding(settings, "glowBlur", {
    min: 0.5,
    max: 20,
    step: 0.5,
  })

  folder.addBinding(settings, "hueShiftDegrees", {
    min: -360,
    max: 360,
    step: 0.5,
  })
}
