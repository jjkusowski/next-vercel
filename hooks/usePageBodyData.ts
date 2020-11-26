import { useContext } from "react";
import { Resolver, PageData } from "../utils/resolverFactory";
import PageContext from "../state/PageContext";

const usePageBodyData = (): PageData => {
  const pageData = useContext(PageContext);
  return pageData.body;
};

export default usePageBodyData;
