import { mixClass, bgMix, textColorMix } from "helpers/P7mixClass";

interface Props {
  bg?: string;
  text?: string;
  className?: string;
}
export const Color: React.FC<Props> = ({
  bg = "",
  text = "",
  className = "",
  children,
}) => {
  return (
    <div
      className={mixClass({
        [className]: className,
        ...bgMix(bg),
        ...textColorMix(text),
      })}
    >
      {children}
    </div>
  );
};
