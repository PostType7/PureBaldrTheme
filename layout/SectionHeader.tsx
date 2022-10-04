import { HStack } from "components/themes/NativeTheme/layout";
import { Text } from "components/themes/NativeTheme/typo";

interface Props {
  title?: string;
  actions?: any; // NODE
  size?: string;
}
const SectionHeader: React.FC<Props> = ({ title, actions, size = "xl" }) => {
  return (
    <HStack className="items-center">
      <Text size={size} className="flex-1">
        {title}
      </Text>
      {actions ? actions : null}
    </HStack>
  );
};
export default SectionHeader;
