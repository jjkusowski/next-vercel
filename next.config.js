const isProd = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix: isProd ? "/2/wdc2/" : "",
  // eslint-disable-next-line global-require
  // i18n: require("./config/locales.js"),
  images: {
    domains: ["images.prismic.io"],
  },
};
