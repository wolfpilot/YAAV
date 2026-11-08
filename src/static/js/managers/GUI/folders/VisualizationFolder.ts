import { config } from "../../../config"
import type { VisualizationSettings } from "../../../types"
import { Pane } from "tweakpane"

export const addVisualizationFolder = (
  pane: Pane,
  settings: VisualizationSettings
) => {
  const folder = pane.addFolder({
    title: "Visualization",
  })

  folder.addBinding(settings, "variant", {
    options: {
      bars: config.variant.bars,
      electric: config.variant.electric,
    },
  })
}
