import { RichText, RichTextBlock, RichTextProps } from "prismic-reactjs";

type StyledRichTextBlock = RichTextBlock & { label?: string };

interface IText extends RichTextProps {
  className?: string;
  children: StyledRichTextBlock[];
}

const Text = ({
  className = "",
  children,
  linkResolver,
  ...rest
}: IText): JSX.Element => {
  if (className) {
    children.forEach((child) => {
      // eslint-disable-next-line no-param-reassign
      child.label = className;
    });
  }
  return <RichText render={children} linkResolver={linkResolver} {...rest} />;
};

export default Text;
