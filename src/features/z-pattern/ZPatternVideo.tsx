import clsx from "clsx";
import { VideoHTMLAttributes } from "react";

type ZPatternVideoProps = {
  src: string;
  extraStyles?: string;
};

export const ZPatternVideo = ({
  src,
  extraStyles,
  ...rest
}: ZPatternVideoProps & VideoHTMLAttributes<HTMLVideoElement>) => {
  const base =
    "absolute z-10 left-1/2 -translate-x-1/2 -translate-y-1/2 2xl:left-[44%]";

  const className = clsx(base, extraStyles);

  return (
    <video autoPlay loop muted {...rest} className={className}>
      <source src={src} type="video/mp4" />
    </video>
  );
};
