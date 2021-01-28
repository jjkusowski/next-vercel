interface INavLinkProps {
  label: string;
  href: string;
  id: string;
  vanityUrl?: boolean;
  color?: string;
}

const onClickHandlers = {
  "join-meeting": (e) => {
    e.preventDefault();
    alert("clicked!");
  },
};

const nullClick = (e) => {
  e.preventDefault();
};

const getClickHandler = (id: string) => onClickHandlers[id] || nullClick;

const NavLink = (props: INavLinkProps): JSX.Element => {
  const { id, href, label, color, vanityUrl = false } = props;
  const clickHandler = getClickHandler(id);

  const anchorProps = vanityUrl
    ? {
        onClick: clickHandler,
      }
    : {};

  return (
    <a
      className="flex justify-start no-underline hover:text-blue"
      href={href}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...anchorProps}
    >
      {label}
    </a>
  );
};

export default NavLink;
