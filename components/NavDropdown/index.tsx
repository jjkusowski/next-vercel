import { useState, MouseEvent } from "react";
import ClickAwayWrapper from "../ClickAwayWrapper";
import NavDropdownUI, { INavDropdownProps } from "./NavDropdownUI";

const NavDropdown = (props: INavDropdownProps): JSX.Element => {
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
      <NavDropdownUI open={open} handleClick={toggleDropdown} {...props} />
    </ClickAwayWrapper>
  );
};

export default NavDropdown;
