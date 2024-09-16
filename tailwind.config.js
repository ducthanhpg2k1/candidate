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
        danger: 'var(--danger)',
        primary: 'var(--primary)',
        black: 'var(--black)',
        gray: 'var(--gray)',
        'gray-100': 'var(--gray)',
        disable: 'var(--disable)',
        'disable-01': 'var(--disable-01)',
      },
    },
  },
  transitionTimingFunction: {
    expo: 'cubic-bezier(0.5, 1.5, 0.8, 1)',
    'expo-in': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
    'expo-out': 'cubic-bezier(0.19, 1, 0.22, 1)',
  },
  keyframes: {
    skeleton: {
      to: {
        transform: 'translateX(100%)',
      },
    },
    fadeIn: {
      '0%': { opacity: '0', transform: 'translateY(20px)' },
      '100%': { opacity: '1', transform: 'translateY(0)' },
    },
    tableRow: {
      from: {
        opacity: '0%',
        transform: 'translateY(1rem) scaleY(110%)',
      },
      to: {
        opacity: '100%',
        transform: 'translateY(0)',
      },
    },
  },
  animation: {
    tableRow: 'tableRow 0.3s forwards',
    fadeIn: 'fadeIn 0.5s ease-out',
    // skeleton: "skeleton 2s infinite",
  },
  darkMode: 'class',
  plugins: [nextui()],
};
