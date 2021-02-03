import { INavDropdownItemProps } from "./interfaces";

const NavDropdownItem = (props: INavDropdownItemProps): JSX.Element => {
  const { label, href, description, hoverClass } = props;
  return (
    <div className="flex flex-col">
      <div
        className={`text-base md:text-2xl lg:text-xl font-light hover:${hoverClass}`}
      >
        <a className="block lg:inline" href={href}>
          {label}
        </a>
      </div>
      <div className="hidden w-full pt-4 text-xs whitespace-pre-line md:block text-webex-gray xl:w-2/3">
        {description}
      </div>
    </div>
  );
};

export default NavDropdownItem;
