import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#18352D',
          deep: '#10251F',
          light: '#25493D',
          pale: '#E7EDE8',
        },
        gold: {
          DEFAULT: '#C5A46D',
          light: '#DDC69B',
          dark: '#71562E',
        },
        ivory: '#F7F3EA',
        cream: '#EEE7D8',
        burgundy: '#702E37',
        charcoal: '#282824',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '70ch',
      },
      boxShadow: {
        soft: '0 12px 40px -18px rgba(16, 37, 31, 0.28)',
        card: '0 6px 24px -12px rgba(16, 37, 31, 0.25)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.5s ease-out both',
        fadeIn: 'fadeIn 0.4s ease-out both',
      },
    },
  },
  plugins: [],
};

export default config;
