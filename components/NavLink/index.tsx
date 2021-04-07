interface INavLinkProps {
  label: string;
  href: string;
  id: string;
  vanityUrl?: boolean;
  hoverClass?: string;
}

const onClickHandlers = {};

const nullClick = (e) => {
  e.preventDefault();
};

const getClickHandler = (id: string) => onClickHandlers[id] || nullClick;

const NavLink = (props: INavLinkProps): JSX.Element => {
  const {
    id,
    href,
    label,
    hoverClass = "text-blue",
    vanityUrl = false,
  } = props;
  const clickHandler = getClickHandler(id);

  const anchorProps = vanityUrl
    ? {
        onClick: (e) => clickHandler(e),
      }
    : {};

  return (
    <a
      className={`flex justify-start no-underline hover:${hoverClass}`}
      href={href}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...anchorProps}
    >
      {label}
    </a>
  );
};

export default NavLink;
