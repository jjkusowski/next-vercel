import { useRouter } from "next/router";
import { localeKeyLookup } from "../config/locales";

interface ILocale {
  locale: string;
  locales: string[];
  localeKey: string;
}

const useCurrentLocale = (): ILocale => {
  const { locale, locales } = useRouter();
  const localeKey = localeKeyLookup[locale];

  return { locale, locales, localeKey };
};

export default useCurrentLocale;
