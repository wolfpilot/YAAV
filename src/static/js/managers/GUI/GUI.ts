import { Pane } from "tweakpane"
import { config } from "../../config"
import type { VisualizationSettings } from "../../types"

class GUI {
  private _settings: VisualizationSettings

  constructor(settings: VisualizationSettings) {
    this._settings = settings
  }

  /**
   * @public
   */
  init() {
    const pane = new Pane()

    const audioPane = pane.addFolder({
      title: "Audio",
    })

    audioPane.addBinding(this._settings, "channels", {
      options: {
        "L + R": config.channels.both,
        L: config.channels.left,
        R: config.channels.right,
      },
    })

    const visualizationPane = pane.addFolder({
      title: "Visualization",
    })

    visualizationPane.addBinding(this._settings, "variant", {
      options: {
        bars: config.variant.bars,
        electric: config.variant.electric,
      },
    })
  }
}

export default GUI
