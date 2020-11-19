module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: "2rem",
      center: true,
    },
    extend: {
      colors: {
        "accent-1": "#333",
        blue: {
          default: "#01bceb",
          darker: "#005073",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
