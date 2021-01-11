import { GetStaticProps } from "next";
import { createElement } from "react";
import Prismic from "prismic-javascript";
import { Elements } from "prismic-reactjs";
import Head from "next/head";
import { defineMessages, useIntl } from "react-intl";
import PageContext from "../state/PageContext";
import Layout from "../components/Layout";
import Text from "../components/Text";

// TODO: split this file into components

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const restQuery = Prismic.getApi("https://webex.cdn.prismic.io/api/v2").then(
    async (api) => {
      const doc = await api.getByUID("info", "accessibility", {
        lang: locale.toLowerCase(),
      });

      return doc.data;
    }
  );

  const data = await restQuery;

  return {
    props: {
      data,
    },
  };
};

const Hero = (props) => {
  const { primary } = props;
  const { image, text } = primary;
  const { dimensions, alt, url } = image;
  const { width, height } = dimensions;

  const h1s = text.filter((textObj) => textObj.type === "heading1");
  const body = text.filter((textObj) => textObj.type !== "heading1");

  const htmlSerializer = (type, _element, _content, children, key) => {
    switch (type) {
      case Elements.heading1: {
        return createElement(
          "h1",
          { className: "leading-tight", key },
          children
        );
      }
      default:
        return null;
    }
  };

  return (
    <section className="pt-0 mt-0 md:container lg:relative lg:mb-10">
      <img src={url} alt={alt} height={height} width={width} />
      <div className="relative grid gap-6 p-10 bg-white md:container md:mr-0 md:-mt-12 lg:absolute lg:bottom-0 lg:right-0 lg:px-16 lg:w-1/2 lg:-m-8 lg:h-full lg:mr-8">
        <div>
          <Text htmlSerializer={htmlSerializer}>{h1s}</Text>
        </div>
        <Text htmlSerializer={htmlSerializer}>{body}</Text>
      </div>
    </section>
  );
};

const Contents = (props) => {
  const { primary, items } = props;
  const { text } = primary;

  return (
    <section className="container py-10">
      <div className="p-4 space-y-6 bg-white md:grid md:grid-cols-4">
        <Text className="w-3/4 leading-tight md:w-full md:col-span-1 md:p-6">
          {text}
        </Text>
        <ul className="block md:col-span-3">
          {items.map((item) => (
            <li className="flex" key={item.target_id}>
              <div className="self-center w-6 h-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <a
                className="flex justify-between flex-grow py-4 ml-6 no-underline border-b"
                href={`#${item.target_id}`}
              >
                <Text>{item.text}</Text>
                <div className="self-center w-6 h-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 17l-4 4m0 0l-4-4m4 4V3"
                    />
                  </svg>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const BlockSplit = (props) => {
  const { primary, slice_label } = props;
  const { image, text, color, id } = primary;
  const { dimensions, alt, url } = image;
  const { width, height } = dimensions;

  const isRightBlock = slice_label === "image_right";

  const textOrderClass = isRightBlock ? "md:order-1" : "md:order-2";
  const imageOrderClass = !isRightBlock ? "md:order-1" : "md:order-2";

  return (
    <section style={{ backgroundColor: color }}>
      <span className="anchor" id={id} />
      <div className="flex flex-col pb-10 md:pt-10 lg:py-24 md:container md:flex-row">
        <img
          className={`${imageOrderClass} md:w-1/2 object-contain`}
          src={url}
          alt={alt}
          height={height}
          width={width}
        />
        <div
          className={`${textOrderClass} flex flex-col space-y-4 justify-center p-8 md:pt-0`}
        >
          <Text>{text}</Text>
        </div>
      </div>
    </section>
  );
};

const BlockBottom = (props) => {
  const { primary } = props;
  const { image, text, color, id } = primary;
  const { dimensions, alt, url } = image;
  const { width, height } = dimensions;

  const textColor = color === "#122933" ? "text-white" : "";

  return (
    <section style={{ backgroundColor: color }}>
      <div className="container py-16 space-y-10 text-center">
        <span className="anchor" id={id} />
        <div className="container mt-6 space-y-4">
          <Text className={textColor}>{text}</Text>
        </div>
        <img src={url} alt={alt} height={height} width={width} />
      </div>
    </section>
  );
};

const Block = (props) => {
  const { slice_label } = props;

  const blockMap = {
    image_bottom: BlockBottom,
    image_right: BlockSplit,
    image_left: BlockSplit,
  };

  const Component = blockMap[slice_label];

  return <Component {...props} />;
};

const Help = (props) => {
  const { primary } = props;
  const { text, url, label, color, id } = primary;

  return (
    <section className="py-10 text-center" style={{ backgroundColor: color }}>
      <span className="anchor" id={id} />
      <div className="container space-y-4">
        <Text>{text}</Text>
        <a
          href={url.url}
          target={url.target}
          className="inline-block px-8 py-4 text-lg no-underline btn-blue"
        >
          {label[0].text}
        </a>
      </div>
    </section>
  );
};

const NullComp = () => null;

const componentMap = {
  hero: Hero,
  table_of_contents: Contents,
  block: Block,
  help: Help,
  null: NullComp,
};

const getComponent = (type) => componentMap[type] || componentMap.null;

// TODO: decouple Body from data parsing
// TODO: use custom hook to retrieve data
const Body = ({ data }) => {
  const body = data.map((component) => {
    const { slice_type } = component;
    const key = component?.primary?.id || slice_type;
    const Component = getComponent(slice_type);

    return <Component key={key} {...component} />;
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
const Accessibility = ({ data }): JSX.Element => {
  const { formatMessage } = useIntl();
  const title = formatMessage(messages.title);
  const description = formatMessage(messages.description);
  return (
    <PageContext.Provider value={data}>
      <Head>
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
        {/* <link rel="canonical" href="https://www.webex.com/accessibility.html" /> */}
        <title>{title}</title>
      </Head>
      <Layout>
        <Body data={data.body} />
      </Layout>
    </PageContext.Provider>
  );
};

export default Accessibility;
