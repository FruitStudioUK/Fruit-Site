import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#140c04',
        'sub-background': '#9b744b',
        'sub-alt-1': '#f48819',
        'sub-alt-2': '#85b543',
        'primary-orange': '#f48819',
        'secondary-green': '#85b543',
        'text-white': '#fff8e6',
        'text-gray': '#d6c3b4',
        'text-dark': '#140c04',
        'text-lightdark': '#19120A',
        'text-lightbrown': '#edcdac',
      },
      fontFamily: {
        nunito: ['var(--font-nunito)', 'sans-serif'], // changed from inter → nunito
        baloo2: ['var(--font-baloo2)', 'cursive'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'hero-gradient': '#140c04', // or your solid background color
        'card-gradient': '#9b744b',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
