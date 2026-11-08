import type { ElectricSettings } from "../../../types"
import { Pane } from "tweakpane"

export const addElectricFolder = (pane: Pane, settings: ElectricSettings) => {
  const folder = pane.addFolder({ title: "Electric" })

  folder.addBinding(settings, "ringsAmount", {
    min: 1,
    max: 10,
    step: 1,
  })
}
