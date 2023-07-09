import { TWObjectColorsMaybe } from "../types"

export const darkModeColors = {
  ".dark ._first": {
    "--background-base": "rgba(0, 0, 0)",
    "--background-shadow": "rgba(20, 20, 20)",
    "--ring-base": "rgba(47, 47, 47)",
    "--ring-strong": "rgba(70, 70, 70)",
    "--fore-heading-base": "rgba(255, 255, 255)",
    "--fore-heading-soft": "rgba(175, 175, 175)",
    "--fore-ground": "rgba(130, 130, 130)",
    "--fore-soft": "rgba(110, 110, 110)",
    "--fore-strong": "rgba(255, 255, 255)",
    "--symbol": "rgba(130, 130, 130)",
  },
  ".dark ._second": {
    "--background-base": "rgba(30, 30, 30)",
    "--background-shadow": "rgba(50, 50, 50)",
    "--fore-ground": "rgba(145, 145, 145)",
    "--symbol": "rgba(145, 145, 145)",
  },
  ".dark ._third": {
    "--background-base": "rgba(50, 50, 50)",
    "--background-shadow": "rgba(60, 60, 60)",
    "--fore-ground": "rgba(160, 160, 160)",
    "--symbol": "rgba(90, 90, 90)",
  },
} satisfies TWObjectColorsMaybe
