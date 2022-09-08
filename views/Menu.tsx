import { VStack } from "components/native/layout";
import { NavItem } from "components/native/navigation";

export const Menu: React.FC = () => {
  return <VStack>
    <NavItem color="light" text="Menu 1"/>
    <NavItem color="light" text="Menu 2"/>
  </VStack>;
};

