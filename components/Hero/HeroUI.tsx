/* eslint-disable camelcase */
import { find } from "lodash";
import Image from "next/image";
import { Link, RichTextBlock } from "prismic-reactjs";
import React from "react";
import usePageBodyData from "../../hooks/usePageBodyData";
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
    <section className="hero">
      <div className="container section text-center">
        <div className="title">
          <Text>{title}</Text>
        </div>
        <div className="header">
          <Text>{header}</Text>
        </div>
        <div className="img">
          <Image
            src={image.url}
            height={image.dimensions.height}
            width={image.dimensions.width}
          />
        </div>
        <div className="copy">
          <Text>{copy}</Text>
        </div>
        <SignupForm />
        <HeroCallToAction />
      </div>
    </section>
  );
};

export default HeroUI;
