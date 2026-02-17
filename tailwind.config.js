
/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: 'var(--primary-600)',
          700: 'var(--primary-700)',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
        dark: {
          bg: '#020617', // Slate 950
          card: '#0f172a', // Slate 900
          border: '#1e293b', // Slate 800
          text: '#f8fafc', // Slate 50
        },
        customPurple: '#8F52DD'
      },
      animation: {
        'bounce-500': 'bounce 0.5s',
        'slide-in-left': 'slideInLeft 1s ease',
        'slide-in-right': 'slideInRight 1s ease',
        'slide-in-up': 'slideInUp 1s ease',
        'slide-in-down': 'slideInDown 1s ease',
      },
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      screens: {
        'mobile': { 'min': '320px', 'max': '480px' },
        'tablet': { 'min': '600px', 'max': '1024px' },
        'laptop': { 'min': '1280px', 'max': '1440px' },
        'desktop': { 'min': '1440px', 'max': '1535px' },
      },
      fontFamily: {
        cursive: ['cursive']
      }
    }
  },
  plugins: [
    require('daisyui'),
    function ({ addUtilities, theme }) {
      const newUtilities = {
        '.text-stroke-1': {
          '-webkit-text-stroke-width': '1px',
        },
        '.text-stroke-primary': {
          '-webkit-text-stroke-color': 'var(--primary-600)',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}