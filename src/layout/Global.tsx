import { ReactNode } from "react";

type GlobalProps = {
  children: ReactNode;
};

export const Global = ({ children }: GlobalProps) => {
  return <div className="min-h-screen bg-black">{children}</div>;
};
