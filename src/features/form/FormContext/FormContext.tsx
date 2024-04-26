import { ReactNode, createContext, useState } from "react";

type FormContextState = {
  isShowPassword: boolean;
  togglePassword: () => void;
};

export const FormContext = createContext<FormContextState | null>(null);

type FormContextProviderProps = {
  children: ReactNode;
};

export const FormContextProvider = ({ children }: FormContextProviderProps) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const togglePassword = () => {
    setIsShowPassword((prevPasswordState) => !prevPasswordState);
  };

  return (
    <FormContext.Provider value={{ isShowPassword, togglePassword }}>
      {children}
    </FormContext.Provider>
  );
};
