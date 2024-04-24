import { useTranslation } from "react-i18next";
import { Form } from "../form/Form";
import { MdOutlineErrorOutline } from "react-icons/md";

export const Newsletter = () => {
  const { t } = useTranslation();

  return (
    <div className="py-9">
      <p className="mb-8 text-2xl text-slate-50">
        Zaczynamy oglądać? Wprowadź adres e‑mail, aby utworzyć lub odnowić
        konto.
      </p>
      <Form extraStyles="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
        <Form.Group>
          <Form.Item>
            <Form.Input id="email" required />
            <Form.Label id="email">{t("inputs.emailPlaceholder")}</Form.Label>
          </Form.Item>
          <Form.Error>
            <MdOutlineErrorOutline /> Coś się stało
          </Form.Error>
        </Form.Group>
        <Form.Submit modifier="form">Rozpocznij</Form.Submit>
      </Form>
    </div>
  );
};
