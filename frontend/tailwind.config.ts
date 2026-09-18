import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  corePlugins: {
    container: false,
  },
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      bg: "var(--bg)",
      fg: "var(--fg)",
      muted: "var(--muted)",
      line: "var(--line)",
      surface: "var(--surface)",
      overlay: "var(--overlay)",
      "on-photo": "var(--on-photo)",
      black: "#0a0a0a",
      white: "#ffffff",
    },
    borderRadius: {
      none: "0",
      DEFAULT: "0",
      full: "9999px",
    },
    boxShadow: {
      none: "none",
    },
    fontFamily: {
      sans: ["var(--font-switzer)", "system-ui", "sans-serif"],
      serif: ["var(--font-instrument-serif)", "Georgia", "serif"],
    },
    fontSize: {
      display: [
        "clamp(2.75rem, 6vw, 4.5rem)",
        { lineHeight: "0.85", letterSpacing: "-0.04em", fontWeight: "400" },
      ],
      quote: [
        "clamp(1.75rem, 4vw, 3.625rem)",
        { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "400" },
      ],
      h2: [
        "clamp(2rem, 3.2vw, 2.5rem)",
        { lineHeight: "1", letterSpacing: "-0.03em", fontWeight: "500" },
      ],
      lead: [
        "clamp(1.375rem, 2.2vw, 1.625rem)",
        { lineHeight: "1.15", letterSpacing: "-0.03em", fontWeight: "400" },
      ],
      body: ["1.125rem", { lineHeight: "1.4", letterSpacing: "0" }],
      caption: ["0.9375rem", { lineHeight: "1.25", letterSpacing: "-0.02em" }],
      meta: ["0.875rem", { lineHeight: "1.17", letterSpacing: "-0.02em" }],
      label: [
        "0.8125rem",
        { lineHeight: "1.17", letterSpacing: "0.02em", fontWeight: "500" },
      ],
    },
    extend: {
      spacing: {
        gutter: "20px",
        30: "7.5rem",
        40: "10rem",
        55: "13.75rem",
      },
      aspectRatio: {
        portrait: "4 / 5",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
