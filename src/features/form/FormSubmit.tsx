import { ReactNode } from "react";
import { Button, ButtonModifierStyle } from "../ui/Button";

type FormSubmitProps = {
  children: ReactNode;
  modifier?: ButtonModifierStyle;
};

export const FormSubmit = ({ children, ...rest }: FormSubmitProps) => {
  return (
    <Button type="submit" {...rest}>
      {children}
    </Button>
  );
};
