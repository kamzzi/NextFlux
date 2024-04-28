import { useMutation } from "@tanstack/react-query";
import { forgotPassword } from "../services";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

export const useForgotPassword = () => {
  const { t } = useTranslation();

  const { mutate: forgot, isPending } = useMutation({
    mutationFn: forgotPassword,
    onSuccess: () => {
      toast.success(t("recovery.success"));
    },
    onError: (err) => {
      if (err instanceof Error) {
        toast.error(err.message);
      }
    },
  });

  return { forgot, isPending } as const;
};
