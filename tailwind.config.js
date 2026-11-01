/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FAF8F5',
          100: '#F5F1E8',
          200: '#EBE4D5',
          300: '#DFD5C0',
          400: '#CFC0A3',
          500: '#BEAC88',
        },
        navy: {
          50: '#F0F4F8',
          100: '#D9E2EC',
          200: '#BCCCDC',
          300: '#9FB3C8',
          400: '#829AB1',
          500: '#627D98',
          600: '#486581',
          700: '#334E68',
          800: '#243B53',
          850: '#15243B',
          900: '#0E1A2F',
          950: '#070E1A',
        },
        violetAccent: {
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
        },
        blueAccent: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'monospace']
      },
      boxShadow: {
        'editorial': '0 4px 20px -2px rgba(10, 17, 40, 0.05), 0 2px 6px -1px rgba(10, 17, 40, 0.03)',
        'editorial-hover': '0 12px 30px -4px rgba(10, 17, 40, 0.1), 0 4px 12px -2px rgba(10, 17, 40, 0.04)',
        'glow-violet': '0 0 25px -5px rgba(124, 58, 237, 0.25)',
        'glow-blue': '0 0 25px -5px rgba(37, 99, 235, 0.25)',
      }
    },
  },
  plugins: [],
}

