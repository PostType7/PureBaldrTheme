
import { HStack, VStack } from "components/themes/PureBaldrTheme/layout";
import { useRouter } from "next/router";

interface Props {
  menu?: any;
  body: any;
  sideBar?: any;
  topBar: any;
}
export const SidebarVerticalDashboardLayout: React.FC<Props> = ({
  menu,
  body,
  sideBar,
  topBar,
}) => {
  const router = useRouter();
  return (
    <HStack spacing="none" className="min-h-screen">
      <div className="z-20 bg-white border-r border-primary-300 relative">
        {topBar}
      </div>
      <div
        className={`bg-primary-100 flex pr-6 transform transition-transform ${
          router.query.panel
            ? "w-[83%] -translate-x-[20%]"
            : "translate-x-0 flex-1"
        }`}
      >
        {router.query.menu !== undefined || router.query.slug?.length ? (
          <div
            // tips for MAX: this chenging key push info to react to rerender this part of DOM
            // @ts-ignore
            key={router.query.menu}
            className="flex-initial w-36 md:w-52 -mr-[6rem] xl:min-w-[18rem] text-gray-300  overflow-hidden"
          >
            <div className="sticky top-16">{menu}</div>
          </div>
        ) : (
          <div className="w-6 "></div>
        )}

        <div
          className={`${
            router.query.menu !== undefined || router.query.slug?.length
              ? "translate-x-[6rem] mr-[6rem]"
              : "translate-x-0 border-r "
          } flex-1  transform transition-transform bg-gray-50  mt-3 border border-primary-200`}
        >
          <div className="container m-auto">{body}</div>
        </div>
        {sideBar && (
          <VStack
            paddingY="md"
          
            className="bg-gray-50 mt-3 border-t border-r border-primary-200 hidden md:block w-96"
          >
            {sideBar}
          </VStack>
        )}
      </div>
    </HStack>
  );
};
export default SidebarVerticalDashboardLayout;
