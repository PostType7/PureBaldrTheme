import { HStack } from "components/themes/PureBaldrTheme/layout";
import { Text } from "components/themes/PureBaldrTheme/typo";
import {
  mixClass,
  textColorMix,
} from "helpers/P7mixClass";
interface Props {
  icon?: any;
  text?: string;
  color?: string;
  size?:string;
  mobile?:boolean;

}
export const IconText: React.FC<Props> = ({
  icon,
  text,
  color = "",
  size="",
  mobile=false

}) => {
  const transition = "ease-out transition-opacity left-20 md:left-0 absolute md:relative whitespace-nowrap opacity-0 md:opacity-100 hover:opacity-100";
  const noTransition = "hidden md:block"
  return (
     <HStack spacing="sm" className="">
      <div
        className={mixClass({
          'pt-0.5': size="sm",
          ...textColorMix(color),
        })}
      >
        {icon ? icon : null}
      </div>
      <Text className={mobile ? `${transition} whitespace-nowrap` : ""} size={size} color={color}>{text}</Text>
    </HStack>
  );
};
export default IconText
