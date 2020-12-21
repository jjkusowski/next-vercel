import { LAYOUT_QUERY } from "../components/Layout";
import { queryApollo } from "../lib/apollo/apolloClient";

// eslint-disable-next-line import/prefer-default-export
export const getLayoutData = () => {
  return queryApollo(LAYOUT_QUERY);
};
