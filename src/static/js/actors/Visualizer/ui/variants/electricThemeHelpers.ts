import { ElectricSettings } from "../../../../types"
import { rgbToHsl } from "../../../../utils/color"
import { config as electricConfig } from "../../renderers/Electric/config"
import { getBandColor } from "../../renderers/Electric/color"
import { getSingleColorTheme } from "../helpers"

export const getElectricTheme = (settings: ElectricSettings) => {
  // The color a ring segment has at the reference magnitude
  const referenceColor = getBandColor({
    color: rgbToHsl(settings.color),
    magnitude: electricConfig.uiReferenceMagnitude,
    hueShiftDegrees: settings.hueShiftDegrees,
  })

  return getSingleColorTheme(referenceColor)
}
