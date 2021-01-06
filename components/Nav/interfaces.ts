export enum NavStates {
  CLOSING,
  CLOSED,
  OPENING,
  OPEN,
}

export interface INavUIProps {
  isScrolledTop: boolean;
  navState: NavStates;
  toggleMenu: () => void;
}
