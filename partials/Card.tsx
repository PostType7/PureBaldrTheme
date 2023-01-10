import {
  bgMix,
  mixClass,
  paddingxMix,
  paddingyMix,
  roundedMix,
  shadowMix,
} from "helpers/P7mixClass";

interface Props {
  className?: string;
  truncate?: boolean;
  bg?: string;
  shadow?: string;
  spacing?: string;
  rounded?: string;
}
export const Card: React.FC<Props> = ({
  className = "",
  children,
  shadow = "lg",
  bg = "white",
  spacing = "lg",
  rounded = "2xl"
}) => {
  return (
    <div
      className={mixClass({
        "border-b": true,
        ...bgMix(bg),
        ...roundedMix(rounded),
        ...shadowMix(shadow),
        ...paddingxMix(spacing),
        ...paddingyMix(spacing),
        [className]: true,
      })}
    >
      {children}
    </div>
  );
};
export default Card;
