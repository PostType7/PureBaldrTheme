import { HStack, Image } from "components/themes/PureBaldrTheme/layout";
import { TextCell } from ".";



interface Props {
  title?: string;
  subTitle?: string;
  url?: string | URL;
  size?: string;
}
export const Avatar: React.FC<Props> = ({ title, subTitle, url, size }) => {
  return (
    <HStack>
      <Image url={url} size={size} />
      <TextCell first={title} second={subTitle} className="flex-1" />
    </HStack>
  );
};
