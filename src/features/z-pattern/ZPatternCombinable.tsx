import { ReactNode } from "react";

type ZPatternCombinableProps = {
  children: ReactNode;
};

export const ZPatternCombinable = ({ children }: ZPatternCombinableProps) => {
  return (
    <div className="relative order-1 overflow-hidden md:order-none">
      {children}
    </div>
  );
};
