import { ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
import clsx from "clsx";

type CustomLinkModifier = "logo" | "primary";

type CustomLinkProps = {
  children: ReactNode;
  modifier?: CustomLinkModifier;
};

const modifierStyles: Record<CustomLinkModifier, string> = {
  logo: "text-red-600 uppercase font-semibold text-2xl md:text-5xl",
  primary:
    "rounded-md bg-red-600 px-3 py-2 font-medium text-red-50 hover:bg-red-700 transition md:px-5 md:py-3",
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
