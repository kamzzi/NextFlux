import { ReactNode } from "react";

type NavbarProps = {
  children: ReactNode;
};

export const NavbarActions = ({ children }: NavbarProps) => {
  return <div className="flex items-center gap-5">{children}</div>;
};

export const Navbar = ({ children }: NavbarProps) => {
  return (
    <nav className="grid grid-rows-2 gap-y-3 py-7 sm:grid-cols-[auto_1fr_auto] sm:grid-rows-1">
      {children}
    </nav>
  );
};

Navbar.Actions = NavbarActions;
