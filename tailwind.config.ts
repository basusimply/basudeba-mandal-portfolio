import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#fafafa",
          elevated: "#ffffff",
          border: "#e5e7eb",
          muted: "#f3f4f6",
        },
        ink: {
          DEFAULT: "#0f172a",
          muted: "#64748b",
          subtle: "#94a3b8",
        },
        accent: {
          DEFAULT: "#0d9488",
          hover: "#0f766e",
          soft: "#ccfbf1",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        card: "0 1px 3px 0 rgb(15 23 42 / 0.06), 0 1px 2px -1px rgb(15 23 42 / 0.06)",
        "card-hover":
          "0 10px 40px -10px rgb(15 23 42 / 0.12), 0 4px 6px -4px rgb(15 23 42 / 0.06)",
      },
    },
  },
  plugins: [typography],
};

export default config;
