import { mixClass, transition } from "helpers/P7mixClass";
import { formGet, formSet, fieldKey } from "helpers/P7StateForm";
import { VStack } from "../../NativeTheme/layout";

interface Props {
  className?: string;
  label?: string;
  form: any[];
  type?: string;
  icon?: any;
}
export const CheckBox: React.FC<Props> = ({
  className = "",
  label = "",
  icon,
  form,
  type = "text",
}) => {
  return (
    <div className="flex items-center">
      <input
        
        id="disabled-checkbox"
        type="checkbox"
        value=""
        className={mixClass({
            ["w-5 h-5 text-blue-700 bg-gray-100 rounded border-gray-300"]:true,
            ...transition(),
        })}
      />
      <label
        htmlFor="disabled-checkbox"
        className="ml-2 text-sm font-medium"
      >
        Example checkbox
      </label>
    </div>
  );
};
