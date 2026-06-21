import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: "#3069B0",
          50: "#F0F7FF",
          100: "#E0EFFF",
          600: "#255189",
          700: "#1B3B64",
        },
        midnight: {
          DEFAULT: "#0B1F3B",
          900: "#050F1D",
          950: "#02070F",
        },
        signal: "#2D8CFF",
        cloud: "#F5F7FB",
        line: "#D9E1EA",
        slate: "#6B7A90",
        ink: "#111827",
        teal: "#BFE8E6",
        accent: {
          DEFAULT: "#3069B0",
          dark: "#1B3B64",
        },
        muted: "#6B7A90",
        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444",
        info: "#3B82F6",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-montserrat)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 4px rgba(11,31,59,0.02), 0 12px 32px rgba(11,31,59,0.04)",
        lift: "0 20px 50px rgba(48,105,176,0.15), 0 4px 12px rgba(48,105,176,0.05)",
        glass: "0 8px 32px 0 rgba(11,31,59,0.1)",
      },
      borderRadius: {
        xl2: "1.5rem",
        xl3: "2rem",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
