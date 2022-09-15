import { HStack } from "components/native/layout";
import { TextMD } from "components/native/typo";
import { mixClass, textColorConditions } from "helpers/P7mixClass";

interface Props {
  icon?: any;
  text?: string;
  color?: string;
}
export const SingleIconInfo: React.FC<Props> = ({
  icon,
  text,
  color = "success",
}) => {
  return (
    <HStack spacing="sm">
      <div
        className={mixClass({
          ...textColorConditions(color),
        })}
      >
        {icon ? icon : null}
      </div>
      <TextMD color="success">{text}</TextMD>
    </HStack>
  );
};
