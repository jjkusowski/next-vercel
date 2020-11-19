import { gql } from "@apollo/client";
import React from "react";
import Footer, {
  FOOTER_LINKS_FRAGMENT,
  LEGAL_FRAGMENT,
  LOCALE_FRAGMENT,
  SOCIAL_FRAGMENT,
} from "../Footer";
import Nav, { NAV_FRAGMENT } from "../Nav";

export const LAYOUT_QUERY = gql`
  query {
    layout(uid: "layout", lang: "en-us") {
      ...Nav
      ...FooterLinks
      ...Legal
      ...Locale
      ...Social
    }
  }
  ${NAV_FRAGMENT}
  ${FOOTER_LINKS_FRAGMENT}
  ${LEGAL_FRAGMENT}
  ${LOCALE_FRAGMENT}
  ${SOCIAL_FRAGMENT}
`;

const Layout = ({ children }): JSX.Element => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
