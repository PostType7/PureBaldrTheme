import { mixClass, roundedMix } from "helpers/P7mixClass";

interface Props {
  size?: string;
  rounded?: string;
  className?: string;
  url?: string | URL;
  fill?: string;
  ratio?: string;
}

export const Image: React.FC<Props> = ({
  className = "",
  size = "",
  rounded = "full",
  url = "",
  fill = "",
  ratio = "",
}) => {
  const sizeConditions = (value: string) => {
    return {
      "w-9 h-9 min-w-9 min-h-9": value === "sm",
      "w-12 h-12 min-w-12 min-h-12": value === "md",
      "w-16 h-16 min-w-16 min-h-16": value === "lg",
      "w-24 h-24 min-w-24 min-h-24": value === "xl",
    };
  };
  return (
    <div
      className={mixClass({
        "bg-red-200 flex items-center justify-center overflow-hidden": true,
        ...roundedMix(rounded),
        ...sizeConditions(size),
        [className]: true,
      })}
    >
      {url ? (
        <img
          className={mixClass({
            ["origin-center"]: true,
            ...sizeConditions(size),
            "w-full h-full": size === "full",
            "object-contain": fill === "contain",
            "object-cover": fill === "cover",
            "aspect-auto": ratio === "auto",
          })}
          width={size === "md" ? 64 : ""}
          height={size === "md" ? 64 : ""}
          // @ts-ignore
          src={url}
        />
      ) : (
        <span>IMG</span>
      )}
    </div>
  );
};
