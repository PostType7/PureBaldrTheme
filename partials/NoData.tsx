import { mixClass, paddingxMix, paddingyMix } from "helpers/P7mixClass";
import { FiInfo } from "react-icons/fi";
import { HStack } from "../layout";
import { Text } from "components/themes/PureBaldrTheme/typo";

interface Props {
  className?: string;
  variant?: boolean;
  spacing?: string;
}
export const NoData: React.FC<Props> = ({
  className = "",
  spacing = "xl",
  variant,
}) => {
  return (
    <HStack
      spacing="sm"
      className={mixClass({
        "flex items-center justify-center w-full h-full": true,
        ...paddingxMix(spacing),
        ...paddingyMix(spacing),
        [className]: true,
      })}
    >
      <FiInfo />
      <Text weight="bold" size="sm">
        There is no data to display
      </Text>
    </HStack>
  );
};
export default NoData;
