import { mixClass } from "helpers/P7mixClass";
import { Text } from "components/themes/PureBaldrTheme/typo";

interface Props {
  first?: string;
  second?: string;
  className?: string;
  truncate?: boolean;
  color?:string
}
export const TextCellCardHeader: React.FC<Props> = ({
  first,
  second,
  className = "",
  truncate = false,
  color = "primary"
}) => {
  return (
    <div className={className}>
      <Text
        size="xl"
        color={color}
        className={mixClass({
          "font-bold leading-5": true,
          truncate: truncate,
        })}
      >
        {first}
      </Text>

      <Text
        size="xs"
        className={mixClass({
          "leading-4": true,
          truncate: truncate,
        })}
      >
        {second}
      </Text>
    </div>
  );
};
export default TextCellCardHeader;
