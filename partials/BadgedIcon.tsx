import {
  bgMix,
  mixClass,
  textSizeMix,
} from "helpers/P7mixClass";

interface Props {
  className?: string;
  icon: JSX.Element;
  bg?: string;
  size?: string;
  badge: string
}
export const BadgedIcon: React.FC<Props> = ({
  className = "",
  bg = "primary",
  icon,
  size = "2xl",
  badge
}) => {
  return (
    <div
      className={mixClass({
        "relative pr-3.5": true,
        ...textSizeMix(size),
        [className]: true,
      })}
    >
      {icon}
      <div
        className={mixClass({
          "top-0.5 right-0 absolute rounded-full w-5 h-5 text-white text-xs font-bold uppercase flex items-center justify-center": true,
          ...bgMix(bg),
        })}
      >{badge}</div>
    </div>
  );
};
export default BadgedIcon;
