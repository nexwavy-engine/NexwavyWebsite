import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#0A192F",
        blue: "#0052FF",
        signal: "#1E3A8A",
        slate: "#475569",
        cloud: "#F8FAFC",
        ink: "#0F172A",
        line: "#E2E8F0",
        teal: "#0D9488",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        heading: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
        display: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.25rem",
        xl3: "1.75rem",
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(10, 25, 47, 0.08)",
        lift: "0 20px 40px -15px rgba(10, 25, 47, 0.12)",
        glass: "0 8px 32px 0 rgba(10, 25, 47, 0.06)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
