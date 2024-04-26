import { useForm } from "react-hook-form";
import { Form } from "../../form/Form";
import { LoginFormSchema, LoginFormSchemaType } from "./LoginFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { MdOutlineErrorOutline } from "react-icons/md";
import { useTranslation } from "react-i18next";

export const LoginForm = () => {
  const { t } = useTranslation();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormSchemaType>({ resolver: zodResolver(LoginFormSchema) });

  const submitHandler = (data: LoginFormSchemaType) => {
    console.log(data);
  };

  return (
    <div className="rounded-md bg-black/70 p-8">
      <h1 className="mb-8 text-left text-3xl font-bold">{t("forms.login")}</h1>
      <Form
        onSubmit={handleSubmit(submitHandler)}
        extraStyles="flex flex-col gap-6"
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
        <Form.Submit modifier="form">{t("forms.login")}</Form.Submit>
      </Form>
    </div>
  );
};
