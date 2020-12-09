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
    <nav className="sticky flex bg-white top-0 h-20 z-50">
      <div className="flex items-center justify-between w-full px-8">
        <div className="logo md:my-10 md:mr-20">
          <a href="/">
            <img src={logoUrl} alt="" height="20" width="120" />
          </a>
        </div>
        <div className="xl:hidden h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="md:hidden"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 8h16M4 16h16"
            />
          </svg>
        </div>
        <div className="hidden header-menu-lists lg:flex flex-grow justify-between">
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
