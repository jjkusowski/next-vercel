import React from "react";
import { GridClasses } from "../../lib/tailwind/interfaces";
import { Col, GridItem, IGridProps, Row } from "./interfaces";

const handleNumberClassName = (type) => (gridNumber) => {
  return `${GridClasses.Grid} ${GridClasses.Grid}-${type}-${gridNumber}`;
};

const handleObjectClassName = (type) => (gridObj) => {
  const breakpointClasses = Object.entries(gridObj).map(
    ([breakpoint, gridNum]) => {
      if (gridNum === 0) {
        // eslint-disable-next-line no-param-reassign
        gridNum = "none";
      }
      const gridClass = `${breakpoint}:${GridClasses.Grid}`;

      if (breakpoint === "xs") {
        return `${GridClasses.Grid} ${GridClasses.Grid}-${type}-${gridNum}`;
      }

      return `${gridClass} ${gridClass}-${type}-${gridNum}`;
    }
  );

  return breakpointClasses.join(" ");
};

const handlers: {
  [key: string]: (type: GridClasses) => (gridItem: GridItem) => string;
} = {
  number: handleNumberClassName,
  object: handleObjectClassName,
};

const getClassNameHandler = (argType: GridItem, gridItemType: GridClasses) => {
  const typeString = typeof argType;
  return handlers[typeString](gridItemType);
};

const generateClassNames = (rows: Row, cols: Col): string => {
  const rowClassNameGenerator = getClassNameHandler(rows, GridClasses.Rows);
  const colClassNameGenerator = getClassNameHandler(cols, GridClasses.Cols);

  const rowClass = rowClassNameGenerator(rows);
  const colClass = colClassNameGenerator(cols);

  return `${rowClass} ${colClass}`;
};

const Grid = (props: IGridProps): JSX.Element => {
  const { rows, cols, children, className = "", component = "div" } = props;

  const classes = generateClassNames(rows, cols);

  const finalClasses = className.concat(" ", classes);

  return React.createElement(
    component,
    {
      className: finalClasses,
    },
    children
  );
};

export default Grid;
