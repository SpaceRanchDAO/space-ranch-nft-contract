module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          red: "#D70037",
          orange: "#C7A161",
          blue: {
            dark: "#0A3249",
            light: "#0D607E",
            light2: "#0E95B3",
            light3: "#32C5CF"
          },
          white: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
