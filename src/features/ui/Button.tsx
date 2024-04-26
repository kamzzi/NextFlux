import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

export type ButtonModifierStyle = "newsletter" | "form";

type ButtonProps = {
  children: ReactNode;
  modifier?: ButtonModifierStyle;
};

const modifierStyles: Record<ButtonModifierStyle, string> = {
  newsletter:
    "text-slate-50 w-40 sm:w-52 px-8 py-5 rounded-md bg-red-700 font-medium transition hover:bg-red-800",
  form: "flex items-center justify-center text-slate-50 w-40 w-full px-8 py-5 rounded-md bg-red-700 font-medium transition hover:bg-red-800",
};

export const Button = ({
  children,
  modifier,
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  const base = "inline-block";

  const className = clsx(base, modifier && modifierStyles[modifier]);

  return <button className={className}>{children}</button>;
};
