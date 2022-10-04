import { HStack } from "components/themes/NativeTheme/layout";
import { mixClass, transition } from "helpers/P7mixClass";

interface Props {
  color?: string;
  icon?: any;
  className?: string;
  href?: string;
  onClick?: any;
}
const Button: React.FC<Props> = ({
  className = "",
  color = "primary",
  icon,
  children,
  onClick,
}) => (
  <button
    onClick={onClick}
    title="Button"
    aria-label="Button"
    className={mixClass({
      ["rounded shadow-md inline-block px-6 py-3.5 font-medium text-xs hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"]:
        true,
      [className]: true,
      "bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-800 text-white":
        color == "primary",
      "bg-slate-500 hover:bg-slate-600 focus:bg-slate-600 active:bg-slate-700 text-white":
        color == "secondary",
      "bg-slate-50 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-200 text-gray-600":
        color == "light",
      ...transition(),
    })}
  >
    <HStack spacing="sm">
      {icon ? icon : null} {children && <div className="flex-1">{children}</div>}
    </HStack>
  </button>
);
export default Button;
