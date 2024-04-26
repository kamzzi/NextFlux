import { ReactNode } from "react";

type AccordionTitleProps = {
  children: ReactNode;
};

export const AccordionTitle = ({ children }: AccordionTitleProps) => {
  return (
    <h2 className="mb-8 text-center text-3xl font-extrabold md:text-5xl">
      {children}
    </h2>
  );
};
