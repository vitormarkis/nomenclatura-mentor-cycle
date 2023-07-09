import type { Config } from "tailwindcss"
import { markisPlugin } from "./src/lib/tailwind/plugin"

const config = {
  darkMode: "class",
  plugins: [markisPlugin],
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
} satisfies Config

export default config
