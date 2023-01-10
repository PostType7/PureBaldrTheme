// https://www.flavienbonvin.com/reduce-next-js-bundle/
// https://flaviocopes.com/nextjs-analyze-app-bundle/

import { SideBar, TopBar } from "components/templateParts";
import { Color, Hr, ModalWrapper, VStack } from "components/themes/PureBaldrTheme/layout";
import SubCard from "../partials/SubCard";
import { Text } from "components/themes/PureBaldrTheme/typo";
import { Button, Input } from "../stateForm";
import { useThemeStore } from "../themeStore";
// import CompaniesList from "components/templateParts/panel/CompaniesList.tsx";
// import RegisterCompany from "components/templateParts/panel/RegisterCompany";
import { FiChevronLeft } from "react-icons/fi";
import dynamic from "next/dynamic";

const CompaniesList: any = dynamic(
  import(`components/templateParts/panel/CompaniesList.tsx`)
);
const RegisterCompany: any = dynamic(
  import(`components/templateParts/panel/RegisterCompany`)
);
const EditCompany: any = dynamic(
  import(`components/templateParts/panel/EditCompany`)
);

interface Props {
  body: any;
}
export const PanelLayout: React.FC<Props> = ({ body }) => {
  const refreshAppState = useThemeStore((state: any) => state.theme.refreshAppState);
  const modal = useThemeStore((state: any) => state.theme.modal);
  const toaster = useThemeStore((state: any) => state.theme.toaster);
  const panel = useThemeStore((state: any) => state.theme.right);
  const setAttr = useThemeStore((state: any) => state.setAttr);
  return (
    <div className="flex min-h-screen flex-col">
      <div className="sticky top-0 z-30 bg-white">
        <TopBar rightActionsSlot={undefined} />
      </div>
      <div className="relative flex flex-1 bg-gray-100">
        {/* {{-- hidden --}} */}
        <Color bg="secondary" className="z-20 fixed md:relative md:block ">
          <SideBar rightActionsSlot={undefined} />
        </Color>
        <VStack
          spacing="lg"
          className="main-container overflow-hidden relative flex flex-1 flex-col md:p-6"
        >
          {/* {{-- trial --}} */}
          <SubCard shadow="lg" paddingY="sm" bg="warning-light">
            <div className="md:flex items-center gap-6">
              <Text size="sm" weight="bold">
                Wykup pakiet w planie subskrypcyjnym lub pakiet jednorazowych
                weryfikacji!
              </Text>
              <Button bg="warning">Plany subskrypcji</Button>
              <Button bg="warning">Pakiety weryfikacji</Button>
            </div>
          </SubCard>
          <div key={refreshAppState} className="flex-1">{body}</div>
          <figure>
          <img className="w-24 filter grayscale opacity-50" src="/temida-logo.svg" />
        </figure>
        </VStack>
        {/* {{-- right admin panel --}} */}
        {panel.bodyTarget && (
          <div className="w-1/5 relative ">
            <div className="sticky top-20 p-6 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div
                className="hover:bg-gray-200 p-1.5 rounded cursor-pointer"
                  onClick={() =>
                    setAttr({
                      path: "theme.right.bodyTarget",
                      value: panel.bodyTarget === 'companieslist' ? '' : 'companieslist',
                    })
                  }
                >
                  <FiChevronLeft />
                </div>
                <h2 className="text-2xl">Options panel</h2>
              </div>
              <Hr></Hr>
              {panel.bodyTarget === "companieslist" && <CompaniesList />}
              {panel.bodyTarget === "registercompany" && <RegisterCompany />}
              {panel.bodyTarget === "editcompany" && <EditCompany />}

              {/* <Input label="eqweqw" form={[]}></Input> */}
            </div>
          </div>
        )}
      </div>

      {toaster.message && (
        <div onClick={()=>setAttr({
          path: "theme.toaster.message",
          value: '',
        })} className="absolute top-20 right-5 bg-green-100 z-50 py-4 px-9 border rounded-lg">{toaster.message}</div>
      )}

      {modal.bodyTarget && (
        <ModalWrapper>
          {modal.bodyTarget}
        </ModalWrapper>
      )}
    </div>
  );
};
export default PanelLayout;
