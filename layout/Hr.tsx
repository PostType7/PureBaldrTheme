import { mixClass } from "helpers/P7mixClass";

interface Props {
  className?: string;
  vertical?: boolean;
  spacing?: string;
}
export const Hr: React.FC<Props> = ({ vertical = false, className = "", spacing="" }) => {
  return (
    <div
      className={mixClass({
        "border-t": !vertical,
        "border-r w-px h-full self-normal": vertical,
        "pb-10 mt-10": spacing==='xl',
        [className]: true,
      })}
    ></div>
  );
};
// export default HStack;
