import {
  PageTypes,
  SliceComponent,
  SliceParentComponent,
} from "../../common/interfaces";
import NullComp from "../Null";
import TeamCollabHero from "./TeamCollabHero";
import InfoHero from "./InfoHero";

const heroComponentsByPageType = {
  [PageTypes.Info]: InfoHero,
  [PageTypes.TeamCollab]: TeamCollabHero,
};

const getHeroComponentByPageType = (pageType: string): SliceComponent => {
  return heroComponentsByPageType[pageType] || NullComp;
};

const Hero: SliceParentComponent = (props) => {
  const { pageType } = props;
  const HeroComponent = getHeroComponentByPageType(pageType);

  return <HeroComponent {...props} />;
};

export default Hero;
