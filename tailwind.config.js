/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#0c8c81',
          secondary: '#fcbe76',
          accent: '#f9392f',
          neutral: '#161922',
          'base-100': '#353D45',
          info: '#88AFF1',
          success: '#68E3BC',
          warning: '#F7BA64',
          error: '#F23A78',
        },
      },
      'pastel',
      'halloween',
    ],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
