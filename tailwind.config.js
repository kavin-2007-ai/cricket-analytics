/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cricket: {
          pitch: '#080E1A',
          stadium: '#0F172A',
          card: '#1E293B',
          cardHover: '#283548',
          neonGreen: '#00F59B',
          neonGold: '#FBBF24',
          neonBlue: '#38BDF8',
          neonRed: '#F43F5E',
          accent: '#6366F1'
        }
      },
      animation: {
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 10px rgba(0, 245, 155, 0.3)' },
          '100%': { boxShadow: '0 0 25px rgba(0, 245, 155, 0.8)' },
        }
      }
    },
  },
  plugins: [],
}
