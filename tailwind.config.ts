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
        body: "#091426",
        primary: "#1b4d91",
        "primary-light": "#2d7dd2",
        "input-label": "#7d7d7f",
        "input-border": "#c9c9cc",
      },
      boxShadow: {
        paper: "0 0 20px 1px rgba(0,0,0,0.1)",
      }
    },
  },
  plugins: [],
} satisfies Config;
