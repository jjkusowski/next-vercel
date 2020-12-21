const isProd = process.env.NODE_ENV === "production";
const assetPrefix = "/2/wdc2/";

module.exports = {
  assetPrefix: isProd ? assetPrefix : "",
  // eslint-disable-next-line global-require
  i18n: require("./config/locales.js"),
  images: {
    domains: ["images.prismic.io"],
  },
};
