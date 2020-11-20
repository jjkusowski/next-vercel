import React from "react";
import NavItem, { INavItem } from "../NavItem";

interface INavUIProps {
  leftNavItems: INavItem[];
  rightNavItems: INavItem[];
  logoUrl: string;
}

const NavUI = ({
  leftNavItems,
  rightNavItems,
  logoUrl,
}: INavUIProps): JSX.Element => {
  return (
    <nav className="sticky bg-white top-0 px-32">
      <div className="flex">
        <div className="logo my-10 mr-20">
          <a href="/">
            <img src={logoUrl} alt="" height="20" width="120" />
          </a>
        </div>
        <div className="header-menu-lists flex flex-grow justify-between">
          <ul className="flex items-center">
            {leftNavItems.map((navItem) => (
              <NavItem item={navItem} key={navItem.label} />
            ))}
          </ul>
          <ul className="flex items-center">
            {rightNavItems.map((navItem) => (
              <NavItem item={navItem} key={navItem.label} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavUI;
