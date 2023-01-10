import {
  bgMix,
  mixClass,
  paddingxMix,
  paddingyMix,
  shadowMix,
} from "helpers/P7mixClass";

interface Props {
  className?: string;
  truncate?: boolean;
  bg?: string;
  shadow?: string;
  spacing?: string;
  paddingX?: string;
  paddingY?: string;
  
}
export const Card: React.FC<Props> = ({
  className = "",
  children,
  shadow = "none",
  bg = "gray-light",
  spacing = "lg",
  paddingX,
  paddingY,
}) => {
  return (
    <div
      className={mixClass({
        "border-b rounded-lg": true,
        ...bgMix(bg),
        ...shadowMix(shadow),
        ...paddingxMix(paddingX ? paddingX : spacing),
        ...paddingyMix(paddingY ? paddingY : spacing),
        [className]: true,
      })}
    >
      {children}
    </div>
  );
};
export default Card;
