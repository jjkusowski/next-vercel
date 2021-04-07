import { useRouter } from "next/router";
import { localeKeyLookup, localeLookupUnderscore } from "../config/locales";

interface ILocale {
  locale: string;
  locales: string[];
  localeKey: string;
  localeUnderscore: string;
}

const useCurrentLocale = (): ILocale => {
  const { locale, locales } = useRouter();
  const localeKey = localeKeyLookup[locale];
  const localeUnderscore = localeLookupUnderscore[locale];

  return { locale, locales, localeKey, localeUnderscore };
};

export default useCurrentLocale;
