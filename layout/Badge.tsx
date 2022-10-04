import { mixClass, gapMix, bgColorMix } from "helpers/P7mixClass";

interface Props {
  spacing?: string;
  className?: string;
  text?: string;
  icon?: any;
  bgColor?: string;
}
const Badge: React.FC<Props> = ({
  className = "",
  spacing = "sm",
  bgColor = "primary",
  text,
  icon,
}) => {
  return (
    <div
      className={mixClass({
        ["flex items-center text-white rounded-full py-1 px-3 text-sm"]: true,
        [className]: true,
        ...gapMix(spacing),
        ...bgColorMix(bgColor),
      })}
    >
      {text ? <div>{text}</div> : null}
      {icon ? <div>{icon}</div> : null}
    </div>
  );
};
export default Badge
