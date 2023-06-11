/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/*.html"],
  theme: {
    extend: {    
      colors: {
        'red': '#d51125',
        'blue': '#145a97',
        'darkBlue': '#002a5c',
      },
    },
    fontSize: {
      '10': '10px',
      '11': '11px',
      '12': '12px',
      '15': '15px',
      '16': '16px',
      '18': '18px',
      '20': '20px',
      '22': '22px',
      '26': '26px',
      '28': '28px',
      '32': '32px',
      '36': '36px',
      '38': '38px',
      '48': '48px',
    },
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'pc': '1024px',
      // => @media (min-width: 1024px) { ... }

      'laptop': '1280px',
      // => @media (min-width: 1280px) { ... }

      'desktop': '1550px',
      // => @media (min-width: 1550px) { ... }
    },
  },
  plugins: [],
}
