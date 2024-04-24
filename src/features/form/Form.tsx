import { ReactNode } from "react";
import { FormInput } from "./FormInput";
import { FormGroup } from "./FormGroup";
import { FormError } from "./FormError";
import { FormSubmit } from "./FormSubmit";
import clsx from "clsx";
import { FormLabel } from "./FormLabel";
import { FormItem } from "./FormItem";

type FormProps = {
  children: ReactNode;
  extraStyles?: string;
  onSubmit: () => void;
};

export const Form = ({ children, extraStyles, ...rest }: FormProps) => {
  const base = "relative mx-auto max-w-[40rem]";

  const className = clsx(base, extraStyles);

  return (
    <form className={className} {...rest}>
      {children}
    </form>
  );
};

Form.Input = FormInput;
Form.Group = FormGroup;
Form.Error = FormError;
Form.Submit = FormSubmit;
Form.Label = FormLabel;
Form.Item = FormItem;
