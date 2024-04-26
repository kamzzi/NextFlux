import { useMutation } from "@tanstack/react-query";
import { login } from "../services";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { RoutesEnum } from "../../../types/shared";

export const useLogin = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    mutate: loginMutate,
    error,
    isPending: isLogin,
  } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      navigate(RoutesEnum.DASHBOARD);
    },
    onError: (err) => {
      if (err instanceof Error) {
        toast.error(t("validation.login-user"));
      }
    },
  });

  return { loginMutate, isLogin, error } as const;
};
