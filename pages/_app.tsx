import "../styles/index.css";
import { ApolloProvider } from "@apollo/client";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { RawIntlProvider } from "react-intl";
import { useApollo } from "../lib/apollo/apolloClient";
import { getIntl } from "../lib/intl";
import useCurrentLocale from "../hooks/useCurrentLocale";

const GTAG = "gtag";

interface IWebVitalsProps {
  name: string;
  label: string;
  value: number;
  id: string;
}

type WebVitals = (props: IWebVitalsProps) => void;

export const reportWebVitals: WebVitals = ({ name, label, value, id }) => {
  // Use `window.gtag` if you initialized Google Analytics as this example:
  // https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/pages/_document.js
  window?.[GTAG]("event", name, {
    event_category:
      label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
    value: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
    event_label: id, // id unique to current page load
    non_interaction: true, // avoids affecting bounce rate.
  });
};

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const apolloClient = useApollo(pageProps.initialApolloState);
  const { locale } = useCurrentLocale();
  const intl = getIntl(locale);

  return (
    <RawIntlProvider value={intl}>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </RawIntlProvider>
  );
}

export default MyApp;
