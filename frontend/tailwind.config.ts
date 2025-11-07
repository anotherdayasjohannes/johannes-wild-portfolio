import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Adobe Color Palette - UI/UX Theme
        brand: {
          primary: "#42628C",    // UI/UX-3 - Main brand
          secondary: "#253B59",  // UI/UX-2 - Supporting
          accent: "#5A7FB8",     // Lighter variant
        },
        dark: {
          bg: "#0D0D0D",         // UI/UX-5 - Main background
          surface: "#1A2A40",    // UI/UX-1 - Cards
          elevated: "#253B59",   // UI/UX-2 - Elevated
          border: "#253B59",     // UI/UX-2 - Borders
          text: {
            primary: "#F2F2F2",  // UI/UX-4
            secondary: "#D1D5DB",
            muted: "#9CA3AF",
          },
          accent: {
            primary: "#42628C",  // UI/UX-3
            secondary: "#5A7FB8",
          }
        }
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in': 'slideIn 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
