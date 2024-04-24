import { ReactNode } from "react";

type FormGroupProps = {
  children: ReactNode;
};

export const FormGroup = ({ children }: FormGroupProps) => {
  return <div className="w-full">{children}</div>;
};
