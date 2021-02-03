import { useState, MouseEvent } from "react";
import NavPopupUI from "./NavPopupUI";
import ClickAwayWrapper from "../ClickAwayWrapper";
import { INavPopupProps } from "./interfaces";

const NavPopup = (props: INavPopupProps): JSX.Element => {
  const { wrapperClasses = "" } = props;
  const [open, setOpen] = useState(false);
  const toggleDropdown = (e: MouseEvent) => {
    e.preventDefault();
    setOpen((currentState) => !currentState);
  };

  const closeDropdown = () => {
    setOpen(false);
  };

  return (
    <ClickAwayWrapper callback={closeDropdown} wrapperClasses={wrapperClasses}>
      <NavPopupUI open={open} handleClick={toggleDropdown} {...props} />
    </ClickAwayWrapper>
  );
};

export default NavPopup;
