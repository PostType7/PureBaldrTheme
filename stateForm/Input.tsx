import { formGet, formSet, fieldKey } from "helpers/P7StateForm";
import { VStack } from "../../../native/layout";

interface Props {
  className?: string;
  label?: string;
  form: any[];
  type?: string;
}
export const Input: React.FC<Props> = ({
  className = "",
  label = "",
  form,
  type = "text",
}) => {
  return (
    <VStack spacing="xs" className={className}>
      <label className="text-sm text-gray-600" htmlFor={fieldKey(form)}>
        {label}
      </label>
      <input
        className="py-3 px-4 border text-sm"
        id={fieldKey(form)}
        onChange={(e:React.ChangeEvent<HTMLInputElement>) => formSet(form, e.target.value)}
        // defaultValue={formGet(form)}
        value={formGet(form)}
        type={type}
      />
    </VStack>
  );
};
