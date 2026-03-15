/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#16163F',
          light: '#1E1E5A',
          dark: '#0D0D28',
          deep: '#0A0A2E',
        },
        sky: {
          DEFAULT: '#0EA5E9',
          light: '#38BDF8',
          dark: '#0369A1',
          deep: '#075985',
          tint: '#F0F9FF',
          mist: '#BAE6FD',
        },
        amber: {
          DEFAULT: '#D97706',
          light: '#F59E0B',
          dark: '#B45309',
        },
        cream: '#FAFAF9',
        warmgray: '#78716C',
        forest: {
          DEFAULT: '#1B5E20',
          dark: '#0A3D0D',
          mid: '#2E7D32',
        },
        greenlight: '#E8F5E9',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['Outfit', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
        'spin-slow': 'spin 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      boxShadow: {
        'editorial': '0 1px 0 rgba(22, 22, 63, 0.06)',
        'card': '0 2px 20px rgba(22, 22, 63, 0.06)',
        'card-hover': '0 16px 48px rgba(22, 22, 63, 0.12)',
        'amber-glow': '0 8px 32px rgba(217, 119, 6, 0.25)',
        'navy-glow': '0 8px 32px rgba(22, 22, 63, 0.3)',
        'sky-glow': '0 8px 32px rgba(14, 165, 233, 0.2)',
      },
    },
  },
  plugins: [],
}
