import { useMutation } from "@tanstack/react-query";
import { register } from "../services";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { RoutesEnum } from "../../../types/shared";

export const useRegister = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    mutate: registerMutate,
    error,
    isPending: isRegistering,
  } = useMutation({
    mutationFn: register,
    onSuccess: () => {
      toast.success(t("forms.register-user"));
      navigate(RoutesEnum.LOGIN);
    },
    onError: (err) => {
      if (err instanceof Error) {
        toast.error(t("validation.register-user"));
      }
    },
  });

  return { registerMutate, isRegistering, error } as const;
};
