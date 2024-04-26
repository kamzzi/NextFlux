import clsx from "clsx";
import { ReactNode } from "react";

type HeroProps = {
  children: ReactNode;
};

type HeroContentProps = {
  extraStyles?: string;
};

export const HeroContent = ({
  extraStyles,
  children,
}: HeroContentProps & HeroProps) => {
  const base =
    "relative z-10 mx-auto flex flex-col gap-5 px-4 py-4 text-center text-white sm:py-24 ";

  const className = clsx(base, extraStyles);

  return <div className={className}>{children}</div>;
};

export const Hero = ({ children }: HeroProps) => {
  return (
    <header className="gradient-overlay relative  bg-hero-small bg-cover  bg-no-repeat md:bg-hero-medium lg:bg-hero-large">
      {children}
    </header>
  );
};

Hero.Body = HeroContent;
