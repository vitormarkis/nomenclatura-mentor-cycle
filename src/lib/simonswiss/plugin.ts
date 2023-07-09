import plugin from "tailwindcss/plugin"

export const simonSwiss = plugin(
  // 1. Add CSS Variables to the base layer
  function ({ addBase }) {
    addBase({
      ":root": {
        "--chateau-green-50": "241 252 243",
        "--chateau-green-100": "223 249 229",
        "--chateau-green-200": "193 241 204",
        "--chateau-green-300": "144 229 165",
        "--chateau-green-400": "88 208 117",
        "--chateau-green-500": "51 185 84",
        "--chateau-green-600": "36 149 64",
        "--chateau-green-700": "31 118 53",
        "--chateau-green-800": "30 93 46",
        "--chateau-green-900": "26 77 40",
        "--chateau-green-950": "9 42 19",
        "--picton-blue-50": "241 248 253",
        "--picton-blue-100": "222 238 251",
        "--picton-blue-200": "197 228 248",
        "--picton-blue-300": "157 211 243",
        "--picton-blue-400": "111 185 235",
        "--picton-blue-500": "70 153 227",
        "--picton-blue-600": "56 130 216",
        "--picton-blue-700": "47 109 198",
        "--picton-blue-800": "44 88 161",
        "--picton-blue-900": "40 76 128",
        "--picton-blue-950": "29 47 78",
      },
    })

    addBase({
      "._first": {
        "--background-base": "249 249 249",
        "--background-shadow": "233 233 233",
        "--background-opposite": "220 220 220",
        "--ring-base": "215 215 215",
        "--ring-strong": "180 180 180",
        "--fore-heading-base": "55 55 55",
        "--fore-heading-soft": "80 80 80",
        "--fore-ground": "140 140 140",
        "--fore-soft": "160 160 160",
        "--fore-strong": "70 70 70",
        "--fore-support": "var(--picton-blue-500)",
        "--symbol": "140 140 140",
      },
    })
  },
  {
    theme: {
      extend: {},
      colors: {
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
        background: {
          base: "rgb(var(--background-base) / <alpha-value>)",
          shadow: "rgb(var(--background-shadow) / <alpha-value>)",
          opposite: "rgb(var(--background-opposite) / <alpha-value>)",
        },
        ring: {
          base: "rgb(var(--ring-base) / <alpha-value>)",
          strong: "rgb(var(--ring-strong) / <alpha-value>)",
        },
        fore: {
          heading: {
            base: "rgb(var(--fore-heading-base) / <alpha-value>)",
            soft: "rgb(var(--fore-heading-soft) / <alpha-value>)",
          },
          ground: "rgb(var(--fore-ground) / <alpha-value>)",
          soft: "rgb(var(--fore-soft) / <alpha-value>)",
          strong: "rgb(var(--fore-strong) / <alpha-value>)",
          support: "rgb(var(--fore-support) / <alpha-value>)",
        },
        symbol: "rgb(var(--symbol) / <alpha-value>)",
      },
    },
  }
)
