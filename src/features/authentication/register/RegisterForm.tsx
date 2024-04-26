import { useForm } from "react-hook-form";
import { Form } from "../../form/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MdOutlineErrorOutline } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { CustomLink } from "../../ui/CustomLink";
import { RoutesEnum } from "../../../types/shared";
import {
  RegisterFormSchema,
  RegisterFormSchemaType,
} from "./RegisterFormSchema";

export const RegisterForm = () => {
  const { t } = useTranslation();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterFormSchemaType>({
    resolver: zodResolver(RegisterFormSchema),
  });

  const submitHandler = (data: RegisterFormSchemaType) => {
    console.log(data);
  };

  return (
    <div className="rounded-md bg-black/70 p-8">
      <h1 className="mb-8 text-left text-3xl font-bold">
        {t("forms.register")}
      </h1>
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
        <Form.Submit modifier="form">{t("forms.register")}</Form.Submit>
      </Form>
      <p className="flex flex-col items-center gap-4 ">
        <span>{t("links.already-title")}</span>
        <CustomLink to={RoutesEnum.LOGIN} modifier="register">
          {t("links.logIn")}
        </CustomLink>
      </p>
    </div>
  );
};
