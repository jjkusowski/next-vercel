interface ITwitterProps {
  children: React.ReactNode;
  show: boolean;
}

export type TwitterComponent = (props: ITwitterProps) => JSX.Element;

interface ITwitterUIProps {
  children: React.ReactNode;
}

export type TwitterUIComponent = (props: ITwitterUIProps) => JSX.Element;
