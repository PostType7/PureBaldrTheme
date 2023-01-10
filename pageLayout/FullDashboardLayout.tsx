import { HStack, VStack } from "components/themes/PureBaldrTheme/layout";
// import { Header } from "pages/_app";

interface Props {
  menu: any;
  body: any;
  topBar: any;
}
const FullDashboardLayout: React.FC<Props> = ({ menu, body, topBar }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="z-20 bg-white sticky top-0 border-b flex-initial">
        {/* <Header /> */}
      </div>
      <div className="bg-gray-50 grid grid-cols-12 gap-6 flex-1 pr-6">
        <div className="w-fit lg:w-full lg:col-span-2 bg-slate-100 text-gray-300 border-r h-full">
          {menu}
        </div>
        
          <VStack paddingY="md" className="col-span-11 lg:col-span-10">
         
            {body}
          
          </VStack>
       
      </div>
    </div>
  );
};
export default FullDashboardLayout;
