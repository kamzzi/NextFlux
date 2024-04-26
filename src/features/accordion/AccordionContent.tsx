import { ReactNode } from "react";

type AccordionContentProps = {
  children: ReactNode;
};

export const AccordionContent = ({ children }: AccordionContentProps) => {
  return (
    <div className="flex flex-col gap-4 bg-gray-700 px-4 py-8 md:text-xl">
      {children}
    </div>
  );
};
