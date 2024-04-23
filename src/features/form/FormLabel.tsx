import { ReactNode } from "react";

type FormLabelProps = {
  id: string;
  children: ReactNode;
};

export const FormLabel = ({ id, children }: FormLabelProps) => {
  return <label htmlFor={id}>{children}</label>;
};
