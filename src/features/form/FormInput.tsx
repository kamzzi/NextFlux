import { forwardRef } from "react";

type FormInputProps = {
  id: string;
  placeholder?: string;
};

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ id, ...rest }, ref) => {
    return (
      <input
        className="peer w-full rounded-md border border-slate-400 bg-gray-950/80 px-4 py-5 text-slate-400"
        id={id}
        ref={ref}
        {...rest}
      />
    );
  },
);
