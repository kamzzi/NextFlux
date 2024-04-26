import { useTranslation } from "react-i18next";
import { CustomLink } from "../features/ui/CustomLink";
import { LanguageSwitcher } from "../features/ui/LanguageSwitcher";
import { Logo } from "../features/ui/Logo";
import { Global } from "../layout/Global";
import { Hero } from "../layout/Hero";
import { Navbar } from "../layout/Navbar";
import { Wrapper } from "../layout/Wrapper";
import { RoutesEnum } from "../types/shared";
import { RegisterForm } from "../features/authentication/register/RegisterForm";

export const Register = () => {
  const { t } = useTranslation();

  return (
    <Global>
      <Hero extraStyles="min-h-screen">
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
          <RegisterForm />
        </Hero.Body>
      </Hero>
    </Global>
  );
};
