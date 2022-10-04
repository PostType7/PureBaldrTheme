import { mixClass } from "helpers/P7mixClass";
import { Text } from "components/themes/NativeTheme/typo";

interface Props {
  title?: string;
  titleSize?: string;
  subTitle?: string;
  className?: string;
  truncate?:boolean;
}
export const TextCell: React.FC<Props> = ({
  title,
  subTitle,
  className = "",
  titleSize = "md",
  truncate = false,
}) => {
  return (
    <div
      className={mixClass({
        "grid": true,
        "gap-3": titleSize == "xxl",
        [className]: true,
      })}
    >
      {titleSize == "md" ? (
        <Text size="md" className={mixClass({
          "leading-5 pb-1.5": true,
          "truncate":truncate
        })}>
          {title}
        </Text>
      ) : null}
      {titleSize == "xxl" ? <Text size="xxl">{title}</Text> : null}
      <Text size="sm" className={mixClass({
          "leading-4": true,
          "truncate":truncate
        })} color="dark">
        {subTitle}
      </Text>
    </div>
  );
};
