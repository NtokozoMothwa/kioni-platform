module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kioni': {
          'indigo': '#0E0E2C',
          'indigo-dark': '#0A0A1F',
          'indigo-light': '#1A1A3F',
          'gold': '#F3C623',
          'slate': '#3C3F53',
          'slate-light': '#4A4D63',
          'cyan': '#00E5FF',
          'green': '#00C88F',
          'terracotta': '#C96F48',
        }
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'jetbrains-mono': ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
