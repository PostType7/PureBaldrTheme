/* 
    Logout wrapper 
*/

import { deleteCookie } from "helpers/PT7-REST-Helper";
import { useRouter } from "next/router";

export const Logout: React.FC = ({ children }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => {
        deleteCookie("jwt");
        router.push('/login');
      }}
    >
      Logout
    </div>
  );
};
