import { darkModeColors } from "."
import { lightModeColors } from "."
import { getAllThemesRGB } from "../themesWork"
import { TWObjectColorsMaybe } from "../types"

export * from "./dark"
export * from "./light"

export const allThemes = [lightModeColors, darkModeColors]
export const allThemesLayers = allThemes.reduce(
  (acc, item) => ({ ...acc, ...item }),
  {} as TWObjectColorsMaybe
)
export const allThemesRGB = getAllThemesRGB(allThemesLayers)
