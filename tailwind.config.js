
/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:['class'],
  theme: {
    extend: {
  textStroked: {
        '1': '1px',
        // Add more sizes as needed
      },
      textStrokeColor: {
        purple: '#3B0764',
        lightpurple:'#7E22CE'
        // Add more colors as needed
      },
      colors: {
        
        customGradient: {
          'start': '#FFFFFF', 
          'via':'#8F52DD',
          'end': '#54288D',   // End color
        },
        customPurple:'#8F52DD'
    },
    animation:{
      'bounce-500':'bounce 0.5s',
      'slide-in-left': 'slideInLeft 1s ease', // Element slides in from the left side
        'slide-in-right': 'slideInRight 1s ease',
        'slide-in-up': 'slideInUp 1s ease', // Element slides in from the bottom
        'slide-in-down': 'slideInDown 1s ease', 
    },
    keyframes: {
      slideInLeft: {
        '0%': {
          transform: 'translateX(-100%)',
          opacity: '0',
        },
        '100%': {
          transform: 'translateX(0)',
          opacity: '1',
        },
      },
      slideInRight: {
        '0%': {
          transform: 'translateX(100%)',
          opacity: '0',
        },
        '100%': {
          transform: 'translateX(0)',
          opacity: '1',
        },
      },
      slideInUp: {
        '0%': {
          transform: 'translateY(100%)',
          opacity: '0',
        },
        '100%': {
          transform: 'translateY(0)',
          opacity: '1',
        },
      },
      slideInDown: {
        '0%': {
          transform: 'translateY(-100%)',
          opacity: '0',
        },
        '100%': {
          transform: 'translateY(0)',
          opacity: '1',
        },
      },
    },
    screens: {
      'mobile': {'min': '320px', 'max': '480px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'tablet': {'min': '600px', 'max': '1024px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'laptop': {'min': '1280px', 'max': '1440px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'desktop': {'min': '1440px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

    },
    fontFamily:{
      cursive:['cursive']
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
      '.text-stroke-purple-700': {
        '-webkit-text-stroke-color': theme('colors.purple.700'),
      },
       '.text-stroke-purple-950': {
        '-webkit-text-stroke-color': theme('colors.purple.950'),
      },
      // Add more utilities as needed
    };
    addUtilities(newUtilities, ['responsive', 'hover']);
  },
],
}