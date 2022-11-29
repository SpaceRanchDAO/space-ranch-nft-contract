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
          red: {
            dark: "#D70037",
            light: "#FF0035",
          },
          blue: {
            dark: "#0C2586",
            light: "#0035FF",
          },
          white: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
