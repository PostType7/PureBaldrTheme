import {
  bgMix,
  mixClass,
  paddingxMix,
  paddingyMix,
  textColorMix,
  textHoverColorMix,
} from "helpers/P7mixClass";

interface Props {
  onClick?: any;
  className?: string;
  bg?: string;
  color?: string;
  hoverColor?: string;
  spacing?: string;
  type?:  'submit' | 'reset' | 'button';
}
export const Button: React.FC<Props> = ({
  hoverColor = "",
  color = "white",
  bg = "primary",
  onClick,
  children,
  spacing = "sm",
  className = "",
  type = "submit",
}) => (
  <button
    type={type}
    className={mixClass({
      "cursor-pointer transition duration-150 ease-in-out rounded-lg uppercase font-medium shadow-['8px 0px 0px 0px rgba(66, 68, 90, 1)']":
        true,
      ...textHoverColorMix(hoverColor),
      ...textColorMix(color),
      ...bgMix(bg),
      "px-6 py-3": spacing === "sm",
      "px-8 py-4": spacing === "lg",

      [className]: true,
    })}
    onClick={onClick}
  >
    {children}
  </button>
);
