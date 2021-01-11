import { LocaleKey } from "../../common/layouts/interfaces";

export interface IList {
  title: string;
  listItems: LocaleKey[];
}

export type FooterLinkListComponent = (props: IList) => JSX.Element;
