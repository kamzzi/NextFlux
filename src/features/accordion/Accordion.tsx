import { ReactNode } from "react";
import { AccordionTitle } from "./AccordionTitle";
import { AccordionItem } from "./AccordionItem";
import { AccordionItems } from "./AccordionItems";
import { AccordionToggle } from "./AccordionToggle";
import { AccordionContent } from "./AccordionContent";
import { AccordionIcon } from "./AccordionIcon";
import { AccordionContextProvider } from "./AccordionContext/AccordionContext";

type AccordionProps = {
  children: ReactNode;
};

export const Accordion = ({ children }: AccordionProps) => {
  return (
    <AccordionContextProvider>
      <div className="mx-auto max-w-[900px] px-4 pb-3 pt-24 text-slate-50">
        {children}
      </div>
    </AccordionContextProvider>
  );
};

Accordion.Title = AccordionTitle;
Accordion.Item = AccordionItem;
Accordion.Items = AccordionItems;
Accordion.Toggle = AccordionToggle;
Accordion.Content = AccordionContent;
Accordion.Icon = AccordionIcon;
