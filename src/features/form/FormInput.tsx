import clsx from "clsx";
import { forwardRef } from "react";

type FormInputProps = {
  id: string;
  error?: string;
};

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ id, error, ...rest }, ref) => {
    const base =
      "peer w-full rounded-md border border-slate-400 bg-gray-950/80 px-4 py-5 text-slate-400";

    const className = clsx(base, error && "border-red-700");

    return <input className={className} id={id} ref={ref} {...rest} />;
  },
);
