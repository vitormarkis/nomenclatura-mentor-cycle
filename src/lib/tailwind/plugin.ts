import plugin from "tailwindcss/plugin"
import { generateColorObjects, generateRGBVariables, getUniqueCSSVariables } from "./helpers"
import { allThemesLayers } from "./themes"
import { appColors } from "./colors"
import { getAllThemesRGB } from "./themesWork"

/**
 * Mudar para abranger todos os temas
 */
const cssVariablesStrings = getUniqueCSSVariables(allThemesLayers)
const themeColors = generateColorObjects(cssVariablesStrings)

export const markisPlugin = plugin(
  function ({ addBase }) {
    const appColorsRGB = generateRGBVariables(appColors)
    const allThemesRGB = getAllThemesRGB(allThemesLayers)

    addBase({
      ...allThemesRGB,
      ...appColorsRGB,
    })
  },
  {
    theme: {
      extend: {},
      colors: {
        ...themeColors,
        transparent: "transparent",
        white: "#fff",
        black: "#000",
        "picton-blue": {
          50: "rgb(var(--picton-blue-50) / <alpha-value>)",
          100: "rgb(var(--picton-blue-100) / <alpha-value>)",
          200: "rgb(var(--picton-blue-200) / <alpha-value>)",
          300: "rgb(var(--picton-blue-300) / <alpha-value>)",
          400: "rgb(var(--picton-blue-400) / <alpha-value>)",
          500: "rgb(var(--picton-blue-500) / <alpha-value>)",
          600: "rgb(var(--picton-blue-600) / <alpha-value>)",
          700: "rgb(var(--picton-blue-700) / <alpha-value>)",
          800: "rgb(var(--picton-blue-800) / <alpha-value>)",
          900: "rgb(var(--picton-blue-900) / <alpha-value>)",
          950: "rgb(var(--picton-blue-950) / <alpha-value>)",
        },
        "chateau-green": {
          50: "rgb(var(--chateau-green-50) / <alpha-value>)",
          100: "rgb(var(--chateau-green-100) / <alpha-value>)",
          200: "rgb(var(--chateau-green-200) / <alpha-value>)",
          300: "rgb(var(--chateau-green-300) / <alpha-value>)",
          400: "rgb(var(--chateau-green-400) / <alpha-value>)",
          500: "rgb(var(--chateau-green-500) / <alpha-value>)",
          600: "rgb(var(--chateau-green-600) / <alpha-value>)",
          700: "rgb(var(--chateau-green-700) / <alpha-value>)",
          800: "rgb(var(--chateau-green-800) / <alpha-value>)",
          900: "rgb(var(--chateau-green-900) / <alpha-value>)",
          950: "rgb(var(--chateau-green-950) / <alpha-value>)",
        },
      },
    },
  }
)
