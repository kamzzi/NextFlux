import clsx from "clsx";
import { HTMLInputTypeAttribute, InputHTMLAttributes, forwardRef } from "react";
import { useCustomForm } from "./FormContext/useCustomForm";

type FormInputProps = {
  id: string;
  error?: string;
  type?: HTMLInputTypeAttribute;
};

export const FormInput = forwardRef<
  HTMLInputElement,
  FormInputProps & InputHTMLAttributes<HTMLInputElement>
>(({ id, error, type = "text", ...rest }, ref) => {
  const base =
    "peer w-full rounded-md border border-slate-400 bg-gray-950/80 px-4 py-5 text-slate-400";

  const className = clsx(base, error && "border-red-700");
  const { isShowPassword } = useCustomForm();

  const inputType =
    type === "password" ? (isShowPassword ? "text" : type) : type;

  return (
    <input className={className} id={id} ref={ref} type={inputType} {...rest} />
  );
});
