const SUPPORTED_LOCALES = {
  // AU: "en-AU",
  US: "en-US",
  // BR: "pt-BR",
  // CA: "en-CA",
  // CAF: "fr-CA",
  // CN: "zh-CN",
  // FR: "fr-FR",
  // DE: "de-DR",
  // HK: "zh-HK",
  // IN: "hi-IN",
  // IT: "it-IT",
  // JP: "ja-JP",
  // KR: "ko-KR",
  // MX: "es-MX",
  ES: "es-ES",
  // UK: "en-GB",
};

const locales = Object.values(SUPPORTED_LOCALES);

const localeKeys = Object.keys(SUPPORTED_LOCALES);

const localeKeyLookup = Object.entries(SUPPORTED_LOCALES).reduce(
  (localeMap, [localeKey, localeVal]) => {
    // eslint-disable-next-line no-param-reassign
    localeMap[localeVal] = localeKey;

    return localeMap;
  },
  {}
);

module.exports = {
  locales,
  localeKeys,
  localeKeyLookup,
  defaultLocale: SUPPORTED_LOCALES.US,
  domains: [
    {
      domain: "webex.com",
      defaultLocale: SUPPORTED_LOCALES.US,
    },
    // {
    //   domain: "webex.fr",
    //   defaultLocale: SUPPORTED_LOCALES.FR,
    // },
  ],
};
