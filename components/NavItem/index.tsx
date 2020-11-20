import React from "react";

const onClickHandlers = {
  "join-meeting": (e) => {
    e.preventDefault();
    alert("clicked!");
  },
};

const nullClick = (e) => {
  e.preventDefault();
};

const getClickHandler = (id: string) => onClickHandlers[id] || nullClick;

export interface INavItem {
  label: string;
  url: string;
  id: string;
  type: string;
  alignment: string;
}

interface INavItemProps {
  item: INavItem;
}

interface INavItemComponentProps {
  label: string;
  url: string;
  id: string;
}

type NavItemComponent = (navItem: INavItemComponentProps) => JSX.Element;

const Dropdown: NavItemComponent = ({ url, label }) => (
  <a href={url} onClick={nullClick}>
    {label}*
  </a>
);

const Link: NavItemComponent = ({ url, label, id }) => {
  const clickHandler = getClickHandler(id);
  return (
    <a href={url} onClick={clickHandler}>
      {label}
    </a>
  );
};

const Button: NavItemComponent = ({ label }) => (
  <button
    className="btn-blue hover:bg-blue-darker"
    type="button"
    onClick={() => alert("clicked")}
  >
    {label}
  </button>
);

export const getNavItem = (item: any): INavItem => {
  return {
    label: item.primary.nav_item_label[0].text,
    url: item.primary.nav_item_link?.url || "#",
    type: item.primary.nav_item_type,
    alignment: item.primary.nav_item_alignment,
    id: item.primary.nav_item_id || "",
  };
};

const mapItemToComponent = (type: string): NavItemComponent =>
  ({
    dropdown: Dropdown,
    button: Button,
    link: Link,
    custom: Link,
  }[type]);

const NavItem = (props: INavItemProps): JSX.Element => {
  const { item } = props;
  const { url, label, type, alignment, id } = item;
  const Component = mapItemToComponent(type);

  return (
    <li className={alignment === "left" ? "mr-10" : "ml-10"} key={label}>
      <Component label={label} url={url} id={id} />
    </li>
  );
};

export default NavItem;
