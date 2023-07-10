import { appColors } from "./colors"
import { lightModeColors } from "./themes"

type cssVaribles = keyof (typeof appColors)[":root"]
type Stringx = `var(${cssVaribles})` | `rgb(${string})` | `rgba(${string})`

export interface TWVariablesColors {
  "--background-base": Stringx
  "--background-shadow": Stringx
  "--background-opposite": Stringx
  "--ring-base": Stringx
  "--ring-strong": Stringx
  "--fore-heading-base": Stringx
  "--fore-heading-soft": Stringx
  "--fore-ground": Stringx
  "--fore-soft": Stringx
  "--fore-strong": Stringx
  "--fore-support": Stringx
  "--fore-accent": Stringx
  "--symbol": Stringx
}

export type TWObjectColors = Record<string, TWVariablesColors>
export type TWObjectColorsMaybe = Record<string, Partial<TWVariablesColors>>

type BitClassesPrefix<T extends string> = `.${T} ${LightModeKeys}`
export type NewTheme<T extends string> = Partial<
  Record<BitClassesPrefix<T>, Partial<TWVariablesColors>>
>
type LightModeKeys = keyof typeof lightModeColors
