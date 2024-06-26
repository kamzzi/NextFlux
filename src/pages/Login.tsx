import { useTranslation } from "react-i18next";
import { CustomLink } from "../features/ui/CustomLink";
import { LanguageSwitcher } from "../features/ui/LanguageSwitcher";
import { Logo } from "../features/ui/Logo";
import { Global } from "../layout/Global";
import { Hero } from "../layout/Hero";
import { Navbar } from "../layout/Navbar";
import { Wrapper } from "../layout/Wrapper";
import { RoutesEnum } from "../types/shared";
import { LoginForm } from "../features/authentication/login/LoginForm";

export const Login = () => {
  const { t } = useTranslation();

  return (
    <Global>
      <Hero extraStyles="min-h-screen bg-hero-small md:bg-hero-medium lg:bg-hero-large">
        <Wrapper>
          <Navbar>
            <Logo />
            <Navbar.Actions>
              <LanguageSwitcher />
              <CustomLink to={RoutesEnum.LOGIN} modifier="primary">
                {t("links.logIn")}
              </CustomLink>
            </Navbar.Actions>
          </Navbar>
        </Wrapper>
        <Hero.Body extraStyles="max-w-[35rem]">
          <LoginForm />
        </Hero.Body>
      </Hero>
    </Global>
  );
};
