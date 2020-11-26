import { createContext } from "react";

interface IPageContent {
  body?: any;
  [key: string]: any;
}

export default createContext<IPageContent>({});
