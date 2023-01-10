interface Props {
  onClick?: any;
}
export const ActionItem: React.FC<Props> = ({ onClick, children }) => (
  <div onClick={onClick}>{children}</div>
);
