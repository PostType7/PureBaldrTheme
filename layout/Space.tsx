import { mixClass } from "helpers/P7mixClass";

interface Props {
  className?: string;
  size?: string;
}
export const Space: React.FC<Props> = ({ className = "", size = "" }) => {
  return (
    <div
      className={mixClass({
        "w-12 h-12": size === "xxl",
        "w-9 h-9": size === "xl",
        [className]: true,
      })}
    ></div>
  );
};
