import { useForm } from "react-hook-form";
import { Form } from "../../form/Form";
import { LoginFormSchema, LoginFormSchemaType } from "./LoginFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { MdOutlineErrorOutline } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { CustomLink } from "../../ui/CustomLink";
import { RoutesEnum } from "../../../types/shared";
import { useLogin } from "./useLogin";
import { Loader } from "../../ui/Loader";

export const LoginForm = () => {
  const { t } = useTranslation();
  const { loginMutate, isLogin } = useLogin();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormSchemaType>({ resolver: zodResolver(LoginFormSchema) });

  const submitHandler = ({ email, password }: LoginFormSchemaType) => {
    loginMutate({ email, password });
  };

  return (
    <div className="rounded-md bg-black/70 p-8">
      <h1 className="mb-8 text-left text-3xl font-bold">{t("forms.login")}</h1>
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
        <Form.Submit modifier="form">
          {isLogin ? <Loader /> : t("forms.login")}
        </Form.Submit>
      </Form>
      <p className="mb-8">
        <CustomLink to={RoutesEnum.FORGOT_PASSWORD} modifier="secondary">
          {t("links.forgot-password")}
        </CustomLink>
      </p>
      <p className="flex flex-col items-center gap-4 ">
        <span>{t("links.new-title")}</span>
        <CustomLink to={RoutesEnum.REGISTER} modifier="register">
          {t("links.new")}
        </CustomLink>
      </p>
    </div>
  );
};
