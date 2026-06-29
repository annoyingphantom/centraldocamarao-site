import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#003040",
          deep: "#001020",
          ink: "#102030",
          gold: "#C0A040",
          orange: "#C04020",
          cream: "#F8F5EE",
          mist: "#EAF4F7",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["Inter", "Segoe UI", "Roboto", "Arial", "sans-serif"],
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
      },
      boxShadow: {
        premium: "0 24px 70px rgba(0, 16, 32, 0.14)",
        soft: "0 16px 40px rgba(0, 48, 64, 0.10)",
      },
      borderRadius: {
        brand: "1rem",
      },
    },
  },
  plugins: [],
};

export default config;
