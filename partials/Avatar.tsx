import { HStack, Image } from "components/themes/NativeTheme/layout";
import { TextCell } from "./TextCell";


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
      <TextCell title={title} subTitle={subTitle} className="flex-1" />
    </HStack>
  );
};
