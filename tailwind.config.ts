import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Montserrat", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["6rem", { lineHeight: "1.0", letterSpacing: "-0.02em" }],
        "display-lg": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.015em" }],
        "display": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "display-sm": ["2.5rem", { lineHeight: "1.15" }],
      },
      colors: {
        brand: {
          black: "#111111",
          dark: "#1a1a1a",
          gray: "#666666",
          muted: "#999999",
          light: "#e5e5e5",
          ivory: "#fafafa",
        },
      },
    },
  },
  plugins: [],
};
export default config;
