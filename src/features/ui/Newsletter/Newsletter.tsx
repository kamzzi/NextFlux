import { useTranslation } from "react-i18next";
import { Form } from "../../form/Form";
import { MdOutlineErrorOutline } from "react-icons/md";
import { useForm } from "react-hook-form";
import { NewsletterSchema } from "./NewsletterSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export const Newsletter = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewsletterSchema>({
    resolver: zodResolver(NewsletterSchema),
  });

  const submitHandler = (data: NewsletterSchema) => {
    console.log(data);
  };

  return (
    <div className="py-9">
      <p className="mb-8 text-2xl text-slate-50">{t("newsletter.title")}</p>
      <Form
        onSubmit={handleSubmit(submitHandler)}
        extraStyles="flex flex-col items-center gap-4 sm:flex-row sm:items-start"
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
        <Form.Submit modifier="form">{t("newsletter.submit")}</Form.Submit>
      </Form>
    </div>
  );
};
