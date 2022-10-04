import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { PaginationType } from "../types/PaginationType";

const Pagination: React.FC<PaginationType> = ({
  className = "",
  pages = 0,
  page = 1,
}) => {
  const HStack: any = dynamic(
    import(`${process.env.NEXT_PUBLIC_NATIVE_THEME}/layout/HStack`)
  );
  const router = useRouter();
  return (
    <HStack className={className} justify="left" spacing="sm">
      <div className="px-3 py-1.5 hover:bg-slate-100 hover:shadow cursor-pointer hover:text-blue-800 transition duration-150 ease-in-out">
        <FiChevronLeft />
      </div>
      {Array(pages)
        .fill(0)
        .map((el: any, i: number) => {
          return page != i + 1 ? (
            <div
              key={`inactive${i}`}
              onClick={(e) => {
                e.preventDefault();
                router.push(`/backoffice/notifications/${i + 1}`);
              }}
              className="px-3 py-1.5 hover:bg-white rounded cursor-pointer hover:text-blue-700 transition duration-150 ease-in-out"
            >
              {i + 1}{" "}
            </div>
          ) : (
            <div
              key={`active${i}`}
              className="px-3 py-1.5 shadow bg-white rounded"
            >
              {i + 1}
            </div>
          );
        })}
      <div className="px-3 py-1.5 hover:bg-slate-100 hover:shadow cursor-pointer hover:text-blue-800 transition duration-150 ease-in-out">
        <FiChevronRight />
      </div>
    </HStack>
  );
};
export default Pagination;
