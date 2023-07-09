import type { Config } from "tailwindcss"
import { simonSwiss } from "./src/lib/simonswiss/plugin"

const config = {
  darkMode: "class",
  plugins: [simonSwiss],
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
} satisfies Config

export default config
