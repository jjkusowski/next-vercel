import { gql, useQuery } from "@apollo/client";
import React from "react";
import { LINK_FRAGMENT } from "../../lib/graphql/fragments";
import { getNavItem, INavItem } from "../NavItem";
import NavUI from "./NavUI";

const NAV_ITEMS_FRAGMENT = gql`
  fragment NavItems on LayoutBodyMenu_link_dropdown {
    primary {
      nav_item_id
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
      ...NavItems
    }
    logo
    logo_white
  }
  ${NAV_ITEMS_FRAGMENT}
`;

const NAV_QUERY = gql`
  query {
    layout(uid: "layout", lang: "en-us") {
      ...Nav
    }
  }
  ${NAV_FRAGMENT}
`;

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

  const leftNavItems: INavItem[] = leftItems.map((item) => getNavItem(item));

  const rightNavItems: INavItem[] = rightItems.map((item) => getNavItem(item));

  return (
    <NavUI
      logoUrl={url}
      leftNavItems={leftNavItems}
      rightNavItems={rightNavItems}
    />
  );
};

export default Nav;
