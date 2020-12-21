import { Link } from "prismic-reactjs";
import React from "react";

export interface IHeroCtaProps {
  primary: {
    label: string;
    variation: string;
    action_type: string;
    url: Link;
    action_id: string;
    color: string;
  };
}

const HeroCallToActionUI = ({ data }: { data: IHeroCtaProps }): JSX.Element => {
  const { primary } = data;
  const {
    label,
    variation,
    action_type: actionType,
    url,
    action_id: actionId,
    color,
  } = primary;

  const resolvedVariation =
    variation === "outline button" ? "btn-blue-outline" : "";

  return (
    <a href={url.url} type="button" className={resolvedVariation}>
      {label}
    </a>
  );
};

export default HeroCallToActionUI;
