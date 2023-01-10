import { Color, HStack, VStack } from "components/themes/PureBaldrTheme/layout";

interface Props {
  menu: any;
  body: any;
  sideBar: any;
  topBar: any;
}
const MenuPageLayout: React.FC<Props> = ({
  menu,
  body,
  sideBar,
  topBar,
}) => {
  return (
    <VStack spacing="none" className="min-h-screen">
      <div className="z-20 bg-white border-b sticky top-0">{topBar}</div>
      <div className="bg-gray-50 gap-6 flex-1 pr-6">
        <div className="w-min md:w-72 bg-slate-100 text-gray-300 border-r">
          <div className="sticky top-16">{menu}</div>
        </div>
      </div>
    </VStack>
  );
};
export default MenuPageLayout;
