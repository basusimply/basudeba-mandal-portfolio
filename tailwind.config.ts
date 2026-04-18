import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#0c0e12",
          elevated: "#12151c",
          border: "#1f2430",
        },
        accent: {
          DEFAULT: "#3b82f6",
          muted: "#2563eb",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59, 130, 246, 0.15), transparent)",
        "gradient-hero": "radial-gradient(ellipse 100% 80% at 50% 0%, rgba(59, 130, 246, 0.12), transparent 55%)",
      },
    },
  },
  plugins: [],
};

export default config;
