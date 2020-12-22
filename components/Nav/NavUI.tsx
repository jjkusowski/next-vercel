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
    className={`flex px-4 h-20 items-center lg:px-0 border-t last:border-b lg:border-none ${classes}`}
  >
    <div className="whitespace-no-wrap flex-grow">{children}</div>
  </li>
);

const NavUI = ({
  isScrolledTop,
  isOpen,
  toggleMenu,
}: INavUIProps): JSX.Element => {
  const { formatMessage } = useIntl();

  const openClasses =
    "flex flex-col absolute top-0 left-0 mt-20 w-full bg-white h-auto";
  const closedClasses = "hidden lg:flex";

  const menuListClasses = isOpen ? openClasses : closedClasses;

  return (
    <nav
      className={`sticky top-0 ${
        !isScrolledTop || isOpen ? "bg-white" : "bg-transparent"
      } z-50`}
    >
      <div
        className={`relative ${
          isOpen ? "h-screen" : ""
        } overflow-y-scroll lg:h-auto lg:overflow-y-auto`}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 xl:w-11/12 md:max-w-2xl lg:max-w-full">
          <div className="flex h-20 flex-1 items-center sm:items-stretch justify-between lg:text-xs xl:text-sm">
            <div className="flex-shrink-0 flex items-center w-32 lg:w-20 xl:w-32">
              {/*  */}
              <a href="/">
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
                className="inline-flex items-center justify-center p-2 rounded-md"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* <!-- Icon when menu is closed. -->
                  <!--
                    Heroicon name: menu

                    Menu open: "hidden", Menu closed: "block"
                  --> */}

                <svg
                  className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
                {/* <!-- Icon when menu is open. -->
                    <!--
                      Heroicon name: x

                      Menu open: "block", Menu closed: "hidden"
                    --> */}
                <svg
                  className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <ul
              className={`${menuListClasses} flex-grow justify-end lg:ml-6 lg:space-x-2 xl:space-x-5`}
            >
              <NavListItem classes="lg:order-last lg:ml-6 xl:ml-3">
                <button
                  className="btn-blue block mx-auto hover:bg-blue-darker md:whitespace-nowrap focus:shadow-outline"
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
              <NavListItem classes="flex-grow hidden lg:flex" />
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavUI;
