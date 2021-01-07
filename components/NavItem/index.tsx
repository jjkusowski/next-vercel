import { useState } from "react";

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

interface ISubMenuItem {
  description: string;
  isPartitioned: boolean;
  label: string;
  url: string;
}
export interface INavItem {
  label: string;
  url: string;
  id: string;
  type: string;
  alignment: string;
  subMenuItems: ISubMenuItem[];
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

const Dropdown: NavItemComponent = ({ url, label }) => {
  const [open, setOpen] = useState(false);
  const openDropdown = (e) => {
    e.preventDefault();
    setOpen((currentState) => !currentState);
  };

  return (
    <>
      <a className="no-underline" href={url} onClick={openDropdown}>
        {label}
        <svg
          className={`h-4 w-4 inline-block ml-2 transform ${
            open ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </a>
    </>
  );
};

const Link: NavItemComponent = ({ url, label, id }) => {
  const clickHandler = getClickHandler(id);
  return (
    <a className="no-underline" href={url} onClick={clickHandler}>
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
    subMenuItems: item.fields,
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

  const alignmentClass = alignment === "left" ? "mr-10" : "ml-10";

  return (
    <li className={`${alignmentClass}`} key={label}>
      <Component label={label} url={url} id={id} />
    </li>
  );
};

export default NavItem;
