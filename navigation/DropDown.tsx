import { FiMoreVertical } from "react-icons/fi";
import { Card } from "../partials";
import { useThemeStore } from "../themeStore";

interface Props {
  id: string;
  body: JSX.Element;
  action?: JSX.Element;
}
export const DropDown: React.FC<Props> = ({ id, action, body }) => {
  const dropdown = useThemeStore((state: any) => state.theme.dropdown);
  const setAttr = useThemeStore((state: any) => state.setAttr);
  return (
    <div className="relative">
      <div
        className=""
        onClick={() =>
          setAttr({
            path: "theme.dropdown",
            value: dropdown && dropdown === id ? "" : id,
          })
        }
      >
        {action ? action : <FiMoreVertical />}
      </div>
      {dropdown && dropdown === id && (
        <Card rounded="lg" className="absolute right-0 bg-white">
          {body}
        </Card>
      )}
    </div>
  );
};
export default DropDown;
