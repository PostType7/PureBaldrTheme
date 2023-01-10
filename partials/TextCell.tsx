import { mixClass } from "helpers/P7mixClass";
import { Text } from "components/themes/PureBaldrTheme/typo";

interface Props {
  first?: string;
  firstSize?: string;
  firstColor?: string;
  secondSize?: string;
  second?: string;
  className?: string;
  truncate?: boolean;
  secondWeight?: string;
}
export const TextCell: React.FC<Props> = ({
  first,
  second,
  className = "",
  firstSize = "xs",
  firstColor = "",
  secondSize = "sm",
  truncate = false,
  secondWeight = "",
}) => {
  return (
    <div
      className={mixClass({
        "flex flex-col": true,
        "gap-3":firstSize==='2xl',
        "gap-3.5":firstSize==='3xl',
        'gap-2.5': firstSize!==('2xl' || '3xl'),
        [className]: true,
      })}
    >
      
      <Text
        size={firstSize}
        color={firstColor}
        className={mixClass({
          "font-bold": firstSize == ("2xl" || "3xl"),
          truncate: truncate,
        })}
      >
        {first}
      </Text>

      <Text
        size={secondSize}
        className={mixClass({
          truncate: truncate,
          "uppercase font-bold": secondWeight == "upbold",
        })}
        color="dark"
      >
        {second}
      </Text>
    </div>
  );
};
export default TextCell;
