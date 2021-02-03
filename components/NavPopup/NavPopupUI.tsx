import { INavPopupUIProps } from "./interfaces";

const NavPopupUI = (props: INavPopupUIProps): JSX.Element => {
  const {
    open,
    label,
    popupElement,
    href,
    handleClick,
    classes = "",
    hoverClass = "text-blue",
  } = props;
  return (
    <>
      <a
        className={`no-underline flex justify-between items-center hover:${hoverClass} ${classes} ${
          open && hoverClass
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
        <div className="lg:shadow-lg lg:top-0 lg:left-0 lg:bg-white lg:w-full">
          {popupElement}
        </div>
      )}
    </>
  );
};

export default NavPopupUI;
