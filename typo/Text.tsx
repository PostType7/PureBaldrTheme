import { mixClass, textColorMix, textSizeMix, textWeightMix } from "helpers/P7mixClass";

interface Props {
  size?: string;
  color?: string;
  weight?: string;
  className?: string;
}
export const Text: React.FC<Props> = ({
  className = "",
  size = "",
  color = "",
  weight = "",
  children,
}) => {
  return (
    <p
      className={mixClass({
        [className]: true,
        ...textColorMix(color),
        ...textSizeMix(size),
        ...textWeightMix(weight),
      })}
    >
      {children}
    </p>
  );
};
export default Text;