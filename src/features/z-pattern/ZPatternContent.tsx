import { ReactNode } from "react";

type ZPatternContentProps = {
  children: ReactNode;
};

export const ZPatternContent = ({ children }: ZPatternContentProps) => {
  return (
    <div className="text-center text-slate-50 md:text-left">{children}</div>
  );
};
