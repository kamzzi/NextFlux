import { RoutesEnum } from "../../types/shared";
import { CustomLink } from "./CustomLink";

export const Logo = () => {
  return (
    <CustomLink to={RoutesEnum.HOME} modifier="logo">
      NextFlux
    </CustomLink>
  );
};
