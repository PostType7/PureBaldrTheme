/* 
    Warning: Methods usage on this component is depreciated 
*/
/* 
    Refactor this to new practices: 
    https://dev.to/_moehab/documentexeccommand-alternative-5a55
*/
import { formGet, formSet, fieldKey } from "helpers/P7StateForm";
import { FiBold, FiItalic, FiUnderline } from "react-icons/fi";
import { VStack } from "../../../native/layout";

interface Props {
  className?: string;
  label?: string;
  form: any[];
  type?: string;
}
export const RichText: React.FC<Props> = ({
  className = "",
  label = "",
  form,
  type = "text",
}) => {
  const prevent = (e: any) => {
    e.preventDefault();
  };

  const commandProvider = (e: any, mode: string) => {
    const editor: any = document.querySelector(".editor");
    editor.contentEditable = true;
    editor.focus();
    document.execCommand(mode);
  };
  return (
    <VStack spacing="xs" className={className}>
      <label className="text-sm text-gray-600" htmlFor={fieldKey(form)}>
        {label}
      </label>
      <div>
      <div className="flex border-t">
        <div
          className="font-bold p-3"
          onMouseDown={prevent}
          onClick={(e) => commandProvider(e, "bold")}
        >
          <FiBold/>
        </div>
        <div
          className="italic p-3"
          onMouseDown={prevent}
          onClick={(e) => commandProvider(e, "italic")}
        >
          <FiItalic/>
        </div>
        <div
          className="italic p-3"
          onMouseDown={prevent}
          onClick={(e) => commandProvider(e, "underline")}
        >
          <FiUnderline/>
        </div>
        
      </div>
      <div
        className="editor border p-3 rounded bg-white text-sm"
        suppressContentEditableWarning={true}
        contentEditable={true}
        /* React.KeyboardEvent<HTMLDivElement> is missing */
        onKeyPress={(e:any) => {
          formSet(form, e.target.innerHTML)
        }}
      >
        Start typing here...
      </div>
    </div>
    </VStack>
  );
};
