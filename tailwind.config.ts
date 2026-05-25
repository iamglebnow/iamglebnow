import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ── Typography ──────────────────────────────
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
      },
      fontSize: {
        h1: ["31px", { lineHeight: "1.1", fontWeight: "700" }],
        ui:  ["20px", { lineHeight: "1.4" }],
      },

      // ── Colors ──────────────────────────────────
      colors: {
        muted: "#888888",
        card:  "#f0f0f0",
      },

      // ── Backgrounds ─────────────────────────────
      backgroundImage: {
        "btn-primary":
          "linear-gradient(0.205turn, rgba(84,169,235,1) 0%, rgba(110,187,247,1) 100%)",
      },

      // ── Sizing ──────────────────────────────────
      height: {
        btn: "44px",
      },
    },
  },
  plugins: [],
};

export default config;
