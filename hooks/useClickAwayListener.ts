import { useEffect, useRef } from "react";

const useClickAwayListener = (
  callback: (e: React.MouseEvent) => void
): React.MutableRefObject<HTMLDivElement> => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        typeof callback === "function" &&
        !ref?.current?.contains(event.target)
      ) {
        callback(event);
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleClickOutside);
    };
  }, [ref]);

  return ref;
};

export default useClickAwayListener;
