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
    <header className="after:bg-gradient relative min-h-[600px] bg-black/40 bg-hero-small bg-cover bg-no-repeat after:absolute after:inset-0 after:bg-black/40 md:bg-hero-medium lg:bg-hero-large">
      {children}
    </header>
  );
};

Hero.Body = HeroContent;
