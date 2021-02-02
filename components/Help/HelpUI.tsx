import { SliceComponent } from "../../common/interfaces";
import Text from "../Text";

const HelpUI: SliceComponent = (props) => {
  const { primary } = props;
  const { text, url, label, color, id } = primary;

  return (
    <section className="py-32 text-center" style={{ backgroundColor: color }}>
      <span className="anchor" id={id} />
      <div className="container space-y-4">
        <Text>{text}</Text>
        <a
          href={url.url}
          target={url.target}
          className="inline-block px-8 py-4 text-lg no-underline btn-blue"
        >
          {label[0]?.text}
        </a>
      </div>
    </section>
  );
};

export default HelpUI;
