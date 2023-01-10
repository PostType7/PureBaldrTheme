import {
  mixClass,
} from "helpers/P7mixClass";
import Link from "next/link";
import { MouseEventHandler } from "react";

interface Props {
  className?: string;
  href?: string;
  isActive?: boolean;
  icon?: JSX.Element;
  onClick?: MouseEventHandler;
}
export const MenuItem: React.FC<Props> = ({
  className = "",
  href,
  children,
  isActive = false,
  icon,
  onClick,
}) => {
  return (
    <div onClick={onClick}>
      <Link href={href ? href : "#"} legacyBehavior>
        <a
          className={mixClass({
            "text-white hover:text-primary-500 pl-4 pr-16 gap-3 transition duration-150 ease-in-out":
              true,
            "flex items-stretch relative py-4": true,
            "text-primary-500 border-l-5 border-tahiti-500 pl-4": isActive,

            [className]: true,
          })}
        >
          {icon}
          {children}
        </a>
      </Link>
    </div>
  );
};
export default MenuItem;
