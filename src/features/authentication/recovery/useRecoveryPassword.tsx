import { useMutation } from "@tanstack/react-query";
import { recoveryPassword } from "../services";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { RoutesEnum } from "../../../types/shared";

export const useRecoveryPassword = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { mutate: recovery, isPending } = useMutation({
    mutationFn: recoveryPassword,
    onSuccess: () => {
      toast.success(t("recovery.success-change"));
      navigate(RoutesEnum.LOGIN, { replace: true });
    },
    onError: (err) => {
      if (err instanceof Error) {
        toast.error(err.message);
      }
    },
  });

  return { recovery, isPending } as const;
};
