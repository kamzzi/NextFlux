import { useTranslation } from "react-i18next";
import { Accordion } from "../Accordion";
import { AccordionHomeData } from "./AccordionHomeData";

export const AccordionHome = () => {
  const { t } = useTranslation();

  return (
    <Accordion>
      <Accordion.Title>{t("accordion.title")}</Accordion.Title>
      <Accordion.Items>
        {AccordionHomeData.map(({ id, title, descriptions }) => {
          return (
            <Accordion.Item key={id}>
              <Accordion.Toggle id={id}>
                <span>{t(title)}</span>
                <Accordion.Icon id={id} />
              </Accordion.Toggle>
              <Accordion.Content id={id}>
                {descriptions.map((description) => (
                  <p key={description}>{t(description)}</p>
                ))}
              </Accordion.Content>
            </Accordion.Item>
          );
        })}
      </Accordion.Items>
    </Accordion>
  );
};
