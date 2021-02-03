import { MouseEvent } from "react";

export interface INavPopupProps {
  classes?: string;
  wrapperClasses?: string;
  hoverClass?: string;
  label: string;
  popupElement: JSX.Element;
  href: string;
}

export interface INavPopupUIProps extends INavPopupProps {
  open: boolean;
  handleClick: (e: MouseEvent) => void;
}
