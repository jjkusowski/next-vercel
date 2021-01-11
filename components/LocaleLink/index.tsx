import { LocaleLink as LocaleLinkComponent } from "./interfaces";
import LocaleLinkUI from "./LocaleLinkUI";

const LocaleLink: LocaleLinkComponent = ({ country }) => {
  return <LocaleLinkUI country={country} />;
};

export default LocaleLink;
