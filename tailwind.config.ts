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
        'sub-alt-1': '#c4a081',
        'sub-alt-2': '#4a4a4a',
        'primary-orange': '#f48819',
        'secondary-green': '#85b543',
        'text-white': '#ffffff',
        'text-gray': '#e5e7eb',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
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
        'hero-gradient': 'linear-gradient(135deg, #140c04 0%, rgba(155, 116, 75, 0.3) 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(155, 116, 75, 0.2) 0%, rgba(155, 116, 75, 0.1) 100%)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;