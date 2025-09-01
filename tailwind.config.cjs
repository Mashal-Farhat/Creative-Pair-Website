/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0b0d15',      // background (renamed to dark so class is bg-brand-dark)
          card: '#111423',      // card surface
          primary: '#6C5CE7',   // indigo-violet
          secondary: '#00D1FF', // cyan
          soft: '#9aa3b2',      // muted text
        },
      },
      boxShadow: {
        glass: '0 10px 40px rgba(0,0,0,0.35)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
