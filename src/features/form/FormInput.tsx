import { InputHTMLAttributes } from "react";

type FormInputProps = {
  id: string;
  placeholder?: string;
};

export const FormInput = ({
  id,
  ...rest
}: FormInputProps & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className="peer w-full rounded-md border border-slate-400 bg-gray-950/80 px-4 py-5 text-slate-400"
      id={id}
      {...rest}
    />
  );
};
