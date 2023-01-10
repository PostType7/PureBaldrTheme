// import { formatDistance, subDays } from "date-fns";
interface Props {
  date: any;
}
export const DateCell: React.FC<Props> = ({ date }) => {
  return (
    <>
      {/* {date
        ? formatDistance(subDays(new Date(date), 3), new Date(), {
            addSuffix: true,
          })
        : <span className="text-gray-300">Wrong date format</span>} */}
    </>
  );
};
export default DateCell;
