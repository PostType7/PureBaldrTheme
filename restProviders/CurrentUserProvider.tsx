/* 
    Logout wrapper 
*/

import { getCookie, fetchApi } from "helpers/P7RestControler";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useThemeStore } from "../themeStore";

interface Props {
  currentUserEndpoint: string;
}

export const CurrentUserProvider: React.FC<Props> = ({
  currentUserEndpoint,
  children,
}) => {
  const router = useRouter();
  const themeStore = useThemeStore((state: any) => state.theme);
  const setAttr = useThemeStore((state: any) => state.setAttr);

  useEffect(() => {
    if (!themeStore.currentUser.id) {
      fetchApi(
        currentUserEndpoint,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${getCookie("jwt")}`,
          },
        },
        (res: any) => {
          if (res.id) {
            setAttr({ path: "theme.currentUser", value: res });
          } else {
            router.push("/login");
          }
        }
      );
    }
  }, []);

  return (
    <>
      {/* TODO, add guard to chldren rendering */}
      {children}
    </>
  );
};
