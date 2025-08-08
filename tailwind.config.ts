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
  'primary-dark': '#1e120b',
  'sub-background': '#3c2b1e',
  'sub-alt-1': '#e98c1f',
  'sub-alt-2': '#88c043',
  'primary-orange': '#e98c1f',
  'secondary-green': '#88c043',
  'text-white': '#fff8e6',
  'text-gray': '#d6c3b4',
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
  'hero-gradient': 'linear-gradient(135deg, #1e120b 0%, rgba(60, 43, 30, 0.3) 100%)',
  'card-gradient': 'linear-gradient(135deg, rgba(60, 43, 30, 0.2) 0%, rgba(60, 43, 30, 0.1) 100%)',
},
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
