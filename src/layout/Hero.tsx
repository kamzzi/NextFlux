import { ReactNode } from "react";

type HeroProps = {
  children: ReactNode;
};

export const HeroContent = ({ children }: HeroProps) => {
  return (
    <div className="relative z-10 mx-auto flex max-w-[45rem] flex-col gap-5 px-4 py-4 text-center text-white sm:py-24 xl:max-w-[70rem]">
      {children}
    </div>
  );
};

export const Hero = ({ children }: HeroProps) => {
  return (
    <header className="gradient-overlay relative  bg-hero-small bg-cover  bg-no-repeat md:bg-hero-medium lg:bg-hero-large">
      {children}
    </header>
  );
};

Hero.Body = HeroContent;
