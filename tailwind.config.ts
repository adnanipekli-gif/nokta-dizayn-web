import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#071B34',
          900: '#04101F',
          700: '#0E2647',
          500: '#1A3A6B',
        },
        blue: {
          DEFAULT: '#0A6DB8',
          hover: '#0858A0',
        },
        cyan: {
          DEFAULT: '#11B5FF',
        },
        'gray-bg': '#E9EEF3',
        metal: '#8D99A8',
        'off-white': '#F7F9FC',
        border: '#D9E1EA',
      },
      fontFamily: {
        sora: ['var(--font-sora)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(7, 27, 52, 0.04), 0 8px 24px rgba(7, 27, 52, 0.06)',
        'card-hover':
          '0 4px 12px rgba(7, 27, 52, 0.06), 0 16px 40px rgba(10, 109, 184, 0.12)',
        elevated: '0 24px 64px rgba(7, 27, 52, 0.12)',
      },
      backgroundImage: {
        'blueprint-grid':
          'linear-gradient(rgba(10, 109, 184, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(10, 109, 184, 0.08) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-40': '40px 40px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'count-up': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'light-sweep': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        'drift-right': {
          '0%': { transform: 'translateX(-5%)' },
          '100%': { transform: 'translateX(5%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'light-sweep': 'light-sweep 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
        standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
