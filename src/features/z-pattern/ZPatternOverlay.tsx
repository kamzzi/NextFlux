import { ReactNode } from "react";

type ZPatternOverlayProps = {
  children: ReactNode;
};

export const ZPatternOverlay = ({ children }: ZPatternOverlayProps) => {
  return (
    <div className="absolute bottom-[15px] left-1/2 z-30 grid h-20 w-full max-w-96 -translate-x-1/2 grid-cols-[40px_1fr_auto] items-center gap-4 rounded-xl border border-slate-400 bg-black p-3 text-slate-50  md:grid-cols-[80px_1fr_auto] 2xl:left-[45%]">
      {children}
    </div>
  );
};
