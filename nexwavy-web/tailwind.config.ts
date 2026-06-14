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
        "surface-muted": "#EEF1F7",
        success: "#22C55E",
        warning: "#F59E0B",
        error: "#EF4444",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Helvetica Neue", "Arial", "sans-serif"],
        display: ["var(--font-montserrat)", "var(--font-inter)", "Helvetica Neue", "Arial", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(11,31,59,0.04), 0 8px 24px rgba(11,31,59,0.06)",
        lift: "0 12px 40px rgba(48,105,176,0.14)",
        nav: "0 1px 0 rgba(217,225,234,0.8), 0 4px 16px rgba(11,31,59,0.04)",
      },
      borderRadius: {
        xl2: "1.5rem",
        xl3: "2rem",
      },
      backdropBlur: {
        xs: "2px",
      },
      opacity: {
        4: "0.04",
        6: "0.06",
        8: "0.08",
        15: "0.15",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      animation: {
        "fade-up": "fadeUp 0.4s ease-out",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
