import { TWObjectColorsMaybe } from "./types"

export function getUniqueCSSVariables(twColors: TWObjectColorsMaybe) {
  const twColorsValues = Object.values(twColors)
  const cssVariables: string[] = []

  for (const value of twColorsValues) {
    const k = Object.keys(value)
    for (let classType of k) {
      if (!cssVariables.includes(classType)) {
        cssVariables.push(classType)
      }
    }
  }

  return cssVariables
}

export function generateColorObjects(inputArray: string[]) {
  const result = {} as Record<string, any>

  inputArray.forEach(str => {
    const keys = str.split("-").filter(s => s.length)
    let currentLevel = result

    keys.forEach((key, i) => {
      if (!currentLevel[key]) {
        if (i === keys.length - 1) {
          currentLevel[key] = `rgba(var(${str}), <alpha-value>)`
        } else {
          if (typeof currentLevel === "string") {
            console.error(
              `Você não pode criar variações para uma variante que já está finalizada. \n\nO motivo mais provável é esse: \n\nmy-custom \nmy-custom-variant \n\n-variant está criando uma variação em uma variante já finalizada.`
            )
            return
          }
          currentLevel[key] = {}
        }
      }

      currentLevel = currentLevel[key]
    })
  })

  return result
}
