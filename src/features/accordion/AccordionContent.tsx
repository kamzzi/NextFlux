import { ReactNode } from "react";
import { useAccordion } from "./AccordionContext/useAccordion";

type AccordionContentProps = {
  id: number;
  children: ReactNode;
};

export const AccordionContent = ({ id, children }: AccordionContentProps) => {
  const { current } = useAccordion();

  const isOpen = current === id;

  return (
    <div
      className={`${isOpen ? "visible max-h-[70rem] py-8" : "invisible max-h-0 py-0"} grid gap-4 bg-gray-700 px-4 py-8 transition-all md:text-xl`}
      aria-labelledby={`button-accordion-${id}`}
      id={`content-accordion-${id}`}
    >
      {children}
    </div>
  );
};
