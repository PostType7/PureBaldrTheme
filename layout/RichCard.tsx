import {
  mixClass,
  gapMix,
  bgColorMix,
  paddingyMix,
} from "helpers/P7mixClass";

interface Props {
  spacing?: string;
  width?: string;
  color?: string;
  className?: string;
  header?: any; // TODO NODE
  footer?: any; // TODO NODE
  horizontal?: boolean;
}
const RichCard: React.FC<Props> = ({
  className = "",
  spacing = "md",
  color = "",
  horizontal = false,
  children,
  header,
  footer,
}) => {
  return (
    <div
      className={mixClass({
        "rounded shadow bg-white overflow-hidden": true,
        [className]: true,
        ...bgColorMix(color),
      })}
    >
      {header ? (
        <div
          className={mixClass({
            "border-b p-4": true,
          })}
        >
          {header}
        </div>
      ) : null}
      <div
        className={mixClass({
          // "h-full":true,
          "px-4": spacing != "none",
          "flex": horizontal,
          ...paddingyMix(spacing),
          ...gapMix(spacing),
        })}
      >
        {children}
      </div>
      {footer ? (
        <div
          className={mixClass({
            "border-t p-4": true,
          })}
        >
          {footer}
        </div>
      ) : null}
    </div>
  );
};
export default RichCard;
