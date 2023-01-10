
import { mixClass } from "helpers/P7mixClass";


interface Props {
  size?: string;
  color?: string;
  bgColor?: string;
  radar?: boolean;
  filled?: boolean;
}
export const AnimatedPie: React.FC<Props> = ({
  size = "xs",
  color = "info",
  bgColor = "info",
  radar = true,
  filled = true,
}) => {
  return (
    <div
      className={mixClass({
        "rounded-full w-max": true,
        "border-blue-400": color === "info",
        "border-gray-50": color === "light",
        "border-white": color === "white",
        "p-0.5 border-2": size === "xs",
        "p-1 border-4": size === "lg",
        "p-1.5 border-4": size === "xl",
      })}
    >
      <div
        className={mixClass({
          "spinner relative": true,
          "one-way": !radar,
          "filled-ocean": filled && color === "info",
          "filled-gray": filled && color === "gray",
          "filled-white": filled && color === "white",
          "h-4 w-4": size === "xs",
          "h-9 w-9": size === "lg",
          "h-16 w-16": size === "xl",
        })}
      >
        <span className="slice1 absolute top-0 right-0 bottom-0 left-1/2 overflow-hidden"></span>
        <span className="slice2 absolute top-0 right-0 bottom-0 left-1/2 overflow-hidden"></span>
      </div>
    </div>
  );
};
