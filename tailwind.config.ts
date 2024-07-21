import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('/images/hero-bgColor.svg')",
        card: "linear-gradient(153.47deg, rgba(255, 255, 255, 0) -341.94%, #14101D 95.11%)",
      },
      colors: {
        green: {
          1: "#5CE1E6",
          2: "#33BBCF",
        },
        dark: {
          1: "#00040F",
          2: "#393939",
          3: "#14101D",
        },
      },
      boxShadow: {
        "featured-card": "0px 20px 100px -10px #42475B1A",
      },
    },
  },
  plugins: [],
};
export default config;
