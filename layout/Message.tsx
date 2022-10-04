import {
  bgColorMix,
  mixClass,
  textColorMix,
} from "helpers/P7mixClass";
import { FiX } from "react-icons/fi";
import { useThemeStore } from "../themeStore";

export const Message: React.FC = () => {
  const theme = useThemeStore((state: any) => state.theme);
  const setAttr = useThemeStore((state: any) => state.setAttr);

  return theme.message.text ? (
    <div className="sticky -mx-6 top-12 border-b bg-slate-100 z-20">
      <div
        className={mixClass({
          " p-6 flex justify-between items-center bg-opacity-10": true,
          ...bgColorMix(theme.message.status),
        })}
      >
        <div
          className={mixClass({
            "brightness-50": true,
            ...textColorMix(theme.message.status),
          })}
        >
          {theme.message.text}
        </div>
        <div
          className={mixClass({
            "brightness-50 text-xl rounded p-1.5 bg-slate-200 cursor-pointer bg-opacity-10 hover:bg-opacity-20":
              true,
            ...textColorMix(theme.message.status),
            ...bgColorMix(theme.message.status),
          })}
          onClick={()=>{
            setAttr({path:'theme.message.text',value:''})
          }}
        >
          <FiX />
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};
export default Message
