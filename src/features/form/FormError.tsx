import { ReactNode } from "react";

type FormErrorProps = {
  children: ReactNode;
};

export const FormError = ({ children }: FormErrorProps) => {
  return <p>{children}</p>;
};
