import Prismic from "prismic-javascript";
import Head from "next/head";
import { defineMessages, useIntl } from "react-intl";
import { getImage } from "@plaiceholder/next";
import { getBase64 } from "@plaiceholder/base64";
import PageContext from "../state/PageContext";
import Layout from "../components/Layout";
import InPageMenu from "../components/InPageMenu";
import NullComp from "../components/Null";
import {
  PrismicPage,
  PrismicPageStaticProps,
  SliceComponentsMap,
  SliceParentComponent,
} from "../common/interfaces";
import Hero from "../components/Hero";
import Block from "../components/Block";
import Help from "../components/Help";
import usePrismicPageData from "../hooks/usePrismicPageData";

export const getStaticProps: PrismicPageStaticProps = async (context) => {
  const { locale, preview, previewData } = context;
  const ref = preview ? previewData.ref : null;
  const restQuery = Prismic.getApi("https://webex.cdn.prismic.io/api/v2").then(
    async (api) => {
      const doc = await api.getByUID("info", "accessibility", {
        lang: locale.toLowerCase(),
        ref,
      });

      return doc;
    }
  );

  const doc = await restQuery;

  // (hopefully) temporary hack to speed up LCP. Replace with next/image "placeholder" property once released https://github.com/vercel/next.js/issues/18858
  const imgSrc = "/accessibility-hero.webp";
  const img = await getImage(imgSrc);
  const imgBase64 = await getBase64(img);

  const hero = doc.data.body.find(
    (component) => component.slice_type === "hero"
  );
  hero.imgBase64 = imgBase64;

  return {
    props: {
      data: doc,
    },
  };
};

const componentMap: SliceComponentsMap = {
  hero: Hero,
  table_of_contents: InPageMenu,
  block: Block,
  help: Help,
  null: NullComp,
};

const getComponent = (type: string): SliceParentComponent =>
  componentMap[type] || componentMap.null;

const Body = () => {
  const pageData = usePrismicPageData();

  const slices = pageData?.data?.body;
  const pageType = pageData.type;

  const body = slices.map((component) => {
    const { slice_type } = component;
    const key = component?.primary?.id || slice_type;
    const Component = getComponent(slice_type);

    return <Component key={key} {...component} pageType={pageType} />;
  });

  return <>{body}</>;
};

const messages = defineMessages({
  title: {
    id: "Accessibility.title",
    defaultMessage:
      "Webex for hard of hearing users and sign language interpreters",
  },
  description: {
    id: "Accessibility.description",
    defaultMessage:
      "Make your meetings more accessible with these tips on creating the best experience for sign language interpreters and collaborating with hearing-impaired attendees.",
  },
});

// get data returned from getStaticProps, pass to global store (PageContext.Provider)
const Accessibility: PrismicPage = ({ data }) => {
  const { formatMessage } = useIntl();
  // TODO: get title and description from CMS
  const title = formatMessage(messages.title);
  const description = formatMessage(messages.description);
  return (
    <PageContext.Provider value={data}>
      <Head>
        {/* TODO: update all URLs */}
        <meta name="description" content={description} />
        <meta name="title" content={title} />
        <meta
          name="og:url"
          content="https://www.webex.com/accessibility.html"
        />
        <meta name="og:title" content={description} />
        <meta
          property="og:image"
          content="https://www.webex.com/content/dam/wbx/us/images/covid/hearing-impaired/Webex_Sign_Language_HERO.png"
        />
        <meta property="og:site_name" content="Webex" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://www.webex.com/accessibility.html"
        />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="https://www.webex.com/content/dam/wbx/us/images/covid/hearing-impaired/Webex_Sign_Language_HERO.png"
        />
        {/* TODO: add canonical link.  Needs to be based on environment as domain has to match */}
        {/* <link rel="canonical" href="https://www.webex.com/accessibility.html" /> */}
        <title>{title}</title>
      </Head>
      <Layout>
        <Body />
      </Layout>
    </PageContext.Provider>
  );
};

export default Accessibility;
