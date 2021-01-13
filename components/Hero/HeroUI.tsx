/* eslint-disable camelcase */

import Image from "next/image";
import { RichTextBlock } from "prismic-reactjs";
import HeroCallToAction from "../HeroCallToAction";
import SignupForm from "../SignupForm";
import Text from "../Text";

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

export default HeroUI;
