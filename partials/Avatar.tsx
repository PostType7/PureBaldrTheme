import { Card,HStack,Image } from "components/native/layout";
import { TextCell, TextSM } from "components/native/typo";

interface Props {
  nick?: string;
  shortDescription?: string;
  longDescription?: string;
  url?: string | URL;
  size?:string;
}
const Avatar: React.FC<Props> = ({
  nick,
  shortDescription,
  longDescription,
  url,
  size,
}) => {
  return (
    <HStack>
      <Image url={url} size={size}/>
      <TextCell
        title={nick}
        subTitle="22 June 2011"
        className="flex-1"
      />
    </HStack>
  );
};
export default Avatar;
