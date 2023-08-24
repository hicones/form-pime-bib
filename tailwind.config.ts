import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#2CA7EB",
        secondary: "rgba(255, 215, 16, 0.15)",
        tertiary: "#FCEA2B",
        background: "#FFFEFB",
        dark: "#192536",
        darkgray: "#6D7383",
      },
    },
  },
  plugins: [],
};
export default config;
