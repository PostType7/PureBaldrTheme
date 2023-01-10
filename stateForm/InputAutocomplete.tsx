import { mixClass } from "helpers/P7mixClass";
import { formGet, formSet, fieldKey } from "helpers/P7StateForm";
import { useState } from "react";
import { Color, VStack } from "../layout";
import { useThemeStore } from "../themeStore";

interface Props {
  className?: string;
  label?: string;
  form: any[];
  type?: string;
  icon?: any;
  required?: boolean;
  serchRes?: any;
  placeholder?: string;
  setSerchRes?:any;
}
export const InputAutocomplete: React.FC<Props> = ({
  className = "",
  placeholder = "",
  label = "",
  icon,
  form,
  type = "text",
  required = false,
  serchRes,
  setSerchRes,
}) => {
  const theme = useThemeStore((state: any) => state.theme);
  const [refresh, setRefresh] = useState(0);


  return (
    <VStack key={refresh} spacing="sm" className={`${className}`}>
      <div className="h-12 relative">
        <div className="absolute z-50 w-full">
          <div
            className={`${
              theme.formMessage.text || serchRes?.length > 0 ? "shadow-lg" : ""
            } rounded bg-white border text-sm overflow-hidden`}
          >
            <input
              autoComplete="off"
              required={required}
              className={mixClass({
                "outline outline-0 py-3 w-full transition duration-150 ease-in-out border-0":
                  true,
                "px-4": !icon,
                "pl-9 pr-4 pt-3.5 pb-2.5": icon,
              })}
              id={fieldKey(form)}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                formSet(form, e.target.value)
              }
              defaultValue={formGet(form)}
              type={type}
            />
            {icon ? (
              <div className="absolute top-3.5 left-3 text-gray-400 text-xl">
                {icon}
              </div>
            ) : null}

            {(theme.formMessage.text || serchRes?.length > 0) && (
              <Color
                text={`${theme.formMessage.status}`}
                bg={`${theme.formMessage.status}-light`}
                className="border-t"
              >
                {theme.formMessage.text && (
                  <div className="px-9 py-3">{theme.formMessage.text}</div>
                )}
                {serchRes.length > 0 && (
                  <>
                    {serchRes.map((el: any, i: any) => {
                      return (
                        <div
                          onClick={() => {
                            console.log(form, el.tin);
                            formSet(form, el.tin);
                            setRefresh(Math.floor(Math.random() * 1000));
                            setSerchRes([])
                          }}
                          className="px-9 py-3 border-b hover:bg-gray-100 cursor-pointer"
                        >
                          {el.name}, NIP: {el.tin}
                        </div>
                      );
                    })}
                  </>
                )}
              </Color>
            )}
          </div>
        </div>
      </div>

      {label && (
        <label
          className="block text-sm text-gray-600 text-center"
          htmlFor={fieldKey(form)}
        >
          {label}
          {required && <span> *</span>}
        </label>
      )}
    </VStack>
  );
};
export default InputAutocomplete;
