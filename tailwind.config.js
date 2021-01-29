// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

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
      fontFamily: {
        sans: ["CiscoSansTT", ...defaultTheme.fontFamily.sans],
      },
      transitionProperty: {
        height: "height",
      },
      colors: {
        "webex-title": "#6218CA",
        "webex-gray": "#00000080",
        "accent-1": "#333",
        brand: {
          footer: "#121212",
        },
        blue: {
          default: "#01bceb",
          darker: "#005073",
        },
      },
    },
  },
  variants: {
    extend: {
      textColor: ["group-hover", "hover"],
      backgroundColor: ["group-hover", "disabled", "hover"],
      scale: ["group-hover"],
      transitionProperty: ["hover", "group-hover"],
      borderWidth: ["last"],
    },
  },
  plugins: [],
};
