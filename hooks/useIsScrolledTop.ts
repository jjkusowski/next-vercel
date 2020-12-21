import { useEffect, useState } from "react";

const useIsScrolledTop = (): boolean => {
  const [isScrolledTop, setIsScrolledTop] = useState(true);
  useEffect(() => {
    const onScroll = (e) => {
      setIsScrolledTop(e.target.documentElement.scrollTop <= 0);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [isScrolledTop]);

  return isScrolledTop;
};

export default useIsScrolledTop;
