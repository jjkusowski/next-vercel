import { gql, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useWindowWidth } from "@react-hook/window-size";
import useIsScrolledTop from "../../hooks/useIsScrolledTop";
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

export const NAV_QUERY = gql`
  query {
    layout(uid: "layout", lang: "en-us") {
      ...Nav
    }
  }
  ${NAV_FRAGMENT}
`;

const NavCMS = ({ ctaText }): JSX.Element => {
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

  if (ctaText) {
    rightNavItems[rightNavItems.length - 1].label = ctaText;
  }

  return null;

  // return (
  //   <NavUI
  //     logoUrl={url}
  //     leftNavItems={leftNavItems}
  //     rightNavItems={rightNavItems}
  //   />
  // );
};

const Nav = (): JSX.Element => {
  const isScrolledTop = useIsScrolledTop();
  const isMobile = useWindowWidth() < 1024;
  const [open, setOpen] = useState(true);

  // quick hack to disable background scrolling while nav is open
  useEffect(() => {
    if (open) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [isMobile]);

  const toggleOpen = () => {
    setOpen((current) => !current);
  };

  return (
    <NavUI
      isScrolledTop={isScrolledTop}
      isOpen={open}
      toggleMenu={toggleOpen}
    />
  );
};

export default Nav;
