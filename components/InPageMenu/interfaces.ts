import { StyledRichTextBlock } from "../Text/interface";

export interface IInPageMenuUIProps {
  primary: {
    text: StyledRichTextBlock[];
  };
  items: {
    target_id: string;
    text: StyledRichTextBlock[];
  }[];
}

export type InPageMenuUIComponent = (props: IInPageMenuUIProps) => JSX.Element;
export type InPageMenuComponent = InPageMenuUIComponent;
