import { TWObjectColorsMaybe } from "./types"

export function getAllThemesRGB(themes: TWObjectColorsMaybe): TWObjectColorsMaybe {
  const entries = Object.entries(themes)
  const resolved = entries.map(([key, value]) => {
    const valueEntries = Object.entries(value)
    const valueHandled = valueEntries.map(([k, v]) => {
      const newValue = extractRGBColor(v)
      return [k, newValue]
    })
    const valueResolved = Object.fromEntries(valueHandled)
    return [key, valueResolved]
  })

  const result = Object.fromEntries(resolved)
  return result
}

function extractRGBColor(value: string) {
  if (!isRGB(value)) return value
  if (isVariable(value)) return value
  if (isEmpty(value)) return value
  const startIndex = value.indexOf("(") + 1
  const endIndex = value.lastIndexOf(")")

  const newValue = value.slice(startIndex, endIndex)
  return newValue
}

function isVariable(value: string): boolean {
  const [varString] = value.split("var")
  return varString.length === 0
}

function isRGB(value: string): boolean {
  const [rgbString] = value.split("rgb")
  return rgbString.length === 0
}

function isEmpty(value: string): boolean {
  return value.length === 0
}
