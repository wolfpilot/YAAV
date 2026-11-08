import { config } from "../../../config"
import type { BarsSettings } from "../../../types"
import { Pane } from "tweakpane"

export const addBarsFolder = (pane: Pane, settings: BarsSettings) => {
  const folder = pane.addFolder({ title: "Bars" })

  folder.addBinding(settings, "channels", {
    options: {
      "L + R": config.channels.both,
      L: config.channels.left,
      R: config.channels.right,
    },
  })

  folder.addBinding(settings, "bandCountSingleChannel", {
    min: 64,
    max: 256,
    step: 16,
  })

  folder.addBinding(settings, "bandCountBothChannels", {
    min: 32,
    max: 128,
    step: 16,
  })

  folder.addBinding(settings, "lineWidth", {
    min: 0.5,
    max: 10,
    step: 0.5,
  })
}
