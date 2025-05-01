import { useRouter } from "next/navigation";
import { useUserCookie } from "./use-cookies";
import axios, { AxiosError } from "axios";
import { LOGOUT_ROUTE } from "@/lib/constants";
import { useNotifications } from "@toolpad/core/useNotifications";
import { LOGIN_PAGE_PATH } from "@/lib/pathnames";

export const useLogout = () => {
  const router = useRouter();
  const notify = useNotifications();
  const { user, removeUserCookie } = useUserCookie();

  const handleLogout = async () => {
    try {
      const res = await axios
        .post(
          LOGOUT_ROUTE,
          {},
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${user.access_token}`,
            },
          }
        )
        .then((res) => res.data);
      if (res.status) {
        notify.show(res.message, {
          severity: "success",
          autoHideDuration: 3000,
        });

        // removeUserCookie();
        // router.refresh();
      } else
        notify.show(res.message, {
          severity: "error",
          autoHideDuration: 3000,
        });
    } catch (error) {
      const errorMessage =
        error instanceof AxiosError
          ? error.response
            ? error.response.data.message
            : error.message
          : "Failed to logout";
      notify.show(errorMessage, {
        severity: "error",
        autoHideDuration: 3000,
      });
    } finally {
      removeUserCookie();
      router.push(LOGIN_PAGE_PATH);
    }
  };

  return { handleLogout };
};
