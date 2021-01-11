import { gql, useQuery } from "@apollo/client";
import React from "react";
import { LINK_FRAGMENT } from "../../lib/graphql/fragments";
import * as data from "./data";
import FooterLinks from "./FooterLinks";
import FooterLegal from "./FooterLegal";
import FooterTwitter from "./FooterTwitter";
import FooterTerms from "./FooterTerms";
import styles from "./footer.module.css";

export const FOOTER_LINKS_FRAGMENT = gql`
  fragment FooterLinks on Layout {
    body1 {
      ... on LayoutBody1Footer_links_list {
        primary {
          link_category
        }
        fields {
          label
          url {
            ...Link
          }
        }
      }
    }
  }
  ${LINK_FRAGMENT}
`;

const FOOTER_LINKS_QUERY = gql`
  query {
    layout(uid: "layout", lang: "en-us") {
      ...FooterLinks
    }
  }
  ${FOOTER_LINKS_FRAGMENT}
`;

// const FooterLinks = () => {
//   const { data } = useQuery(FOOTER_LINKS_QUERY);

//   return <pre>{JSON.stringify(data, null, 2)}</pre>;
// };

export const LEGAL_FRAGMENT = gql`
  fragment Legal on Layout {
    copyright
    legal_links {
      label
      url {
        ...Link
      }
    }
  }
  ${LINK_FRAGMENT}
`;

const LEGAL_QUERY = gql`
  query {
    layout(uid: "layout", lang: "en-us") {
      ...Legal
    }
  }
  ${LEGAL_FRAGMENT}
`;

// const Legal = () => {
//   const { data } = useQuery(LEGAL_QUERY);

//   return <pre>{JSON.stringify(data, null, 2)}</pre>;
// };

export const LOCALE_FRAGMENT = gql`
  fragment Locale on Layout {
    locales {
      id
      label
    }
  }
`;

const LOCALE_QUERY = gql`
  query {
    layout(uid: "layout", lang: "en-us") {
      ...Locale
    }
  }
  ${LOCALE_FRAGMENT}
`;

// const Locale = () => {
//   const { data } = useQuery(LOCALE_QUERY);

//   return <pre>{JSON.stringify(data, null, 2)}</pre>;
// };

export const SOCIAL_FRAGMENT = gql`
  fragment Social on Layout {
    social_widget_title
    social_widget
    social_links {
      icon
      url {
        ...Link
      }
    }
  }
  ${LINK_FRAGMENT}
`;

const SOCAIL_QUERY = gql`
  query {
    layout(uid: "layout", lang: "en-us") {
      ...Social
    }
  }
  ${SOCIAL_FRAGMENT}
`;

// const Social = () => {
//   const { data1 } = useQuery(SOCAIL_QUERY);

//   return <pre>{JSON.stringify(data, null, 2)}</pre>;
// };

const Footer = (): JSX.Element => {
  return (
    <footer className="bg-brand-footer">
      <div
        className={`${styles["wbx-container"]} mx-auto flex flex-wrap px-10`}
      >
        <div className={`${styles["wbx-left"]}`}>
          <a
            className={`${styles["wf-logo"]} hidden lg:inline-block`}
            href="https://www.webex.com/"
            aria-label="Cisco Webex logo"
          >
            <span
              className={`${styles["wf-logo-icon"]} h-12 w-48 inline-block bg-center`}
            />
          </a>
          <FooterTwitter />
          <FooterLegal />
        </div>
        <div className="pt-16 lg:w-9/12 lg:pl-40 lg:pl-8">
          <FooterLinks />
          <FooterTerms />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
