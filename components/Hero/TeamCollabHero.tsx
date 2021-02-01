import Image from "next/image";
import { RichTextBlock } from "prismic-reactjs";
import usePageData from "../../hooks/useResolvedPageData";
import resolverFactory from "../../utils/resolverFactory";
import HeroCallToAction from "../HeroCallToAction";
import SignupForm from "../SignupForm";
import Text from "../Text";

type DataFields = string[][];

const dataFields: DataFields = [
  ["hero_image", "image"],
  ["signup_form", "form"],
  ["hero_title", "title"],
  ["hero_header", "header"],
  ["hero_copy", "copy"],
];

const heroResolver = resolverFactory(dataFields);

interface IForm {
  placeholder_text: string;
  cta_text: string;
  destination: string;
  legal_consent_text: string;
}

interface IHeroProps {
  heroData: {
    image: RichTextBlock;
    form: IForm;
    title: RichTextBlock[];
    header: RichTextBlock[];
    copy: RichTextBlock[];
  };
}

const HeroUI = ({ heroData }: IHeroProps): JSX.Element => {
  const { image, title, header, copy } = heroData;
  return (
    <section className="hero section">
      <div className="container">
        <div className="text-center md:text-left md:w-1/2 md:ml-0">
          <div className="title">
            <Text>{title}</Text>
          </div>
          <div className="header">
            <Text>{header}</Text>
          </div>
          <div
            style={{ zIndex: -1 }}
            className="img md:absolute md:right-0 md:w-2/3 md:top-0 md:mt-56"
          >
            <Image
              src={image.url}
              height={image.dimensions.height}
              width={image.dimensions.width}
            />
          </div>
          <div className="copy">
            <Text>{copy}</Text>
          </div>
        </div>
        <div className="md:w-full">
          <SignupForm />
        </div>
        <HeroCallToAction />
      </div>
    </section>
  );
};

const Hero = (): JSX.Element => {
  const heroData = usePageData(heroResolver);

  return <HeroUI heroData={heroData as any} />;
};

export default Hero;
