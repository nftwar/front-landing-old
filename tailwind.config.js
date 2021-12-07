module.exports = {
  mode: "jit",
  purge: [
      "./pages/**/*.{ts,tsx}",
      "./containers/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      spacing: {
        "7.5": "1.875rem",
        "15": "3.75rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
