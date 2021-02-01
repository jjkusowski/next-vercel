import { useContext } from "react";
import { PageData } from "../utils/resolverFactory";
import PageContext from "../state/PageContext";

const usePageData = (): PageData => {
  const pageData = useContext(PageContext);
  return pageData;
};

export default usePageData;
