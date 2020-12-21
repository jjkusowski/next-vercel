import Prismic from "prismic-javascript";

export const apiEndpoint = "https://webex.cdn.prismic.io/api/v2";

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {};
  return {
    ...reqOption,
  };
};

// Client method to query documents from the Prismic repo
export const Client = (req = null) =>
  Prismic.client(apiEndpoint, createClientOptions(req));
