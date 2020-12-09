import { GetStaticProps } from "next";
import React from "react";
import Prismic from "prismic-javascript";
import { Elements } from "prismic-reactjs";
import { getLayoutData } from "../data/layout";
import PageContext from "../state/PageContext";
import Layout from "../components/Layout";
import Text from "../components/Text";

export const getStaticProps: GetStaticProps = async () => {
  const restQuery = Prismic.getApi("https://webex.cdn.prismic.io/api/v2").then(
    async (api) => {
      const doc = await api.getByUID("info", "accessibility");

      return doc.data;
    }
  );

  const [apolloClient, data] = await Promise.all([getLayoutData(), restQuery]);

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      data,
    },
  };
};

const Hero = (props) => {
  const { primary } = props;
  const { image, text } = primary;
  const { dimensions, alt, url } = image;
  const { width, height } = dimensions;

  const htmlSerializer = (type, _element, _content, children, key) => {
    switch (type) {
      case Elements.heading1: {
        return React.createElement(
          "h1",
          { className: "leading-tight", key },
          children
        );
      }
      case Elements.heading3: {
        return React.createElement("h3", { className: "mt-12", key }, children);
      }
      case Elements.paragraph: {
        return React.createElement("p", { className: "mt-12", key }, children);
      }
      default:
        return null;
    }
  };

  return (
    <section className="mt-0 pt-0 md:container lg:relative lg:mb-10">
      <img src={url} alt={alt} height={height} width={width} />
      <div className="relative p-10 md:container md:mr-0 md:-mt-12 bg-white lg:absolute lg:bottom-0 lg:right-0 lg:px-16 lg:w-1/2 lg:-m-8 lg:h-full lg:mr-8">
        <Text htmlSerializer={htmlSerializer}>{text}</Text>
      </div>
    </section>
  );
};

const Contents = (props) => {
  const { primary, items } = props;
  const { text } = primary;

  return (
    <section className="py-10 container">
      <div className="p-4 bg-white space-y-6 md:grid md:grid-cols-4">
        <Text className="w-3/4 md:w-full md:col-span-1 md:p-6 leading-tight">
          {text}
        </Text>
        <ul className="md:col-span-3 block">
          {items.map((item) => (
            <li className="flex" key={item.target_id}>
              <div className="h-6 w-6 self-center">
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
                className="flex-grow ml-6 py-4 no-underline flex justify-between border-b"
                href={`#${item.target_id}`}
              >
                <Text>{item.text}</Text>
                <div className="h-6 w-6 self-center">
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
      <div className="pb-10 md:pt-10 lg:py-24 md:container flex flex-col md:flex-row">
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
      <div className="container text-center py-16 space-y-10">
        <span className="anchor" id={id} />
        <div className="container space-y-4 mt-6">
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
  const { text, url, label, color } = primary;

  return (
    <section className="text-center py-10" style={{ backgroundColor: color }}>
      <div className="container space-y-4">
        <Text>{text}</Text>
        <a
          href={url.url}
          target={url.target}
          className="btn-blue px-8 py-4 no-underline text-lg inline-block"
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

const Body = ({ data }) => {
  const body = data.map((component) => {
    const { slice_type } = component;
    const Component = getComponent(slice_type);

    return <Component key={slice_type} {...component} />;
  });

  return <>{body}</>;
};

const Accessibility = ({ data }): JSX.Element => {
  return (
    <PageContext.Provider value={data}>
      <Layout>
        <Body data={data.body} />
      </Layout>
    </PageContext.Provider>
  );
};

export default Accessibility;