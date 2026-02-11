/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Semantic color names that map to CSS variables so components
        // can keep using utility classes like bg-cp-bg, text-cp-text, etc.
        cp: {
          bg: 'var(--cp-bg)',
          surface: 'var(--cp-surface)',
          text: 'var(--cp-text)',
          accent: 'var(--cp-accent)',
          accent2: 'var(--cp-accent2)',
          muted: 'var(--cp-muted)',
        },
        // Keep 'brand' alias for backwards compatibility with existing classes
        brand: {
          dark: 'var(--cp-bg)',
          darker: 'var(--cp-surface)',
          primary: 'var(--cp-accent)',
          secondary: 'var(--cp-accent2)',
          soft: 'var(--cp-muted)',
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
