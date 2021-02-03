import { ReactHTML } from "react";
import { IWrapperComponentProps } from "../../common/layouts/interfaces";

interface XSResponsiveGrid {
  xs: number;
}

interface SMResponsiveGrid {
  sm: number;
}

interface MDResponsiveGrid {
  md: number;
}

interface LGResponsiveGrid {
  lg: number;
}

interface XLResponsiveGrid {
  xl: number;
}

type ResponsiveGrid =
  | XSResponsiveGrid
  | SMResponsiveGrid
  | MDResponsiveGrid
  | LGResponsiveGrid
  | XLResponsiveGrid;

export type Row = number | ResponsiveGrid;
export type Col = number | ResponsiveGrid;

export interface IGridProps extends IWrapperComponentProps {
  rows: Row;
  cols: Col;
  component?: keyof ReactHTML;
}

export type GridItem = Row | Col;
