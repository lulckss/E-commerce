/** @type {import('tailwindcss').Config} */
module.exports = {

  darkMode: 'class', // Necessário para o funcionamento com next-themes
  theme: {
    extend: {},
  },
  plugins: [],
  
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
      }
    }
  },

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",

    },
    fontFamily: {
      primary: "var(--font-roboto)",
    },
    extend: {
      colors: {
        primary: "#737373",
        accent: {
          DEFAULT: "#3498db",
          hover: "#ffffff",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
