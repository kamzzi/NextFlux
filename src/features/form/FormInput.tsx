import { HTMLInputTypeAttribute } from "react";

type FormInputProps = {
  id: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
};

export const FormInput = ({ id, type = "text", ...rest }: FormInputProps) => {
  return <input type={type} id={id} {...rest} />;
};
