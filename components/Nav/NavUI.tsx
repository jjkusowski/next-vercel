import React from "react";
import { useIntl } from "react-intl";
import NavDropdown from "../NavDropdown";
import NavLink from "../NavLink";
import { Devices, Learn, Resources, SignIn, Solutions } from "../NavSubmenus";
import messages from "./translations";

interface INavUIProps {
  isScrolledTop: boolean;
  isOpen: boolean;
  toggleMenu: any;
}

const NavListItem = ({ children = null, classes = "" }) => (
  <li
    className={`flex justify-center py-8 border-b lg:py-0 lg:border-none lg:mx-4 lg:h-1/2 ${classes}`}
  >
    <div className="px-24 w-full lg:px-0 lg:w-auto">{children}</div>
  </li>
);

const NavUI = (props: INavUIProps): JSX.Element => {
  const { isScrolledTop, isOpen, toggleMenu } = props;
  const { formatMessage } = useIntl();

  // bg should be white when scrolled to top and when mobile menu is open
  const bgClass = isScrolledTop && !isOpen ? "bg-transparent" : "bg-white";

  // TODO: continue work on responsive design
  // TODO: fix bug where isOpen can be false for lg screens
  return (
    <nav className={`sticky flex top-0 h-20 z-50 transition-colors ${bgClass}`}>
      <div className="flex items-center justify-between w-full px-24">
        <div className="logo md:my-10 md:mr-20 min-w-max">
          <a href="/">
            <img src="/logo-webex.png" alt="" height="20" width="120" />
          </a>
        </div>
        <div className="lg:hidden h-8 w-8">
          <button className="h-full w-full" type="button" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            </svg>
          </button>
        </div>
        {isOpen && (
          <ul
            // the first line applies to lg and smaller, second to lg and up
            className="
              absolute grid h-screen w-screen left-0 top-0 mt-20 border-t bg-white
              lg:relative lg:h-full lg:w-full lg:mt-0 lg:bg-transparent lg:border-t-0 lg:flex lg:items-center"
          >
            <NavListItem classes="lg:order-last">
              <button
                className="btn-blue block mx-auto hover:bg-blue-darker"
                type="button"
                onClick={() => alert("clicked")}
              >
                {formatMessage(messages.start)}
              </button>
            </NavListItem>
            <NavListItem>
              <NavDropdown
                classes=""
                wrapperClasses=""
                label={formatMessage(messages.solutions)}
                url="/video-conferencing"
                dropdownElement={<Solutions />}
              />
            </NavListItem>
            <NavListItem>
              <NavLink
                label={formatMessage(messages.plans)}
                url="/pricing/index.html"
                id="plans-pricing"
              />
            </NavListItem>
            <NavListItem>
              <NavDropdown
                label={formatMessage(messages.devices)}
                url="#"
                dropdownElement={<Devices />}
              />
            </NavListItem>
            <NavListItem>
              <NavDropdown
                label={formatMessage(messages.resources)}
                url="/products/integrations/index.html"
                dropdownElement={<Resources />}
              />
            </NavListItem>
            <NavListItem>
              <NavDropdown
                label={formatMessage(messages.learn)}
                url="https://help.webex.com/?language=en-us"
                dropdownElement={<Learn />}
              />
            </NavListItem>
            <NavListItem classes="flex-grow" />
            <NavListItem>
              <NavLink
                label={formatMessage(messages.join)}
                url="#"
                id="join-meeting"
              />
            </NavListItem>
            <NavListItem>
              <NavLink
                label={formatMessage(messages.download)}
                url="/downloads.html"
                id="download"
              />
            </NavListItem>
            <NavListItem>
              <NavDropdown
                label={formatMessage(messages.signIn)}
                url="#"
                dropdownElement={<SignIn />}
              />
            </NavListItem>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavUI;
