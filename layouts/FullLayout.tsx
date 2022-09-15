interface Props {
  menu: any;
  body: any;
}
export const FullLayout: React.FC<Props> = ({ menu, body }) => {
  return (
    <div className="bg-gray-50 h-screen grid grid-cols-12 gap-6">
      <div className="col-span-2 bg-slate-100 p-6 text-gray-300 border-r">
        {menu}
      </div>
      <div className="col-span-10 pr-6">{body}</div>
    </div>
  );
};
