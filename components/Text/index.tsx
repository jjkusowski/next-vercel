import React from "react";
import { LinkResolver, RichText, RichTextBlock } from "prismic-reactjs";

type StyledRichTextBlock = RichTextBlock & { label?: string };

interface IText {
  className?: string;
  children: StyledRichTextBlock[];
  linkResolver: LinkResolver;
}

const Text = ({
  className = "",
  children,
  linkResolver,
}: IText): JSX.Element => {
  if (className) {
    children.forEach((child) => {
      // eslint-disable-next-line no-param-reassign
      child.label = className;
    });
  }
  return <RichText render={children} linkResolver={linkResolver} />;
};

export default Text;
