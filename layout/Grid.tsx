import {
  mixClass,
  gapMix,
  paddingyMix,
  paddingxMix,
} from "helpers/P7mixClass";

interface Props {
  spacing?: string;
  className?: string;
  paddingY?: string;
  paddingX?: string;
}
export const Grid: React.FC<Props> = ({
  className = "",
  spacing = "md",
  paddingY = "",
  paddingX = "",
  children,
}) => {
  return (
    <div
      className={mixClass({
        grid: true,
        [className]: true,
        ...gapMix(spacing),
        ...paddingyMix(paddingY),
        ...paddingxMix(paddingX),
      })}
    >
      {children}
    </div>
  );
};
