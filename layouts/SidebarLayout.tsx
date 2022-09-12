
interface Props {
  menu:any,
  body:any,
  sideBar:any
}
export const SidebarLayout: React.FC<Props> = ({
    menu,
    body,
    sideBar,
}) => {
  return (
    <div className="bg-gray-50 h-screen grid grid-cols-12 gap-6">
      <div className="col-span-2 bg-slate-100 p-6 text-gray-300 border-r">
        {menu}
      </div>
      <div className="col-span-7">
        {body}
      </div>
      <div className="col-span-3 pr-6">
        {sideBar}
      </div>
    </div>
  );
};
