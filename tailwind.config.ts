import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        light: {
          background: '#ffffff', 
          primaryText: '#000000', 
          secondaryText: '#333333',
          accent: '#F7B614',
          border: '#E5E5E5',
          buttonBg: '#FFA500',
          link: '#87CEEB',
        },
        dark: {
          background: '#1A1A1A',
          primaryText: '#ffffff',
          secondaryText: '#C0C0C0',
          accent: '#FFD700',
          border: '#333333',
          buttonBg: '#B8860B',
          link: '#4682B4',
        }
      }
    },
  },
  plugins: [],
};
export default config;
