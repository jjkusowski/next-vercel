
import { RawIntlProvider } from "react-intl"
import { withNextRouter } from 'storybook-addon-next-router';
import { getIntl } from "../lib/intl";
import "../styles/index.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "centered",
}

const intl = getIntl("en-US");
export const decorators = [(Story) => <RawIntlProvider value={intl}><Story/></RawIntlProvider>, withNextRouter];