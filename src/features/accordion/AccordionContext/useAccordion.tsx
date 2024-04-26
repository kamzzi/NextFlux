import { useContext } from "react";
import { AccordionContext } from "./AccordionContext";

export const useAccordion = () => {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error("Can't using Accordion Context without provider!");
  }

  return context;
};
