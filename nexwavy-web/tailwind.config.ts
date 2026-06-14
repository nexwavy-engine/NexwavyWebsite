import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#3069B0",
        midnight: "#0B1F3B",
        signal: "#2D8CFF",
        cloud: "#F5F7FB",
        line: "#D9E1EA",
        slate: "#6B7A90",
        ink: "#111827",
        teal: "#BFE8E6",
        accent: "#3069B0",
        muted: "#6B7A90",
        success: "#22C55E",
        warning: "#F59E0B",
        error: "#EF4444",
        info: "#3B82F6",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Helvetica Neue", "Arial", "sans-serif"],
        display: ["var(--font-montserrat)", "var(--font-inter)", "Helvetica Neue", "Arial", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(11,31,59,0.04), 0 12px 28px rgba(11,31,59,0.06)",
        lift: "0 18px 45px rgba(48,105,176,0.12)",
      },
      borderRadius: {
        xl2: "1.5rem",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
