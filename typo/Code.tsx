import { bgMix, mixClass, paddingxMix, paddingyMix, textColorMix, textSizeMix } from "helpers/P7mixClass";

interface Props {
  className?: string;
  border?:boolean;
  size?: string;
  spacing?: string;
  color?: string;
  bg?: string;
}
export const Code: React.FC<Props> = ({
  className = "",
  border=false,
  children,
  size="",
  color="success",
  bg="",
  spacing="md",
}) => {
  return (
    <pre
      className={mixClass({
        'bg-green-50':!bg,
        'border':border,
        'font-mono rounded':true,
        ...textSizeMix(size),
        ...textColorMix(color),
        ...bgMix(bg),
        ...paddingyMix(spacing),
        ...paddingxMix(spacing),
        [className]: true,
      })}
    >
      {children}
    </pre>
  );
};
