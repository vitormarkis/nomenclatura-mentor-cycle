import { TWObjectColorsMaybe } from "../types"

export const lightModeColors = {
  "._first": {
    "--background-base": "rgba(249, 249, 249)",
    "--background-shadow": "rgba(233, 233, 233)",
    "--background-opposite": "rgba(220, 220, 220)",
    "--ring-base": "rgba(215, 215, 215)",
    "--ring-strong": "rgba(180, 180, 180)",
    "--fore-heading-base": "rgba(55, 55, 55)",
    "--fore-heading-soft": "rgba(80, 80, 80)",
    "--fore-ground": "rgba(140, 140, 140)",
    "--fore-soft": "rgba(160, 160, 160)",
    "--fore-strong": "rgba(70, 70, 70)",
    "--fore-support": "var(--picton-blue-500)",
    "--symbol": "rgba(140, 140, 140)",
    "--fore-accent": "rgba(255, 81, 81)",
  },
  "._second": {
    "--background-base": "rgba(233, 233, 233)",
    "--background-shadow": "rgba(217, 217, 217)",
    "--background-opposite": "rgba(204, 204, 204)",
    "--fore-ground": "rgba(114, 114, 114)",
    "--symbol": "rgba(150, 150, 150)",
  },
  "._third": {
    "--background-base": "rgba(217, 217, 217)",
    "--background-shadow": "rgba(201, 201, 201)",
    "--background-opposite": "rgba(185, 185, 185)",
    "--fore-ground": "rgba(98, 98, 98)",
    "--symbol": "rgba(150, 150, 150)",
  },
  "._action": {
    "--background-base": "rgba(51, 185, 84)",
    "--background-shadow": "rgba(46, 168, 77)",
    "--background-opposite": "var(--chateau-green-600)",
    "--ring-base": "var(--chateau-green-500)",
    "--ring-strong": "var(--chateau-green-500)",
    "--fore-strong": "rgba(255, 255, 255)",
    "--symbol": "rgba(255, 255, 255)",
  },
  "._secondary": {
    "--background-base": "var(--picton-blue-500)",
    "--background-shadow": "var(--picton-blue-600)",
    "--background-opposite": "var(--picton-blue-700)",
    "--ring-base": "var(--picton-blue-500)",
    "--ring-strong": "var(--picton-blue-600)",
    "--fore-strong": "rgba(255, 255, 255)",
    "--symbol": "rgba(255, 255, 255)",
  },
  "._opposite": {
    "--background-base": "rgba(255, 81, 81)",
    "--background-shadow": "rgba(255, 70, 70)",
    "--background-opposite": "rgba(220, 60, 60)",
    "--ring-base": "rgba(255, 81, 81)",
    "--ring-strong": "rgba(220, 60, 60)",
    "--fore-strong": "rgba(255, 255, 255)",
    "--symbol": "rgba(255, 255, 255)",
  },
} satisfies TWObjectColorsMaybe
