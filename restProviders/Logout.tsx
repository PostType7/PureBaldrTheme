/* 
    Logout wrapper 
*/

import { NavItem } from "components/native/navigation";
import { deleteCookie } from "helpers/P7RestControler";
import { useRouter } from "next/router";

export const Logout: React.FC = ({ children }) => {
  const router = useRouter();
  return (
    <NavItem
      text="Logout"
      onClick={() => {
        deleteCookie("jwt");
        router.push("/login");
      }}
    />
  );
};
