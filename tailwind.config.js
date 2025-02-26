/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./pages/**/*.{js,jsx,ts,tsx,md,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e8f8e8",
          100: "#d1f1d1",
          200: "#a3e3a3",
          300: "#75d575",
          400: "#47c847",
          500: "#81c869",
          600: "#2b7a2b",
          700: "#235c23",
          800: "#1a3d1a",
          900: "#121f12",
        },
        theme: {
          bg: {
            primary: "var(--bg-primary)",
            secondary: "var(--bg-secondary)",
          },
          text: {
            primary: "var(--text-primary)",
            secondary: "var(--text-secondary)",
          },
          border: "var(--border-color)",
        },
        dark: {
          DEFAULT: "#1a1a1a",
          secondary: "#242424",
          tertiary: "#2a2a2a",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
