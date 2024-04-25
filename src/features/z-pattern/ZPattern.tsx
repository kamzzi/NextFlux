import { ReactNode } from "react";
import { ZPatternVideo } from "./ZPatternVideo";
import { ZPatternContent } from "./ZPatternContent";
import { ZPatternCombinable } from "./ZPatternCombinable";
import { ZPatternOverlay } from "./ZPatternOverlay";
import { ZPatternImage } from "./ZPatternImage";

type ZPatternProps = {
  children: ReactNode;
};

export const ZPattern = ({ children }: ZPatternProps) => {
  return (
    <div className="grid items-center gap-7 py-24 md:grid-cols-2">
      {children}
    </div>
  );
};

ZPattern.Image = ZPatternImage;
ZPattern.Video = ZPatternVideo;
ZPattern.Content = ZPatternContent;
ZPattern.Combinable = ZPatternCombinable;
ZPattern.Overlay = ZPatternOverlay;
