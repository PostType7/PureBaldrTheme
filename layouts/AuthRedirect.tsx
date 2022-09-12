/* 
    AuthRedirect wrapper 
    1. Mostly usage inside _app.tsx page
    2. required string with 'jwt' cookie to make valid redirect
    3. todo: once ask .../me endpoint to valid token
*/

import { getCookie } from "helpers/PT7-REST-Helper";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Props {
  unauthorizeRedirect: string;
  emptyPathRedirect?: string;
}
export const AuthRedirect: React.FC<Props> = ({
  unauthorizeRedirect,
  emptyPathRedirect = "/",
  children,
}) => {
  const router = useRouter();
  const [guardian, setGuardian] = useState<boolean>(false);
  useEffect(() => {
    /*
         check is token exist
    */
    if (getCookie("jwt")) {
      /*
            if set emptyPathRedirect and routing is empty, redirect to dashboard
        */
      if (emptyPathRedirect && router.asPath === "/") {
        router.push(emptyPathRedirect);
      } else {
        setGuardian(true);
      }
    } else {
      /*
         token not exist: skip to unauthorizeRedirect path
        */
      if (router.asPath !== unauthorizeRedirect) {
        router.push(unauthorizeRedirect);
      } else {
        setGuardian(true);
      }
    }
  }, [router]);
  return <>{guardian ? children : null}</>;
};
