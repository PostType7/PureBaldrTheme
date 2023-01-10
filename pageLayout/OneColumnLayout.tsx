interface Props {
  body: any;
  topBar: any;
}
export const OneColumnLayout: React.FC<Props> = ({ body, topBar }) => {
  return (
    <div className="container mx-auto">
      {topBar}
      {body}
    </div>
  );
};
export default OneColumnLayout;
