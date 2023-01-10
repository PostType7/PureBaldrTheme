import { mixClass, gapMix, paddingxMix, paddingyMix } from "helpers/P7mixClass";
import { HStackType } from "../types";

export const HStack: React.FC<HStackType> = ({
  className = "",
  spacing = "md",
  mobile = false,
  children,
  paddingX = "",
  paddingY = "",
}) => {
  return (
    <div
      className={mixClass({
        flex: true,
        "flex-col md:flex-row": mobile,
        [className]: true,
        ...paddingxMix(paddingX),
        ...paddingyMix(paddingY),
        ...gapMix(spacing),
      })}
    >
      {children}
    </div>
  );
};
export default HStack;
