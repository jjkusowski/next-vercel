import InPageMenuUI from "./InPageMenuUI";
import { InPageMenuComponent } from "./interfaces";

const InPageMenu: InPageMenuComponent = (props) => {
  return <InPageMenuUI {...props} />;
};

export default InPageMenu;
