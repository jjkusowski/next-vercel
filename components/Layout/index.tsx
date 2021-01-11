import { FunctionComponent } from "react";
import Footer from "../Footer";
import Nav from "../Nav";

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
