import { HStack, VStack } from "components/themes/NativeTheme/layout";

interface Props {
  menu: any;
  body: any;
  topBar: any;
}
const SidebarDashboardLayout: React.FC<Props> = ({
  menu,
  body,
  topBar,
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="z-20 bg-white sticky top-0 border-b py-3 p-6 flex-initial">
        <HStack className="justify-between items-center">{topBar}</HStack>
      </div>
      <div className="bg-gray-50 grid grid-cols-12 gap-6 flex-1">
        <div className="w-fit lg:w-full lg:col-span-2 bg-slate-100 py-6 text-gray-300 border-r h-full">
          {menu}
        </div>
        <VStack spacingY="md" className="col-span-11 lg:col-span-10 pr-6">
          {body}
        </VStack>
      </div>
    </div>
  );
};
export default SidebarDashboardLayout;
