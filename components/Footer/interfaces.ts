import { LocaleKey } from "../../common/layouts/interfaces";

export interface IListItems {
  localeKey: LocaleKey;
}

export interface IList {
  title: string;
  listItems: IListItems[];
}

export type FooterLinkListComponent = (props: IList) => JSX.Element;
