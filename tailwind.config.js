/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      white: "#fff",
      black: "#000",
      background: {
        DEFAULT: "hsla(var(--background) / <alpha-value>)",
        alt: "hsla(var(--background-alt) / <alpha-value>)",
        shade: "hsla(var(--background-shade) / <alpha-value>)",
      },
      ring: {
        DEFAULT: "hsla(var(--ring) / <alpha-value>)",
        strong: "hsla(var(--ring-strong) / <alpha-value>)",
        soft: "hsla(var(--ring-soft) / <alpha-value>)",
      },
      color: {
        DEFAULT: "hsla(var(--color) / <alpha-value>)",
        strong: "hsla(var(--color-strong) / <alpha-value>)",
        soft: "hsla(var(--color-soft) / <alpha-value>)",
      },
      heading: {
        DEFAULT: "hsla(var(--heading) / <alpha-value>)",
        sub: "hsla(var(--heading-sub) / <alpha-value>)",
        soft: "hsla(var(--heading-soft) / <alpha-value>)",
      },
      symbol: {
        DEFAULT: "hsla(var(--symbol) / <alpha-value>)",
        sub: "hsla(var(--symbol-sub) / <alpha-value>)",
        soft: "hsla(var(--symbol-soft) / <alpha-value>)",
      },
    },
  },
  plugins: [],
}
