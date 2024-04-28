import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../../form/Form";

import { useForm } from "react-hook-form";
import { MdOutlineErrorOutline } from "react-icons/md";
import { useTranslation } from "react-i18next";

import { Loader } from "../../ui/Loader";
import { RecoverySchema, RecoverySchemaType } from "./RecoverySchema";
import { useRecoveryPassword } from "./useRecoveryPassword";

export const RecoveryForm = () => {
  const { t } = useTranslation();

  const { recovery, isPending } = useRecoveryPassword();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RecoverySchemaType>({
    resolver: zodResolver(RecoverySchema),
  });

  const submitHandler = ({ password }: RecoverySchemaType) => {
    recovery({ password });
  };

  return (
    <div className="rounded-md bg-black/70 p-8">
      <h1 className="mb-8 text-left text-3xl font-bold">{t("forms.change")}</h1>
      <Form
        onSubmit={handleSubmit(submitHandler)}
        extraStyles="flex flex-col gap-6 mb-10"
      >
        <Form.Group>
          <Form.Item>
            <Form.Input
              id="password"
              required
              {...register("password")}
              error={errors?.password?.message}
              type="password"
            />
            <Form.Label id="password">{t("inputs.password")}</Form.Label>
            <Form.TogglePassword />
          </Form.Item>
          {errors?.password && (
            <Form.Error>
              <MdOutlineErrorOutline aria-label="Error" />
              {errors.password.message}
            </Form.Error>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Item>
            <Form.Input
              id="confirmPassword"
              required
              {...register("confirmPassword")}
              error={errors?.confirmPassword?.message}
              type="password"
            />
            <Form.Label id="confirmPassword">
              {t("inputs.confirmPassword")}
            </Form.Label>
            <Form.TogglePassword />
          </Form.Item>
          {errors?.confirmPassword && (
            <Form.Error>
              <MdOutlineErrorOutline aria-label="Error" />
              {errors.confirmPassword.message}
            </Form.Error>
          )}
        </Form.Group>
        <Form.Submit modifier="form">
          {isPending ? <Loader /> : t("forms.change")}
        </Form.Submit>
      </Form>
    </div>
  );
};
