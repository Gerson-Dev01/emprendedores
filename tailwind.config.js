/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          500: '#3B82F6',
          600: '#2563EB', // Color principal (usado como DEFAULT)
          700: '#1D4ED8',
          DEFAULT: '#2563EB', // Mismo que 600 para consistencia
        },
        secondary: {
          500: '#8B5CF6',
          600: '#7C3AED',
          DEFAULT: '#8B5CF6', // Mismo que 500
        },
        // Colores adicionales que estabas usando en tus variables CSS
        accent: {
          DEFAULT: '#EC4899',
        },
        success: {
          DEFAULT: '#10B981',
        },
        warning: {
          DEFAULT: '#F59E0B',
        },
        danger: {
          DEFAULT: '#EF4444',
        }
      },
      // No necesitas ringColor aparte, se usa directamente de la paleta colors
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}