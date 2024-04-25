import clsx from "clsx";
import { ImgHTMLAttributes } from "react";

type ZPatternImageProps = {
  extraStyles?: string;
};

export const ZPatternImage = ({
  extraStyles,
  ...rest
}: ZPatternImageProps & ImgHTMLAttributes<HTMLImageElement>) => {
  const base = "relative z-20";
  const className = clsx(base, extraStyles);

  return <img {...rest} className={className} />;
};
