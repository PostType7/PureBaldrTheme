import { TextCellCardHeader } from ".";
import { Color } from "../layout";

interface Props {
  title?: string;
  description?: string;
  rightActionSlot?: JSX.Element;
  color?: string;
}
export const CardHeader: React.FC<Props> = ({
  rightActionSlot,
  title = "Title",
  description = "Description",
  color="primary"
}) => {
  return (
    <div className="flex items-center relative py-6 pr-6 bg-carbon-50 rounded-t-2xl">
      <Color bg={color} className="w-1.5 h-12 mr-5">
        &nbsp;
      </Color>
      <TextCellCardHeader
        className="flex-1"
        first={title}
        second={description}
      />
      {rightActionSlot ? rightActionSlot : null}
    </div>
  );
};
export default CardHeader;
