import { gql } from "@apollo/client";

// eslint-disable-next-line import/prefer-default-export
export const LINK_FRAGMENT = gql`
  fragment Link on _ExternalLink {
    url
    target
  }
`;
