import { MouseEvent } from "react";

export interface INavDropdownProps {
  classes?: string;
  wrapperClasses?: string;
  label: string;
  dropdownElement: JSX.Element;
  url: string;
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
    url,
    handleClick,
    classes = "",
  } = props;
  return (
    <>
      <a
        className={`no-underline flex justify-between items-center hover:text-blue ${classes}`}
        href={url}
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
      {open && dropdownElement}
    </>
  );
};

export default NavDropdownUI;
