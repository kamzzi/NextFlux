import { ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
import clsx from "clsx";

type CustomLinkModifier = "logo" | "primary" | "secondary" | "register";

type CustomLinkProps = {
  children: ReactNode;
  modifier?: CustomLinkModifier;
};

const modifierStyles: Record<CustomLinkModifier, string> = {
  logo: "text-red-500 uppercase font-semibold text-2xl md:text-5xl",
  primary:
    "rounded-md bg-red-700 px-3 py-2 font-medium text-red-50 hover:bg-red-800 transition md:px-5 md:py-3",
  secondary:
    "text-slate-50 hover:text-slate-300 hover:underline transition-all",
  register: "rounded-md px-3 py-2 font-medium bg-gray-950/80 text-slate-50",
};

export const CustomLink = ({
  children,
  modifier,
  ...rest
}: CustomLinkProps & LinkProps) => {
  const base = "inline-block";

  const className = clsx(base, modifier && modifierStyles[modifier]);

  return (
    <Link {...rest} className={className}>
      {children}
    </Link>
  );
};
