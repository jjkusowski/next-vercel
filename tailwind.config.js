// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: [
      "./components/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      safelist: {
        greedy: [/:grid/, /webex/, /circle/],
      },
    },
  },
  theme: {
    backgroundImage: () => ({
      circle: "url(../public/circle.svg)",
      "devices-banner":
        "url(https://www.webex.com/content/dam/wbx/us/images/hp/header/devices-banner.jpg)",
      "devices-banner-overlay":
        "url(https://www.webex.com/content/dam/wbx/us/images/hp/header/overlay.svg)",
    }),
    container: {
      padding: "2rem",
      center: true,
    },
    extend: {
      fontSize: {
        xs: ".82rem",
      },
      fontFamily: {
        sans: ["CiscoSansTT", ...defaultTheme.fontFamily.sans],
      },
      transitionProperty: {
        height: "height",
      },
      colors: {
        "webex-title": "#6218CA",
        "webex-gray": "#00000080",
        "webex-purple": "#D541D8",
        "webex-resources": "#FF3D67",
        "webex-gold": "#ffb400",
        "webex-green": "#30d557",
        "webex-dark-blue": "#03688E",
        "accent-1": "#333",
        brand: {
          footer: "#121212",
        },
        blue: {
          DEFAULT: "#01bceb",
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
