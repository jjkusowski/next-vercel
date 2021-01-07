interface INavLinkProps {
  label: string;
  url: string;
  id: string;
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
  const { id, url, label, color } = props;
  const clickHandler = getClickHandler(id);

  return (
    <a
      className="flex justify-start no-underline hover:text-blue"
      href={url}
      onClick={clickHandler}
    >
      {label}
    </a>
  );
};

export default NavLink;
