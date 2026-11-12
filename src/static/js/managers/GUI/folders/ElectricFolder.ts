import type { ElectricSettings } from "../../../types"
import { Pane } from "tweakpane"

export const addElectricFolder = (pane: Pane, settings: ElectricSettings) => {
  const folder = pane.addFolder({
    title: "Electric",
    expanded: false,
  })

  // Channels
  folder.addBinding(settings, "bandCount", {
    min: 32,
    max: 128,
    step: 16,
  })

  // Dynamics
  folder.addBinding(settings, "ringsAmount", {
    min: 1,
    max: 15,
    step: 1,
  })

  folder.addBinding(settings, "ringSpacing", {
    min: 0,
    max: 50,
    step: 0.5,
  })

  folder.addBinding(settings, "rotationPeriodSeconds", {
    min: 20,
    max: 120,
    step: 1,
  })

  // Colors
  folder.addBinding(settings, "color", {
    color: {
      alpha: true,
    },
  })

  // Sizes
  folder.addBinding(settings, "lineWidthMin", {
    min: 0.5,
    max: 5,
    step: 0.5,
  })

  folder.addBinding(settings, "lineWidthMax", {
    min: 5,
    max: 30,
    step: 0.5,
  })
}
