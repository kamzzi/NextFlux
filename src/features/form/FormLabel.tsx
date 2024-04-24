import { ReactNode } from "react";

type FormLabelProps = {
  id: string;
  children: ReactNode;
};

export const FormLabel = ({ id, children }: FormLabelProps) => {
  return (
    <label
      htmlFor={id}
      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-all peer-valid:top-4 peer-valid:text-xs peer-focus:top-4 peer-focus:text-xs"
    >
      {children}
    </label>
  );
};
