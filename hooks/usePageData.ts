import { useContext } from "react";
import { Resolver, PageData } from "../utils/resolverFactory";
import PageContext from "../state/PageContext";

const usePageData = (resolver: Resolver): PageData => {
  const pageData = useContext(PageContext);
  return resolver(pageData);
};

export default usePageData;
