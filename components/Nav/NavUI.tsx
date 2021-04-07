import { forwardRef } from "react";
import { useIntl } from "react-intl";
import HamburgerMenu from "react-hamburger-menu";
import Link from "next/link";
import NavDropdown from "../NavDropdown";
import NavLink from "../NavLink";
import { Devices, Learn, Resources, SignIn, Solutions } from "../NavSubmenus";
import messages from "./translations";
import { INavUIProps, NavStates } from "./interfaces";
import links from "../../common/layouts/links";
import { LocaleKey } from "../../common/layouts/interfaces";
import NavPopup from "../NavPopup";
import useCurrentLocale from "../../hooks/useCurrentLocale";

const NavListItem = ({ children = null, classes = "" }) => (
  <li
    className={`flex px-4 py-6 items-center lg:px-0 border-t last:border-b lg:border-none ${classes}`}
  >
    <div className="flex-grow max-w-2xl px-6 mx-auto whitespace-no-wrap lg:px-0">
      {children}
    </div>
  </li>
);

const NavItems = () => {
  const { formatMessage } = useIntl();
  const { localeUnderscore } = useCurrentLocale();

  return (
    <>
      <NavListItem classes="lg:order-last lg:ml-6 xl:ml-3">
        <Link href={formatMessage(links[LocaleKey.Cart])}>
          <div className="flex">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="mx-auto btn-blue hover:bg-blue-darker md:whitespace-nowrap focus:shadow-outline">
              {formatMessage(messages.start)}
            </a>
          </div>
        </Link>
      </NavListItem>
      <NavListItem>
        <NavDropdown
          classes=""
          wrapperClasses=""
          label={formatMessage(messages.solutions)}
          href="/video-conferencing"
          dropdownElement={<Solutions colorClass="text-blue" />}
          hoverClass="text-blue"
        />
      </NavListItem>
      <NavListItem>
        <NavLink
          label={formatMessage(messages.plans)}
          href={formatMessage(links[LocaleKey.Plans])}
          id="plans-pricing"
          hoverClass="text-webex-green"
        />
      </NavListItem>
      <NavListItem>
        <NavDropdown
          label={formatMessage(messages.devices)}
          href="#"
          dropdownElement={<Devices colorClass="text-webex-purple" />}
          hoverClass="text-webex-purple"
        />
      </NavListItem>
      <NavListItem>
        <NavDropdown
          label={formatMessage(messages.resources)}
          href={formatMessage(links[LocaleKey.Integrations])}
          dropdownElement={<Resources colorClass="text-webex-resources" />}
          hoverClass="text-webex-resources"
        />
      </NavListItem>
      <NavListItem>
        <NavDropdown
          label={formatMessage(messages.learn)}
          href={formatMessage(links[LocaleKey.HelpCenter])}
          dropdownElement={<Learn colorClass="text-webex-gold" />}
          hoverClass="text-webex-gold"
        />
      </NavListItem>
      <NavListItem classes="flex-grow hidden lg:flex" />
      <NavListItem>
        <NavLink
          label={formatMessage(messages.join)}
          href={formatMessage(links.joinMeeting, { lang: localeUnderscore })}
          id="join-meeting"
        />
      </NavListItem>
      <NavListItem>
        <NavLink
          label={formatMessage(messages.download)}
          href={formatMessage(links[LocaleKey.Downloads])}
          id="download"
        />
      </NavListItem>
      <NavListItem classes="relative">
        <NavPopup
          label={formatMessage(messages.signIn)}
          href="#"
          popupElement={<SignIn />}
        />
      </NavListItem>
    </>
  );
};

const NavUI = (
  { isScrolledTop, navState, toggleMenu }: INavUIProps,
  ref
): JSX.Element => {
  const { formatMessage } = useIntl();

  // relevant nav state bools
  const isOpen = navState === NavStates.OPEN;
  const isOpenOrOpening = isOpen || navState === NavStates.OPENING;
  const isClosed = navState === NavStates.CLOSED;
  const isClosing = navState === NavStates.CLOSING;

  // dynamic classes based on state
  const bgClassList =
    !isScrolledTop || isOpenOrOpening || isClosing
      ? "bg-white"
      : "bg-transparent";

  // limit height and overflow when closed or closing, expand it to screen size when open or opening
  const openClassList = isOpenOrOpening
    ? "h-screen overflow-y-scroll"
    : "h-20 overflow-y-hidden lg:overflow-y-visible";

  return (
    <nav
      ref={ref}
      className={`fixed w-full top-0 z-50 bg-transparent transition-all duration-1000 ease-in-out ${openClassList} ${bgClassList}`}
    >
      <div className="px-4 mx-auto sm:px-6 lg:px-8 xl:px-0 xl:w-11/12 md:max-w-2xl lg:max-w-full">
        <div className="flex items-center justify-between flex-1 h-20 sm:items-stretch lg:text-xs xl:text-sm">
          <div className="flex items-center flex-shrink-0 w-32 lg:w-20 xl:w-32">
            <a href={formatMessage(links[LocaleKey.Webex])}>
              <img
                className="block w-auto"
                src="/logo-webex.png"
                alt="Workflow"
              />
            </a>
          </div>
          <div className="flex items-center lg:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center rounded-md focus:ring-blue-600"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <div className="p-1">
                <HamburgerMenu
                  width={24}
                  height={14}
                  isOpen={isOpenOrOpening}
                  borderRadius={8}
                  strokeWidth={2}
                />
              </div>
            </button>
          </div>
          {/* <!-- desktop menu --> */}
          <ul
            className="justify-end flex-grow hidden lg:flex lg:ml-6 lg:space-x-2 xl:space-x-5"
            data-info="desktop-nav"
          >
            <NavItems />
          </ul>
        </div>
        {/* <!-- mobile-only menu with slide-down effect --> */}
        <ul
          className={`absolute top-0 left-0  flex-col flex-grow w-full mt-20 bg-white lg:hidden lg:ml-6 lg:space-x-2 xl:space-x-5 
          ${isOpenOrOpening ? "flex" : ""}`}
          data-info="mobile-nav"
          hidden={isClosed}
          aria-hidden={isClosed}
        >
          <NavItems />
        </ul>
      </div>
    </nav>
  );
};

export default forwardRef(NavUI);
