import { GridClasses } from "../../lib/tailwind/interfaces";
import { Col, GridItem, IGridProps, Row } from "./interfaces";

const handleNumberClassName = (type) => (gridNumber) => {
  return `${GridClasses.Grid}-${type}-${gridNumber}`;
};

const handleObjectClassName = (type) => (gridObj) => {
  const breakpointClasses = Object.entries(gridObj).map(
    ([breakpoint, gridNum]) => {
      return `${breakpoint}:${GridClasses.Grid}-${type}-${gridNum}`;
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

  return `${GridClasses.Grid} ${rowClass} ${colClass}`;
};

const Grid = (props: IGridProps): JSX.Element => {
  const { rows, cols, children, className = "" } = props;

  const classes = generateClassNames(rows, cols);

  const finalClasses = className.concat(classes);

  return <div className={finalClasses}>{children}</div>;
};

export default Grid;
