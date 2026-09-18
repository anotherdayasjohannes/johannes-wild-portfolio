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
      surface: "var(--surface)",
      ink: "var(--ink)",
      "ink-2": "var(--ink-2)",
      line: "var(--line)",
      pink: "var(--pink)",
      "pink-text": "var(--pink-text)",
      orange: "var(--orange)",
      "orange-text": "var(--orange-text)",
      signal: "var(--signal)",
      blue: "var(--blue)",
      "blue-text": "var(--blue-text)",
    },
    borderRadius: {
      none: "0",
      DEFAULT: "0",
    },
    boxShadow: {
      none: "none",
    },
    fontFamily: {
      sans: ["var(--font-sans)", "system-ui", "sans-serif"],
    },
    fontWeight: {
      air: "100",
      thin: "200",
      light: "300",
      retina: "350",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      black: "800",
      super: "900",
    },
    fontSize: {
      ui: ["var(--fs-ui)", { lineHeight: "1" }],
      body: ["var(--fs-body)", { lineHeight: "1.3" }],
      lead: ["var(--fs-lead)", { lineHeight: "1.3" }],
      mark: ["var(--fs-mark)", { lineHeight: "0.95", letterSpacing: "-0.01em" }],
      display: ["var(--fs-display)", { lineHeight: "0.92", letterSpacing: "-0.015em" }],
      wild: ["var(--fs-wild)", { lineHeight: "0.8", letterSpacing: "-0.02em" }],
    },
    lineHeight: {
      tight: "1",
      read: "1.3",
      list: "1.5",
    },
    extend: {
      spacing: {
        gutter: "var(--gutter)",
        step: "3.75rem",
        section: "8.75rem",
        footer: "10rem",
      },
      gridTemplateColumns: {
        12: "repeat(12, minmax(0, 1fr))",
      },
      minHeight: {
        hero: "820px",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
