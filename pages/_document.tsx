import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import { initial } from "lodash";
import Analytics from "../components/Analytics";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta name="author" content="Webex" />
          <meta name="publisher" content="Cisco" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary" key="twcard" />
          <meta name="twitter:creator" content="@Webex" key="twhandle" />
          <link
            rel="chrome-webstore-item"
            href="https://chrome.google.com/webstore/detail/cisco-webex-scheduler/ankblejcdieljecjfagjeoelaedaoaka"
          />
          <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
          <meta name="keywords" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="X-UA-Compatible" content="IE=edge,chrome=1" />
          <Analytics />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
