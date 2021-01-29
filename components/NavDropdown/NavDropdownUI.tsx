import { MouseEvent } from "react";

export interface INavDropdownProps {
  classes?: string;
  wrapperClasses?: string;
  label: string;
  dropdownElement: JSX.Element;
  href: string;
}

interface INavDropdownUIProps extends INavDropdownProps {
  open: boolean;
  handleClick: (e: MouseEvent) => void;
}

const NavDropdownUI = (props: INavDropdownUIProps): JSX.Element => {
  const {
    open,
    label,
    dropdownElement,
    href,
    handleClick,
    classes = "",
  } = props;
  return (
    <>
      <a
        className={`no-underline flex justify-between items-center hover:text-blue ${classes} ${
          open && "text-blue"
        }`}
        href={href}
        onClick={handleClick}
      >
        {label}
        <svg
          className={`h-6 w-6 lg:h-4 lg:w-4 inline-block ml-2 transform ${
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
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </a>
      {open && (
        <div className="lg:pb-16 lg:shadow-lg lg:fixed lg:top-0 lg:left-0 lg:bg-white lg:w-full lg:mt-20">
          <div className="w-11/12 mx-auto lg:border-t" />
          {dropdownElement}
        </div>
      )}
    </>
  );
};

export default NavDropdownUI;
