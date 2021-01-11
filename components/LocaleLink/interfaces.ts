import { ICountry } from "../../common/locales/interfaces";

export interface ILocaleLinkProps {
  country: ICountry;
  path?: string;
}

export type LocaleLink = (props: ILocaleLinkProps) => JSX.Element;
