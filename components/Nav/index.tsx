import { gql, useQuery } from "@apollo/client";
import React from "react";
import { LINK_FRAGMENT } from "../../lib/graphql/fragments";

const NAV_LINKS_FRAGMENT = gql`
  fragment NavLinks on LayoutBodyMenu_link_dropdown {
    primary {
      nav_item_label
      nav_item_link {
        ...Link
      }
      nav_item_type
      nav_item_alignment
    }
    fields {
      submenu_item_desc
      submenu_item_link {
        ...Link
      }
      submenu_item_label
      submenu_item_is_partitioned
    }
  }
  ${LINK_FRAGMENT}
`;

export const NAV_FRAGMENT = gql`
  fragment Nav on Layout {
    body {
      ...NavLinks
    }
    logo
    logo_white
  }
  ${NAV_LINKS_FRAGMENT}
`;

const NAV_QUERY = gql`
  query {
    layout(uid: "layout", lang: "en-us") {
      ...Nav
    }
  }
  ${NAV_FRAGMENT}
`;

const getNavItemInfo = (item) => {
  return {
    label: item.primary.nav_item_label[0].text,
    url: item.primary.nav_item_link?.url || "#",
    type: item.primary.nav_item_type,
    alignment: item.primary.nav_item_alignment,
  };
};

interface INavItemProps {
  label: string;
  url: string;
}

type NavItem = (navItem: INavItemProps) => JSX.Element;

const Dropdown: NavItem = ({ url, label }) => <a href={url}>{label}*</a>;

const Link: NavItem = ({ url, label }) => <a href={url}>{label}</a>;

const Button: NavItem = ({ label }) => (
  <button
    className="btn-blue hover:bg-blue-darker"
    type="button"
    onClick={() => alert("clicked")}
  >
    {label}
  </button>
);

const mapItemToComponent = (type) =>
  ({
    dropdown: Dropdown,
    button: Button,
    link: Link,
  }[type]);

const NavItem = (props) => {
  const { item } = props;
  const { url, label, type, alignment } = item;
  const Component = mapItemToComponent(type);

  return (
    <li className={alignment === "left" ? "mr-10" : "ml-10"} key={label}>
      <Component label={label} url={url} />
    </li>
  );
};

const Nav = (): JSX.Element => {
  const { data } = useQuery(NAV_QUERY);

  const { layout } = data;
  const { logo, body: navItems } = layout;
  const { url } = logo;

  const leftItems = navItems.filter(
    (item) => item.primary.nav_item_alignment === "left"
  );

  const rightItems = navItems.filter(
    (item) => item.primary.nav_item_alignment !== "left"
  );

  const leftNavItems = leftItems.map((item) => getNavItemInfo(item));

  const rightNavItems = rightItems.map((item) => getNavItemInfo(item));

  return (
    <nav className="sticky bg-white top-0 px-32">
      <div className="flex">
        <div className="logo my-10 mr-20">
          <a href="/">
            <img src={url} alt="" height="20" width="120" />
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

export default Nav;
