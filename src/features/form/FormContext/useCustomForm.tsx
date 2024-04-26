import { useContext } from "react";
import { FormContext } from "./FormContext";

export const useCustomForm = () => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("Can't using Form Context without provider!");
  }

  return context;
};
