import { ReactNode } from "react";

type AccordionToggleProps = {
  children: ReactNode;
};

export const AccordionToggle = ({ children }: AccordionToggleProps) => {
  return (
    <button className="flex w-full items-center justify-between gap-4 rounded-sm bg-gray-700 px-4 py-8 text-lg transition hover:bg-gray-600 focus:outline-none focus:ring focus:ring-slate-50">
      {children}
    </button>
  );
};
