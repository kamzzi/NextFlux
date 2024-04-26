import { ReactNode } from "react";

type AccordionItemsProps = {
  children: ReactNode;
};

export const AccordionItems = ({ children }: AccordionItemsProps) => {
  return <div className="flex flex-col gap-4">{children}</div>;
};
