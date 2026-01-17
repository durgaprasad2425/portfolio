module.exports = {
  content: [
    "./index.html",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],

  theme: {
    extend: {
      colors: {
        slate: {
          950: '#020617',
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
        },
        amber: {
          400: '#fbbf24',
          500: '#f59e0b',
        },
        orange: {
          400: '#fb923c',
          500: '#f97316',
        }
      }
    },
  },

  plugins: [],
}
