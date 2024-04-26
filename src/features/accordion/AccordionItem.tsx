import { ReactNode } from "react";

type AccordionItemProps = {
  children: ReactNode;
};

export const AccordionItem = ({ children }: AccordionItemProps) => {
  return <div className="space-y-1">{children}</div>;
};
