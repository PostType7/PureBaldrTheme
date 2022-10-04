interface Props {
  className?: string;
  value: string;
  form: [string, any, any];
}
export const Option: React.FC<Props> = ({
  className = "",
  children,
  value = "",
  form,
}) => {
  return (
    <label
      className={`${className} ${
        form[1][form[0]] == value ? "bg-blue-50" : "bg-white"
      } flex items-center border-t  cursor-pointer`}
      htmlFor={`${form[0]}_${value}`}
    >
      <input
        className="my-3 ml-3 w-4 h-4"
        id={`${form[0]}_${value}`}
        type="radio"
        defaultValue={value}
        checked={form[1][form[0]]===value}
        onClick={(e: any) => {
          form[1][form[0]] = value
          form[2](Object.assign({}, form[1]));
        }}
      />
      <div className="p-3">{children}</div>
    </label>
  );
};
