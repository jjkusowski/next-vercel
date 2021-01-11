import { TransitionEvent, useEffect, useRef, useState } from "react";
import useIsScrolledTop from "../../hooks/useIsScrolledTop";
import { getNavItem, INavItem } from "../NavItem";
import { NavStates } from "./interfaces";
import NavUI from "./NavUI";
import useIsMobile from "../../hooks/useIsMobile";

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
  const isMobile = useIsMobile();
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
