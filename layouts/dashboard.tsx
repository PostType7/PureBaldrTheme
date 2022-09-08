
interface Props {
  menu:any,
  body:any,
  sideBar:any
}
const DashboardLayout: React.FC<Props> = ({
    menu,
    body,
    sideBar,
}) => {
  return (
    <div className="bg-gray-50 h-screen grid grid-cols-8 gap-6">
      <div className="bg-teal-900 p-6 text-gray-300">
        {menu}
      </div>
      <div className="col-span-5">
        {body}
      </div>
      <div className="col-span-2 pr-6">
        {sideBar}
      </div>
    </div>
  );
};
export default DashboardLayout;
