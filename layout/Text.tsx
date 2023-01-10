import { mixClass } from "helpers/P7mixClass";

interface Props {
  className?: string;
}
export const Text: React.FC<Props> = ({ className = "", children }) => {
  return (
    <div
      className={mixClass({
        "": true,
        [className]: true,
      })}
    >
      {children}
    </div>
  );
};
