/* eslint-disable camelcase */
import { GetStaticProps } from "next";
import Prismic from "prismic-javascript";
import { reject } from "lodash";
import Image from "next/image";
import Layout from "../components/Layout";
import PageContext from "../state/PageContext";
import Hero from "../components/Hero";
import usePageBodyData from "../hooks/usePageBodyData";
import Text from "../components/Text";
import { PageTypes } from "../common/interfaces";

export const getStaticProps: GetStaticProps = async (context) => {
  const { preview, previewData } = context;

  const ref = preview ? previewData.ref : null;

  const query = Prismic.getApi("https://webex.cdn.prismic.io/api/v2").then(
    (api) => {
      return api.getSingle(PageTypes.TeamCollab, { ref }).then(async (doc) => {
        const { data } = await api.getByID(doc.data.signup_form.id, { ref });

        const finalDoc = {
          ...doc,
          data: {
            ...doc.data,
            signup_form: data,
          },
        };

        return finalDoc;
      });
    }
  );

  const { data } = await query;

  return {
    props: {
      data: {
        ...data,
        pageType: PageTypes.TeamCollab,
      },
    },
  };
};

const FeatureBlock = ({ data }) => {
  const { primary } = data;
  const {
    image,
    header,
    background_color,
    copy,
    action_type,
    // action_id,
    cta_label,
  } = primary;

  const bgColorClass = background_color === "gray" ? "bg-gray-100" : "";

  const renderImageSection = () => {
    if (!image.url) return null;

    return (
      <div className="image">
        <Image
          src={image.url}
          width={image.dimensions.width}
          height={image.dimensions.height}
        />
      </div>
    );
  };

  const renderHeaderSection = () => {
    if (!header) return null;

    return <Text className="w-48">{header}</Text>;
  };

  const renderCopySection = () => {
    if (!copy) return null;

    return <Text className="container">{copy}</Text>;
  };

  const renderCTA = () => {
    if (!action_type) return null;

    return (
      <div className="flex flex-row items-center space-x-2 cursor-pointer cta group">
        <button
          type="button"
          className="w-12 h-12 text-lg transition-all duration-500 ease-in-out transform border-2 rounded-full border-blue group-hover:bg-blue group-hover:text-white group-hover:scale-110"
        >
          +
        </button>
        <Text>{cta_label}</Text>
      </div>
    );
  };

  return (
    <div className={`section ${bgColorClass}`}>
      <div className="container grid grid-cols-1 text-center gap-y-12 justify-items-center">
        {renderImageSection()}
        {renderHeaderSection()}
        {renderCopySection()}
        {renderCTA()}
      </div>
    </div>
  );
};

const bodyComponents = {
  feature_block: FeatureBlock,
  default: () => null,
};

const Body = () => {
  const bodyElementsAll = usePageBodyData();

  const bodyElements = reject(bodyElementsAll, ["slice_label", "hero"]);

  return (
    <>
      {bodyElements.map((element: any, ix) => {
        const Component =
          bodyComponents[element.slice_type] || bodyComponents.default;

        // eslint-disable-next-line react/no-array-index-key
        return <Component data={element} key={`${element.slice_type}_${ix}`} />;
      })}
    </>
  );
};

const TeamCollaboration = ({ data }): JSX.Element => {
  return (
    <PageContext.Provider value={data}>
      <Layout ctaText={data.layout_cta_override_text}>
        <Hero pageType={data.pageType} {...data} />
        <Body />
      </Layout>
    </PageContext.Provider>
  );
};

export default TeamCollaboration;
