import { ReactNode } from "react";

type FormErrorProps = {
  children: ReactNode;
};

export const FormError = ({ children }: FormErrorProps) => {
  return (
    <p
      className="mt-2 flex items-center gap-2 pl-4 text-left text-base text-red-300"
      role="alert"
    >
      {children}
    </p>
  );
};
