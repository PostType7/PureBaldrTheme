import {
  mixClass,
  paddingxMix,
  paddingyMix,
  textColorMix,
  textHoverColorMix,
} from "helpers/P7mixClass";
import Link from "next/link";

interface Props {
  className?: string;
  href?: string | any;
  onClick?: any;
  color?: string;
  hoverColor?: string;
  line?: string;
  spacing?: string;
  paddingX?: string;
  paddingY?: string;
}
export const NavItem: React.FC<Props> = ({
  className = "",
  href,
  onClick,
  children,
  color = "primary",
  hoverColor = "primary-dark",
  spacing = "",
  paddingX = "",
  paddingY = "",
}) => {
  return (
    <Link href={href ? href : "#"} legacyBehavior>
      <a
        className={mixClass({
          " cursor-pointer font-medium transition duration-150 ease-in-out": true,
          ...textHoverColorMix(hoverColor),
          ...textColorMix(color),
          ...paddingyMix(paddingY ? paddingY : spacing),
          ...paddingxMix(paddingX ? paddingX : spacing),
          [className]: true,
        })}
        onClick={onClick}
      >
        {children}
      </a>
    </Link>
  );
};
export default NavItem;
