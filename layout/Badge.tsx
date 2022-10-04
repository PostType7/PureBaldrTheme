import { mixClass, gapMix, bgColorMix, textSizeMix } from "helpers/P7mixClass";

interface Props {
  size?: string;
  className?: string;
  text?: string;
  icon?: any;
  color?: string;
}
const Badge: React.FC<Props> = ({
  className = "",
  size = "sm",
  color = "primary",
  text,
  icon,
}) => {
  return (
    <div
      className={mixClass({
        ["flex items-center rounded-full py-1 px-3"]: true,
        [className]: true,
        'text-white' : color != 'light',
        'text-dark' : color == 'light',
        ...textSizeMix(size),
        ...gapMix(size),
        ...bgColorMix(color),
      })}
    >
      {text ? <div>{text}</div> : null}
      {icon ? <div>{icon}</div> : null}
    </div>
  );
};
export default Badge
