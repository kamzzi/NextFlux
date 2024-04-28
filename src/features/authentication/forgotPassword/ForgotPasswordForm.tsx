import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../../form/Form";
import {
  ForgotPasswordSchema,
  ForgotPasswordSchemaType,
} from "./ForgotPasswordSchema";
import { useForm } from "react-hook-form";
import { MdOutlineErrorOutline } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { useForgotPassword } from "./useForgotPassword";
import { Loader } from "../../ui/Loader";

export const ForgotPasswordForm = () => {
  const { t } = useTranslation();

  const { forgot, isPending } = useForgotPassword();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ForgotPasswordSchemaType>({
    resolver: zodResolver(ForgotPasswordSchema),
  });

  const submitHandler = ({ email }: ForgotPasswordSchemaType) => {
    forgot({ email }, { onSuccess: () => reset() });
  };

  return (
    <div className="rounded-md bg-black/70 p-8">
      <h1 className="mb-8 text-left text-3xl font-bold">{t("forms.forgot")}</h1>
      <Form
        onSubmit={handleSubmit(submitHandler)}
        extraStyles="flex flex-col gap-6 mb-10"
      >
        <Form.Group>
          <Form.Item>
            <Form.Input
              id="email"
              required
              {...register("email")}
              error={errors?.email?.message}
            />
            <Form.Label id="email">{t("inputs.email")}</Form.Label>
          </Form.Item>
          {errors?.email && (
            <Form.Error>
              <MdOutlineErrorOutline aria-label="Error" />
              {errors.email.message}
            </Form.Error>
          )}
        </Form.Group>
        <Form.Submit modifier="form">
          {isPending ? <Loader /> : t("forms.forgot")}
        </Form.Submit>
      </Form>
    </div>
  );
};
