import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Memastikan folder app terpindai
  ],
  theme: {
    extend: {
      colors: {
        gold: "#C5A059",
        pearl: "#FCFBFA",
        dark: "#1A1A1A",
      },
    },
  },
  plugins: [],
};
export default config;