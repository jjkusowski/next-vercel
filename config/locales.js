const SUPPORTED_LOCALES = {
  AU: "en-au",
  US: "en-us",
  BR: "pt-br",
  CA: "en-ca",
  CAF: "fr-ca",
  CN: "zh-cn",
  FR: "fr-fr",
  DE: "de-de",
  HK: "zh-hk",
  IN: "hi-in",
  IT: "it-it",
  JP: "ja-jp",
  KR: "ko-kr",
  MX: "es-mx",
  ES: "es-es",
  UK: "en-gb",
};

const locales = Object.values(SUPPORTED_LOCALES);

module.exports = {
  locales,
  defaultLocale: SUPPORTED_LOCALES.US,
  domains: [
    {
      domain: "example.com",
      defaultLocale: SUPPORTED_LOCALES.US,
    },
    {
      domain: "example.fr",
      defaultLocale: SUPPORTED_LOCALES.FR,
    },
  ],
};
