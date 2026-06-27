import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050506",
        panel: "#101012",
        line: "rgba(255,255,255,0.14)",
        cloud: "#f5f2eb",
        acid: "#d8ff63",
        aqua: "#62f7db",
        rose: "#ff7a90"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 80px rgba(216, 255, 99, 0.16)"
      }
    }
  },
  plugins: []
};

export default config;

