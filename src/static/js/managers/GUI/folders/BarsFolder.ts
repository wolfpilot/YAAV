import { config } from "../../../config"
import type { BarsSettings } from "../../../types"
import { Pane } from "tweakpane"

export const addBarsFolder = (pane: Pane, settings: BarsSettings) => {
  const folder = pane.addFolder({
    title: "Bars",
    expanded: false,
  })

  // Channels
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

  // Sizes
  folder.addBinding(settings.lineWidths, "bass", {
    label: "lineWidthBass",
    min: 0.1,
    max: 15,
    step: 0.25,
  })

  folder.addBinding(settings.lineWidths, "mids", {
    label: "lineWidthMids",
    min: 0.1,
    max: 10,
    step: 0.25,
  })

  folder.addBinding(settings.lineWidths, "highs", {
    label: "lineWidthHighs",
    min: 0.1,
    max: 5,
    step: 0.25,
  })

  // Colors
  const rangeOptions = { min: 0, max: 100, step: 1 }

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

  folder.addBinding(settings, "hueShiftDegrees", {
    min: -360,
    max: 360,
    step: 0.5,
  })

  folder.addBinding(settings.saturationRange, "min", {
    ...rangeOptions,
    label: "saturationMin",
  })

  folder.addBinding(settings.saturationRange, "max", {
    ...rangeOptions,
    label: "saturationMax",
  })

  folder.addBinding(settings.lightnessRange, "min", {
    ...rangeOptions,
    label: "lightnessMin",
  })

  folder.addBinding(settings.lightnessRange, "max", {
    ...rangeOptions,
    label: "lightnessMax",
  })

  folder.addBinding(settings, "glowBlur", {
    min: 0.5,
    max: 20,
    step: 0.5,
  })
}
