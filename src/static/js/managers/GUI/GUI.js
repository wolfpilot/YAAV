import { Pane } from "tweakpane"
import { config } from "../../config"

class GUI {
  constructor(settings) {
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
      },
    })
  }
}

export default GUI
