import { ElectricSettings } from "../../../../types"
import { rgbToHsl } from "../../../../utils/color"
import { getSingleColorTheme } from "../helpers"

export const getElectricTheme = (settings: ElectricSettings) => {
  return getSingleColorTheme(rgbToHsl(settings.color))
}
