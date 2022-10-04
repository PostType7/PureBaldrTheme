import { mixClass } from "helpers/P7mixClass";
import { formGet, formSet, fieldKey } from "helpers/P7StateForm";
import { VStack } from "../../NativeTheme/layout";
import { Text } from "components/themes/NativeTheme/typo";

interface Props {
  className?: string;
  label?: string;
  form: any[];
  type?: string;
  icon?: any;
  required?:boolean;
}
export const Input: React.FC<Props> = ({
  className = "",
  label = "",
  icon,
  form,
  type = "text",
  required = false,
}) => {
  return (
    <VStack spacing="xs" className={className}>
      {label && (
        <label className="text-sm text-gray-600" htmlFor={fieldKey(form)}>
          {label}{required &&  <span> *</span>}
        </label>
      )}

      <div className="relative">
        <input
          required={required}
          className={mixClass({
            "border text-sm py-3 w-full transition duration-150 ease-in-out outline-gray-300":
              true,
            "px-4": !icon,
            "pl-9 pr-4": icon,
          })}
          id={fieldKey(form)}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            formSet(form, e.target.value)
          }
          defaultValue={formGet(form)}
          // value={formGet(form)}
          type={type}
        />
        {icon ? (
          <div className="absolute top-3.5 left-3 text-gray-400">{icon}</div>
        ) : null}
      </div>
    </VStack>
  );
};
