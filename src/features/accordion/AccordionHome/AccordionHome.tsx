import { useTranslation } from "react-i18next";
import { Wrapper } from "../../../layout/Wrapper";
import { Accordion } from "../Accordion";
import { AccordionHomeData } from "./AccordionHomeData";

export const AccordionHome = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Accordion>
        <Accordion.Title>{t("accordion.title")}</Accordion.Title>
        <Accordion.Items>
          {AccordionHomeData.map(({ id, title, descriptions }) => {
            return (
              <Accordion.Item key={id}>
                <Accordion.Toggle>
                  <span>{t(title)}</span>
                  <Accordion.Icon />
                </Accordion.Toggle>
                <Accordion.Content>
                  {descriptions.map((description) => (
                    <p key={description}>{t(description)}</p>
                  ))}
                </Accordion.Content>
              </Accordion.Item>
            );
          })}
        </Accordion.Items>
      </Accordion>
    </Wrapper>
  );
};
