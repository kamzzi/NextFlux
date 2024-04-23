import { useTranslation } from "react-i18next";
import { CustomLink } from "../features/ui/CustomLink";
import { Logo } from "../features/ui/Logo";
import { Global } from "../layout/Global";
import { Hero } from "../layout/Hero";
import { Navbar } from "../layout/Navbar";
import { Wrapper } from "../layout/Wrapper";
import { RoutesEnum } from "../types/shared";
import { LanguageSwitcher } from "../features/ui/LanguageSwitcher";

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
      </Hero>
    </Global>
  );
};
