/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react';

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {},
      colors: {
        primary: 'var(--primary)',
        black: 'var(--black)',
        gray: 'var(--gray)',
        'gray-100': 'var(--gray)',
        disable: 'var(--disable)',
        'disable-01': 'var(--disable-01)',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
