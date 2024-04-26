import { ReactNode } from "react";
import { AccordionTitle } from "./AccordionTitle";
import { AccordionItem } from "./AccordionItem";
import { AccordionItems } from "./AccordionItems";
import { AccordionToggle } from "./AccordionToggle";
import { AccordionContent } from "./AccordionContent";
import { AccordionIcon } from "./AccordionIcon";

type AccordionProps = {
  children: ReactNode;
};

export const Accordion = ({ children }: AccordionProps) => {
  return <div className="py-24 text-slate-50">{children}</div>;
};

Accordion.Title = AccordionTitle;
Accordion.Item = AccordionItem;
Accordion.Items = AccordionItems;
Accordion.Toggle = AccordionToggle;
Accordion.Content = AccordionContent;
Accordion.Icon = AccordionIcon;
