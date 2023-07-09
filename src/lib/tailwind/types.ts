export interface TWVariablesColors {
  "--background-base": string
  "--background-shadow": string
  "--background-opposite": string
  "--ring-base": string
  "--ring-strong": string
  "--fore-heading-base": string
  "--fore-heading-soft": string
  "--fore-ground": string
  "--fore-soft": string
  "--fore-strong": string
  "--fore-support": string
  "--fore-accent": string
  "--symbol": string
}

export type TWObjectColors = Record<string, TWVariablesColors>
export type TWObjectColorsMaybe = Record<string, Partial<TWVariablesColors>>
