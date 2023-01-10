import { VStack } from "components/themes/PureBaldrTheme/layout";

interface Props {
  menu: any;
  body: any;
  sideBar: any;
  topBar: any;
}
export const SidebarDashboardLayout: React.FC<Props> = ({
  menu,
  body,
  sideBar,
  topBar,
}) => {
  return (
    <VStack spacing="none" className="min-h-screen">
      <div className="z-20 bg-white border-b sticky top-0">{topBar}</div>
      <div className="bg-gray-50 flex gap-6 flex-1 pr-6">
        
          <div className="w-16 md:w-72 bg-slate-100 text-gray-300 border-r transition-all">
            <div className="sticky top-16">{menu}</div>
          </div>
        
        <VStack paddingY="md" className="flex-1">
          {body}
        </VStack>
        <VStack paddingY="md" className="hidden md:block w-96">
          {sideBar}
        </VStack>
      </div>
    </VStack>
  );
};
export default SidebarDashboardLayout;
