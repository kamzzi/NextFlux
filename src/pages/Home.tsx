import { useTranslation } from "react-i18next";
import { CustomLink } from "../features/ui/CustomLink";
import { Logo } from "../features/ui/Logo";
import { Global } from "../layout/Global";
import { Hero } from "../layout/Hero";
import { Navbar } from "../layout/Navbar";
import { Wrapper } from "../layout/Wrapper";
import { RoutesEnum } from "../types/shared";
import { LanguageSwitcher } from "../features/ui/LanguageSwitcher";
import { Newsletter } from "../features/ui/Newsletter/Newsletter";
import { Line } from "../features/ui/Line";
import { ZPatternHome } from "../features/z-pattern/ZPatternHome/ZPatternHome";
import { AccordionHome } from "../features/accordion/AccordionHome/AccordionHome";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <Global>
      <Hero>
        <Wrapper>
          <Navbar>
            <Logo />
            <Navbar.Actions>
              <LanguageSwitcher />
              <CustomLink to={RoutesEnum.HOME} modifier="primary">
                {t("links.logIn")}
              </CustomLink>
            </Navbar.Actions>
          </Navbar>
        </Wrapper>
        <Hero.Body>
          <h1 className="text-3xl font-extrabold text-slate-50 md:text-4xl lg:text-5xl xl:text-6xl">
            {t("hero.title")}
          </h1>
          <p className="text-xl xl:text-2xl">{t("hero.description")}</p>
          <Newsletter />
        </Hero.Body>
      </Hero>
      <Line />
      <section>
        <ZPatternHome />
      </section>
      <Line />
      <section>
        <AccordionHome />
      </section>
    </Global>
  );
};
