import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import Analytics from "../components/Analytics";
import { apiEndpoint } from "../prismic-configuration";

const prismicRepoName = /([a-zA-Z0-9-]+)?(\.cdn)?\.prismic\.io/.exec(
  apiEndpoint
)[1];

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
          <link rel="preconnect" href="https://app.snipcart.com" />
          <link rel="preconnect" href="https://cdn.snipcart.com" />
          <link
            rel="stylesheet"
            href="https://cdn.snipcart.com/themes/v3.0.30/default/snipcart.css"
          />
          <script
            async
            defer
            src={`//static.cdn.prismic.io/prismic.js?repo=${prismicRepoName}&new=true`}
          />
        </Head>
        <body>
          <div
            hidden
            className="absolute"
            id="snipcart"
            data-api-key="YTdhNjQ2ODItY2IwOC00ODlhLTkzMjktNjZhNGVmYTI0OWFjNjM3NDk4MDMxNDM0ODY4NzYw"
            data-config-modal-style="side"
          />
          <Main />
          <NextScript />
          <script
            async
            src="https://cdn.snipcart.com/themes/v3.0.30/default/snipcart.js"
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
