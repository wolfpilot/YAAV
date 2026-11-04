import { Pane } from "tweakpane"

const PARAMS = {
  variant: "bars",
}

class GUI {
  constructor() {}

  /**
   * @public
   */
  init() {
    const pane = new Pane()

    const pane1 = pane.addFolder({
      title: "Visualization",
    })

    pane1.addBinding(PARAMS, "variant", {
      options: {
        bars: "bars",
      },
    })
  }
}

export default GUI
