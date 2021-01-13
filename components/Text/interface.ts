import { RichTextBlock, RichTextProps } from "prismic-reactjs";

export type StyledRichTextBlock = RichTextBlock & { label?: string };

export interface IText extends RichTextProps {
  className?: string;
  children: StyledRichTextBlock[];
}

export type TextComponent = (props: IText) => JSX.Element;
