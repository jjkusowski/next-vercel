import { gql } from "@apollo/client";
import { FunctionComponent } from "react";
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

interface IWrapperComponentProps {
  children: React.ReactNode;
  ctaText?: string;
}
type WrapperComponent = FunctionComponent<IWrapperComponentProps>;

const Layout: WrapperComponent = ({ children, ctaText }) => {
  return (
    <div className="bg-gray-100">
      <Nav />
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
