import { LocaleKey } from "../../common/layouts/interfaces";

export interface IBaseLink {
  nameKey: LocaleKey;
  hrefKey: LocaleKey;
}

export interface IDescribedLink extends IBaseLink {
  descriptionKey: LocaleKey;
}

export interface IProductCard extends IDescribedLink {
  imageSrc: string;
}

export interface ISpace extends IBaseLink {
  imageSrc: string;
  capacity: string;
  alt: LocaleKey;
}
