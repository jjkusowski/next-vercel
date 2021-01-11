export interface ICountry {
  displayName: string;
  dataId: string;
  href: string;
  cmsEnabled?: boolean;
}

export type Countries = ICountry[];
