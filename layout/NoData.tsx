import { mixClass } from "helpers/P7mixClass";

interface Props {
  className?: string;
}
export const NoData: React.FC<Props> = ({ className = "" }) => {
  return (
    <div
      className={mixClass({
        "border py-3 px-4 bg-gray-100 text-gray-400": true,
        [className]: true,
      })}
    >
      No data found.
    </div>
  );
};
