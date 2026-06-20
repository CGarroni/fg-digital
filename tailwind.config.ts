import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "fg-black": "#050505",
        "fg-text": "#009fafb",
        "fg-gray": "#9ca3af",
        "fg-gray-dark": "#4b5563",
        "fg-gold": "#facc15",
      },
    },
  },
  plugins: [],
};

export default config;