import Image from "next/image";
import { Elements } from "prismic-reactjs";
import { createElement } from "react";
import { ISliceProps } from "../../common/interfaces";
import Text from "../Text";

const Hero = (props: ISliceProps & { imgBase64: string }): JSX.Element => {
  const { primary, imgBase64 } = props;
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
      <div className="relative">
        <img
          aria-hidden="true"
          alt=""
          src={imgBase64}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width,
            height,
            /* Adjust the content to fit */
            objectFit: "cover",
            objectPosition: "center",
            /* Blur the image and scale to avoid transparent corners */
            filter: "blur(1.5rem)",
            transform: "scale(0.9)",
          }}
        />
        <Image src={url} alt={alt} height={height} width={width} priority />
      </div>
      <div className="relative grid gap-6 p-10 bg-white md:container md:mr-0 md:-mt-12 lg:absolute lg:bottom-0 lg:right-0 lg:px-16 lg:w-1/2 lg:-m-8 lg:h-full lg:mr-8">
        <div>
          <Text htmlSerializer={htmlSerializer}>{h1s}</Text>
        </div>
        <Text htmlSerializer={htmlSerializer}>{body}</Text>
      </div>
    </section>
  );
};

export default Hero;
