import {
  mixClass,
  gapMix,
  bgColorMix,
  paddingyMix,
  paddingxMix,
} from "helpers/P7mixClass";

interface Props {
  spacing?: string;
  spacingY?: string;
  spacingX?: string;
  color?: string;
  className?: string;
  horizontal?: boolean;
  shadowOff?: boolean;
}
const Card: React.FC<Props> = ({
  spacing = "md",
  spacingY = "",
  spacingX = "",
  color = "",
  horizontal = false,
  children,
  shadowOff = false,
  className = "",
}) => {
  return (
    <div
      className={mixClass({
        shadow: !shadowOff,
        [className]: true,
        "rounded bg-white overflow-hidden flex": true,
        "flex-col": !horizontal,
        ...paddingyMix(spacingY ? spacingY : spacing),
        ...paddingxMix(spacingX ? spacingX : spacing),
        ...gapMix(
          horizontal
            ? spacingX
              ? spacingX
              : spacing
            : spacingY
            ? spacingY
            : spacing
        ),
        ...bgColorMix(color),
      })}
    >
      {children}
    </div>
  );
};
export default Card;
