import { useWindowWidth } from "@react-hook/window-size";

const useIsMobile = (): boolean => {
  const winWidth = useWindowWidth();

  return winWidth < 1024;
};

export default useIsMobile;
