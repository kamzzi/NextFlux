import { ReactNode, createContext, useState } from "react";

type AccordionContextState = {
  current: number | null;
  toggleCurrent: (id: number) => void;
};

export const AccordionContext = createContext<AccordionContextState | null>(
  null,
);

type AccordionContextProviderProps = {
  children: ReactNode;
};

export const AccordionContextProvider = ({
  children,
}: AccordionContextProviderProps) => {
  const [current, setCurrent] = useState<number | null>(null);

  const toggleCurrent = (id: number) => {
    setCurrent(id === current ? null : id);
  };

  return (
    <AccordionContext.Provider value={{ current, toggleCurrent }}>
      {children}
    </AccordionContext.Provider>
  );
};
