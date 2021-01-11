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
