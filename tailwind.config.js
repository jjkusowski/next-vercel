module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: () => ({
      circle: "url(../public/circle.svg)",
    }),
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
  variants: {
    textColor: ["group-hover", "hover"],
    backgroundColor: ["group-hover", "disabled", "hover"],
    scale: ["group-hover"],
    transitionProperty: ["hover", "group-hover"],
  },
  plugins: [],
};
