import { createIntl, createIntlCache, IntlShape } from "react-intl";
import messagesUS from "../content/en-US";
import messagesFR from "../content/fr-FR";

// don't need to add en/en-US since this will be our default messages
const localeMessages = {
  "en-US": messagesUS,
  "fr-FR": messagesFR,
};

const cache = createIntlCache();

let intl;

export const setIntl = (locale: string): IntlShape => {
  if (!locale) {
    throw new Error("'setIntl' needs to be provided a locale");
  }

  intl = createIntl(
    {
      locale,
      messages: localeMessages[locale],
    },
    cache
  );

  return intl;
};

export const getIntl = (locale: string): IntlShape => {
  if (!intl) {
    setIntl(locale);
  }

  return intl;
};
