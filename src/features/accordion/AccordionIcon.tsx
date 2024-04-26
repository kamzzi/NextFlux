import { FaPlus, FaMinus } from "react-icons/fa6";
import { useAccordion } from "./AccordionContext/useAccordion";

type AccordionIconProps = {
  id: number;
};

export const AccordionIcon = ({ id }: AccordionIconProps) => {
  const { current } = useAccordion();
  const isOpen = current === id;

  return isOpen ? (
    <FaMinus aria-label="Close item" />
  ) : (
    <FaPlus aria-label="Open item" />
  );
};
