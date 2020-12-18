import { useRouter } from "next/router";

const useCurrentLocale = (): string => {
  const { locale } = useRouter();

  return locale;
};

export default useCurrentLocale;
