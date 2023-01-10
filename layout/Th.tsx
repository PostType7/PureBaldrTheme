import {
  mixClass,
  paddingxMix,
  paddingyMix,
} from "helpers/P7mixClass";

interface Props {
  className?: string;
  spacing?: string;
  decorate?: boolean;
}
export const Th: React.FC<Props> = ({
  className = "",
  spacing = "md",
  decorate = false,
  children,
  
}) => {
  return (
    <th
      className={mixClass({
        "border-b-2 italic": decorate,
        "text-left border-b font-normal": true,
        [className]: true,
        ...paddingxMix(spacing),
        ...paddingyMix(spacing),
      })}
    >
      {children}
    </th>
  );
};
