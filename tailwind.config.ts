import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        halo: {
          teal: "var(--halo-teal)",
          teal10: "var(--halo-teal10)",
          gray: "var(--halo-gray)",
          gray20: "var(--halo-gray20)",
          black: "var(--halo-black)",
          white: "var(--halo-white)",
        },
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        display: ["Sunsive", "sans-serif"],
      },
    },
  },
  plugins: [],
}

export default config