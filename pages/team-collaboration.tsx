import React from "react";
import { GetStaticProps } from "next";
import { queryApollo } from "../lib/apollo/apolloClient";
import Layout, { LAYOUT_QUERY } from "../components/Layout";

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = await queryApollo(LAYOUT_QUERY);

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

const TeamCollaboration = (): JSX.Element => {
  // const { data } = useQuery(LAYOUT_QUERY);
  return <Layout>TeamCollaboration</Layout>;
};

export default TeamCollaboration;
