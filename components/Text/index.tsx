import { RichText } from "prismic-reactjs";
import { TextComponent } from "./interface";

const Text: TextComponent = ({
  className = "",
  children,
  linkResolver,
  ...rest
}) => {
  if (className) {
    children.forEach((child) => {
      // eslint-disable-next-line no-param-reassign
      child.label = className;
    });
  }
  return <RichText render={children} linkResolver={linkResolver} {...rest} />;
};

export default Text;
