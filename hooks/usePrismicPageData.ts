import { SliceDocument } from "../common/interfaces";
import usePageData from "./usePageData";

const usePrismicPageData = (): SliceDocument => {
  // typescript trickery to get typing info for Prismic-sourced pages
  return (usePageData() as unknown) as SliceDocument;
};

export default usePrismicPageData;
