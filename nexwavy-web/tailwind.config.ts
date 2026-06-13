import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#F8FAFC",
        muted: "#B8C7D1",
        night: "#061A1F",
        "night-2": "#071B2C",
        tide: "#003D4F",
        accent: "#25D6E8",
        gold: "#FFC857",
        "gold-deep": "#F5B700",
        mist: "rgba(255,255,255,0.06)",
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Helvetica", "Arial", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 0 rgba(255,255,255,0.05) inset, 0 18px 48px rgba(0,0,0,0.28)",
        lift: "0 24px 70px rgba(0,0,0,0.34)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
