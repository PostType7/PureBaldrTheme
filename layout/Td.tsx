
import { mixClass, paddingxMix, paddingyMix } from "helpers/P7mixClass";

interface Props {
  className?: string;
  spacing?: string;
  id?: number;
}
export const Td: React.FC<Props> = ({
  className = "",
  spacing = "md",
  children,
  id = 0,
}) => {
  return (
    <td
      className={mixClass({
        "text-left border-b font-normal": true,
        [className]: true,
        ...paddingxMix(spacing),
        ...paddingyMix(spacing),
      })}
    >
     {children}
    </td>
  );
};
