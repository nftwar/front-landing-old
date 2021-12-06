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
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
