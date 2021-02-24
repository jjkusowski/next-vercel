import { useContext } from "react";
import PageContext from "../state/PageContext";

const usePageData: <T>() => T = () => {
  const pageData = useContext(PageContext);
  return pageData;
};

export default usePageData;
