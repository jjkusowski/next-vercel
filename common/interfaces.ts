import { GetStaticProps, GetStaticPropsResult } from "next";
import { Document } from "prismic-javascript/types/documents";

export interface ISliceProps {
  slice_label: string;
  slice_type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  primary: any;
}

export interface SliceParentProps extends ISliceProps {
  pageType: PageTypes | string;
}

export interface SliceDocument extends Document {
  data: {
    body: ISliceProps[];
  };
}

export interface IPrismicDocumentStaticProps {
  data: SliceDocument;
}

export type PrismicPageStaticProps = GetStaticProps<
  IPrismicDocumentStaticProps
>;

export type PrismicProps = GetStaticPropsResult<IPrismicDocumentStaticProps>;

export type PrismicPage = (props: IPrismicDocumentStaticProps) => JSX.Element;

export type SliceComponent = (props: ISliceProps) => JSX.Element;

export type SliceParentComponent = (props: SliceParentProps) => JSX.Element;

export interface SliceComponentsMap {
  [key: string]: SliceParentComponent;
}

export enum PageTypes {
  Info = "info",
  TeamCollab = "team-collaboration",
}
