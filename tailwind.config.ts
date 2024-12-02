import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark: "#333333",
        primary: "#4C9BFC",
        secondary: "#FF7B5B",
        eggshell: "#F5F5F5", // "#F0EAD6"
      },
    },
  },
  plugins: [],
} satisfies Config;
