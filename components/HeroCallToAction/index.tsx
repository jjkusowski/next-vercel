import { find } from "lodash";
import React from "react";
import usePageBodyData from "../../hooks/usePageBodyData";
import HeroCallToActionUI, { IHeroCtaProps } from "./HeroCallToActionUI";

const HeroCallToAction = (): JSX.Element => {
  const pageBody = usePageBodyData();
  const heroCTAData = find(pageBody, {
    slice_type: "call_to_action",
    slice_label: "hero",
  });

  return <HeroCallToActionUI data={heroCTAData as IHeroCtaProps} />;
};

export default HeroCallToAction;
