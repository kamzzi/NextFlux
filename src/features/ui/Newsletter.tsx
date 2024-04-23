import { useTranslation } from "react-i18next";
import { Form } from "../form/Form";

export const Newsletter = () => {
  const { t } = useTranslation();

  return (
    <div className="py-9">
      <p className="mb-4 text-2xl text-slate-50">
        Zaczynamy oglądać? Wprowadź adres e‑mail, aby utworzyć lub odnowić
        konto.
      </p>
      <Form extraStyles="flex items-center gap-4">
        <Form.Group>
          <Form.Item>
            <Form.Input id="email" placeholder={t("inputs.emailPlaceholder")} />
            <Form.Label id="email">{t("inputs.emailPlaceholder")}</Form.Label>
          </Form.Item>
          <Form.Error>Coś się stało</Form.Error>
        </Form.Group>
        <Form.Submit>Rozpocznij</Form.Submit>
      </Form>
    </div>
  );
};
