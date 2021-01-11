import { filter, find } from "lodash";
import usePageData from "../../hooks/usePageData";
import usePageBodyData from "../../hooks/usePageBodyData";
import resolverFactory from "../../utils/resolverFactory";
import HeroUI from "./HeroUI";

type DataFields = string[][];

const dataFields: DataFields = [
  ["hero_image", "image"],
  ["signup_form", "form"],
  ["hero_title", "title"],
  ["hero_header", "header"],
  ["hero_copy", "copy"],
];

const heroResolver = resolverFactory(dataFields);

const Hero = () => {
  const heroData = usePageData(heroResolver);

  return <HeroUI heroData={heroData as any} />;
};

export default Hero;
