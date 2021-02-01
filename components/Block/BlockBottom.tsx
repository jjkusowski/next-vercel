import Image from "next/image";
import { SliceComponent } from "../../common/interfaces";
import Text from "../Text";

const BlockBottom: SliceComponent = (props) => {
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
        <Image src={url} alt={alt} height={height} width={width} />
      </div>
    </section>
  );
};

export default BlockBottom;
