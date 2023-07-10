import { appColors } from "./colors"
import { lightModeColors } from "./themes"

type cssVaribles = keyof (typeof appColors)[":root"]
type ValidColorValue = `var(${cssVaribles})` | `rgb(${string})` | `rgba(${string})`

export interface TWVariablesColors {
  "--background-root": ValidColorValue
  "--background-base": ValidColorValue
  "--background-shadow": ValidColorValue
  "--background-opposite": ValidColorValue
  "--ring-base": ValidColorValue
  "--ring-strong": ValidColorValue
  "--fore-heading-base": ValidColorValue
  "--fore-heading-soft": ValidColorValue
  "--fore-ground": ValidColorValue
  "--fore-soft": ValidColorValue
  "--fore-strong": ValidColorValue
  "--fore-support": ValidColorValue
  "--fore-accent": ValidColorValue
  "--symbol": ValidColorValue
}

export type TWObjectColors = Record<string, TWVariablesColors>
export type TWObjectColorsMaybe = Record<string, Partial<TWVariablesColors>>

type BitClassesPrefix<T extends string> = `.${T} ${LightModeKeys}`
export type NewTheme<T extends string> = Partial<
  Record<BitClassesPrefix<T>, Partial<TWVariablesColors>>
>
type LightModeKeys = keyof typeof lightModeColors
