import { Pane } from "tweakpane"
import type { GUISettings } from "../../types"
import {
  addBarsFolder,
  addElectricFolder,
  addVisualizationFolder,
} from "./folders"

class GUI {
  private _settings: GUISettings

  constructor(settings: GUISettings) {
    this._settings = settings
  }

  /**
   * @public
   */
  init() {
    const pane = new Pane()

    addVisualizationFolder(pane, this._settings.visualization)
    addBarsFolder(pane, this._settings.bars)
    addElectricFolder(pane, this._settings.electric)
  }
}

export default GUI
