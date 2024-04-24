import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

export type ButtonModifierStyle = "form";

type ButtonProps = {
  children: ReactNode;
  modifier?: ButtonModifierStyle;
};

const modifierStyles: Record<ButtonModifierStyle, string> = {
  form: "px-8 py-5 rounded-md bg-red-700 font-medium transition hover:bg-red-800",
};

export const Button = ({
  children,
  modifier,
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  const base = "inline-block";

  const className = clsx(base, modifier && modifierStyles[modifier]);

  return <button className={className}>{children}</button>;
};
