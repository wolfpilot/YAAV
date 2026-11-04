import { Pane } from "tweakpane"
import { config } from "./config"

const PARAMS = {
  channels: config.channels.both,
  variant: config.variant.bars,
}

class GUI {
  constructor() {}

  /**
   * @public
   */
  init() {
    const pane = new Pane()

    const audioPane = pane.addFolder({
      title: "Audio",
    })

    audioPane.addBinding(PARAMS, "channels", {
      options: {
        "L + R": config.channels.both,
        L: config.channels.left,
        R: config.channels.right,
      },
    })

    const visualizationPane = pane.addFolder({
      title: "Visualization",
    })

    visualizationPane.addBinding(PARAMS, "variant", {
      options: {
        bars: config.variant.bars,
      },
    })
  }
}

export default GUI
