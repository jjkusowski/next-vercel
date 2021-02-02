import {
  SliceComponent,
  SliceComponentsMap,
  SliceParentComponent,
} from "../../common/interfaces";
import BlockBottom from "./BlockBottom";
import BlockSplit from "./BlockSplit";

const blockMap: SliceComponentsMap = {
  image_bottom: BlockBottom,
  image_right: BlockSplit,
  image_left: BlockSplit,
};

const getComponentBySliceType = (sliceType: string): SliceComponent =>
  blockMap[sliceType];

const Block: SliceParentComponent = (props) => {
  const { slice_label } = props;

  const Component = getComponentBySliceType(slice_label);

  return <Component {...props} />;
};

export default Block;
