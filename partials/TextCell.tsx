import { mixClass } from "helpers/P7mixClass";
import { Text } from "components/themes/NativeTheme/typo";

interface Props {
  title?: string;
  titleSize?: string;
  subTitle?: string;
  className?: string;
}
export const TextCell: React.FC<Props> = ({
  title,
  subTitle,
  className = "",
  titleSize = "md",
}) => {
  return (
    <div
      className={mixClass({
        "flex flex-col": true,
        "gap-3": titleSize == "xxl",
        [className]: true,
      })}
    >
      {titleSize == "md" ? (
        <Text size="md" className="leading-5 pb-1.5">
          {title}
        </Text>
      ) : null}
      {titleSize == "xxl" ? <Text size="xxl">{title}</Text> : null}
      <Text size="sm" className="leading-4" color="dark">
        {subTitle}
      </Text>
    </div>
  );
};
