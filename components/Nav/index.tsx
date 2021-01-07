import { gql } from "@apollo/client";
import { TransitionEvent, useEffect, useRef, useState } from "react";
import { useWindowWidth } from "@react-hook/window-size";
import useIsScrolledTop from "../../hooks/useIsScrolledTop";
import { LINK_FRAGMENT } from "../../lib/graphql/fragments";
import { getNavItem, INavItem } from "../NavItem";
import { NavStates } from "./interfaces";
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

// this is broken due to removal of GQL -- if desired, reimplement with REST
const NavCMS = ({ ctaText }): JSX.Element => {
  // implement data as a prop
  let data;
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
};

const Nav = (): JSX.Element => {
  const navRef = useRef();
  const isScrolledTop = useIsScrolledTop();
  const isMobile = useWindowWidth() < 1024;
  const [navState, setNavState] = useState<NavStates>(NavStates.CLOSED);

  const isEventTargetingNavRef = (ev: TransitionEvent<Element>) => {
    return ev.target === navRef.current;
  };

  const handleTransitionEnd = (callback) => {
    const handler = (ev) => {
      if (isEventTargetingNavRef(ev)) {
        callback();
        document.removeEventListener("transitionend", handler);
      }
    };

    document.addEventListener("transitionend", handler);
  };

  // quick hack to disable background scrolling while nav is open
  useEffect(() => {
    if (navState === NavStates.OPEN) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [navState]);

  // ensure menu is in closed state when screen size changes
  useEffect(() => {
    setNavState(NavStates.CLOSED);
  }, [isMobile]);

  const handleNavState = () => {
    setNavState((currentNavState) => {
      switch (currentNavState) {
        case NavStates.CLOSED: {
          handleTransitionEnd(() => {
            setNavState(NavStates.OPEN);
          });
          return NavStates.OPENING;
        }
        case NavStates.CLOSING: {
          return NavStates.CLOSING;
        }
        case NavStates.OPENING: {
          return NavStates.OPENING;
        }
        case NavStates.OPEN: {
          handleTransitionEnd(() => {
            setNavState(NavStates.CLOSED);
          });
          return NavStates.CLOSING;
        }
        default: {
          return NavStates.CLOSED;
        }
      }
    });
  };

  return (
    <NavUI
      isScrolledTop={isScrolledTop}
      navState={navState}
      toggleMenu={handleNavState}
      ref={navRef}
    />
  );
};

export default Nav;
