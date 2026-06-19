import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'fg-black': '#050509',
        'fg-gold': '#D4AF37',
        'fg-gray-dark': '#1F2933',
        'fg-gray': '#9CA3AF',
        'fg-text': '#F5F5F7',
      },
    },
  },
  plugins: [],
};

export default config;