import { FunctionComponent } from "react";
import { IWrapperComponentProps } from "../../common/layouts/interfaces";
import Footer from "../Footer";
import Nav from "../Nav";

interface ILayoutProps extends IWrapperComponentProps {
  ctaText?: string;
}
type WrapperComponent = FunctionComponent<ILayoutProps>;

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
