import { useTranslation } from "react-i18next";
import { Logo } from "../features/ui/Logo";
import { Global } from "../layout/Global";
import { Hero } from "../layout/Hero";
import { Navbar } from "../layout/Navbar";
import { Wrapper } from "../layout/Wrapper";
import { CustomLink } from "../features/ui/CustomLink";
import { RoutesEnum } from "../types/shared";

export const NotFound = () => {
  const { t } = useTranslation();

  return (
    <Global>
      <Hero extraStyles="bg-not-found min-h-screen bg-center">
        <Wrapper>
          <Navbar>
            <Logo />
          </Navbar>
        </Wrapper>
        <Hero.Body extraStyles="max-w-[45rem] xl:max-w-[70rem]">
          <h1 className="mb-7 text-5xl font-extrabold">
            {t("not-found.title")}
          </h1>
          <p className="text-center text-xl">{t("not-found.description")}</p>
          <div className="mb-10">
            <CustomLink to={RoutesEnum.HOME} modifier="not-found">
              {t("not-found.link")}
            </CustomLink>
          </div>

          <div className="space-x-4 self-center border-l-2 border-red-500 p-4 text-xl md:text-3xl">
            <span className="font-light tracking-widest">
              {t("not-found.error")}
            </span>
            <strong className="tracking-widest">NSES-404</strong>
          </div>
        </Hero.Body>
      </Hero>
    </Global>
  );
};
