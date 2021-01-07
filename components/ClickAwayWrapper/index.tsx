import useClickAwayListener from "../../hooks/useClickAwayListener";

interface IClickAwayWrapperProps {
  wrapperClasses?: string;
  children: React.ReactNode;
  callback: (e: React.MouseEvent) => void;
}

type WrapperComponent = (props: IClickAwayWrapperProps) => JSX.Element;

const ClickAwayWrapper: WrapperComponent = (props) => {
  const { children, callback, wrapperClasses } = props;
  const wrapperRef = useClickAwayListener(callback);

  return (
    <div ref={wrapperRef} className={`click-away-listener ${wrapperClasses}`}>
      {children}
    </div>
  );
};

export default ClickAwayWrapper;
