import { Hr } from "components/themes/NativeTheme/layout";

interface Props {
  menu: any;
  body: any;
}
const FullLayout: React.FC<Props> = ({ menu, body }) => {
  return (
    <div className="bg-gray-50 min-h-screen grid grid-cols-12 gap-6">
      <div className="md:block md:col-span-3 xl:col-span-2 bg-slate-100 p-6 text-gray-300 border-r hidden ">
        {menu}
      </div>
      <div className="col-span-12 md:col-span-9 xl:col-span-10 pl-6 md:pl-0 pr-6">
        <div className="pb-6">{body}</div>
        <Hr/>
        <div className="pt-6 pb-6 text-slate-500">Footer</div>
      </div>
    </div>
  );
};
export default FullLayout
