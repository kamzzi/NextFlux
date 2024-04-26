import { ReactNode } from "react";
import { useAccordion } from "./AccordionContext/useAccordion";

type AccordionToggleProps = {
  id: number;
  children: ReactNode;
};

export const AccordionToggle = ({ id, children }: AccordionToggleProps) => {
  const { toggleCurrent, current } = useAccordion();
  const isOpen = current === id;

  return (
    <button
      className="flex w-full items-center justify-between gap-4 rounded-sm bg-gray-700 px-4 py-8 text-left text-lg transition hover:bg-gray-600 focus:outline-none focus:ring focus:ring-slate-50"
      onClick={() => toggleCurrent(id)}
      aria-expanded={isOpen}
      id={`button-accordion-${id}`}
      aria-controls={`content-accordion-${id}`}
    >
      {children}
    </button>
  );
};
