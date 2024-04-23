import { ReactNode } from "react";

type HeroProps = {
  children: ReactNode;
};

export const Hero = ({ children }: HeroProps) => {
  return (
    <header className="bg-hero-small md:bg-hero-medium lg:bg-hero-large min-h-[600px] bg-cover bg-no-repeat">
      {children}
    </header>
  );
};
