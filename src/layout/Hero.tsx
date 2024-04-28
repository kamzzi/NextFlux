import clsx from "clsx";
import { ReactNode } from "react";

type HeroProps = {
  children: ReactNode;
  extraStyles?: string;
};

export const HeroContent = ({ extraStyles, children }: HeroProps) => {
  const base =
    "relative z-10 mx-auto flex flex-col gap-5 px-4 py-4 text-center text-white sm:py-24 ";

  const className = clsx(base, extraStyles);

  return <div className={className}>{children}</div>;
};

export const Hero = ({ extraStyles, children }: HeroProps) => {
  const base =
    "gradient-overlay relative bg-cover bg-no-repeat";

  const className = clsx(base, extraStyles);

  return <header className={className}>{children}</header>;
};

Hero.Body = HeroContent;
