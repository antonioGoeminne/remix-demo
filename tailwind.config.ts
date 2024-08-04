import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
    "./ui/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
    "./features/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#111826",
        success: "#a1ee87",
        error: "#fd625d",
      },
    },
  },
  plugins: [],
} satisfies Config;
