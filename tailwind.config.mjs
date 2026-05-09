/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Paleta inspirada en el logo: fuego sobre negro
        ember: {
          50: '#FFF8E1',
          100: '#FFECB3',
          200: '#FFE082',
          300: '#FFD54F',
          400: '#FFC107',
          500: '#FFA000',
          600: '#FF6F00',
          700: '#E65100',
          800: '#BF360C',
          900: '#5D1A00',
        },
        coal: {
          50: '#F5F5F5',
          100: '#1F1B17',
          200: '#1A1714',
          300: '#141210',
          400: '#0F0D0B',
          500: '#0A0908',
          600: '#070605',
          700: '#050403',
          800: '#020201',
          900: '#000000',
        },
        flame: {
          DEFAULT: '#FF6B1A',
          glow: '#FFB627',
          deep: '#C8390A',
        },
      },
      fontFamily: {
        display: ['"Cinzel"', '"Cormorant Garamond"', 'serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'fire-radial': 'radial-gradient(ellipse at top, rgba(255,140,30,0.18) 0%, rgba(0,0,0,0) 60%), radial-gradient(ellipse at bottom, rgba(200,57,10,0.15) 0%, rgba(0,0,0,0) 65%)',
        'ember-gradient': 'linear-gradient(180deg, #0A0908 0%, #1A0F08 50%, #0A0908 100%)',
        'flame-gradient': 'linear-gradient(180deg, #FFB627 0%, #FF6B1A 45%, #C8390A 100%)',
      },
      animation: {
        flicker: 'flicker 2.6s infinite alternate',
        emberRise: 'emberRise 8s linear infinite',
        glowPulse: 'glowPulse 4s ease-in-out infinite',
      },
      keyframes: {
        flicker: {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': {
            textShadow:
              '0 0 4px #FFB627, 0 0 11px #FF8A1A, 0 0 19px #FF6B1A, 0 0 40px #C8390A, 0 0 80px #C8390A',
            opacity: '1',
          },
          '20%, 24%, 55%': { textShadow: 'none', opacity: '0.85' },
        },
        emberRise: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0' },
          '15%': { opacity: '1' },
          '100%': { transform: 'translateY(-120vh) scale(0.3)', opacity: '0' },
        },
        glowPulse: {
          '0%, 100%': { filter: 'drop-shadow(0 0 12px rgba(255,140,30,0.55)) drop-shadow(0 0 30px rgba(200,57,10,0.4))' },
          '50%': { filter: 'drop-shadow(0 0 28px rgba(255,180,40,0.85)) drop-shadow(0 0 60px rgba(255,107,26,0.6))' },
        },
      },
    },
  },
  plugins: [],
};
