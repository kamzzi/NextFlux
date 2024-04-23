import { ReactNode } from "react";
import { Button } from "../ui/Button";

type FormSubmitProps = {
  children: ReactNode;
};

export const FormSubmit = ({ children }: FormSubmitProps) => {
  return <Button>{children}</Button>;
};
