import Image from "next/image";
import { SliceComponent } from "../../common/interfaces";
import Text from "../Text";

const BlockSplit: SliceComponent = (props) => {
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
        <div className={`${imageOrderClass} flex`}>
          <Image
            className={`${imageOrderClass} md:w-1/2 object-contain`}
            src={url}
            alt={alt}
            height={height}
            width={width}
          />
        </div>
        <div
          className={`${textOrderClass} flex flex-col space-y-4 justify-center p-8 md:pt-0`}
        >
          <Text>{text}</Text>
        </div>
      </div>
    </section>
  );
};

export default BlockSplit;
