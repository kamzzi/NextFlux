import { ReactNode } from "react";

type WrapperProps = {
  children: ReactNode;
};

export const Wrapper = ({ children }: WrapperProps) => {
  return <div className="container mx-auto px-4">{children}</div>;
};
