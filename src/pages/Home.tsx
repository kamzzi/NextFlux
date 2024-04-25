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
import { ZPattern } from "../features/z-pattern/ZPattern";
import { ZPatternImage } from "../features/z-pattern/ZPatternImage";
import { MdDownloading } from "react-icons/md";

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
      <Wrapper>
        <ZPattern>
          <ZPattern.Content>
            <h2 className="mb-6 text-4xl font-extrabold lg:text-5xl">
              Enjoy on your TV
            </h2>
            <p className="text-lg">
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
          </ZPattern.Content>
          <ZPattern.Combinable>
            <ZPattern.Image src="./assets/images/tv.png" alt="TV" />
            <ZPattern.Video
              extraStyles="max-w-[73%] max-h-[54%] top-1/2 "
              autoPlay
              muted
              loop
              src="./assets/videos/video-start.mp4"
            />
          </ZPattern.Combinable>
        </ZPattern>
      </Wrapper>
      <Line />
      <Wrapper>
        <ZPattern>
          <ZPattern.Combinable>
            <ZPattern.Image
              src="./assets/images/story.jpg"
              alt="Stranger Things"
            />
            <ZPattern.Overlay>
              <ZPattern.Image
                src="./assets/images/boxshot.png"
                alt="Stranger Things"
                extraStyles="h-full"
              />
              <div>
                <h3 className="font-semibold">Stranger Things</h3>
                <p className="text-blue-500">Downloading...</p>
              </div>
              <MdDownloading
                title="Downloading"
                aria-label="Downloading"
                className="animate-pulse text-3xl text-blue-500"
              />
            </ZPattern.Overlay>
          </ZPattern.Combinable>
          <ZPattern.Content>
            <h2 className="mb-6 text-4xl font-extrabold lg:text-5xl">
              Enjoy on your TV
            </h2>
            <p className="text-lg">
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
          </ZPattern.Content>
        </ZPattern>
      </Wrapper>
      <Line />
      <Wrapper>
        <ZPattern>
          <ZPattern.Content>
            <h2 className="mb-6 text-4xl font-extrabold lg:text-5xl">
              Watch everywhere
            </h2>
            <p className="text-lg">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </ZPattern.Content>
          <ZPattern.Combinable>
            <ZPattern.Image
              src="./assets/images/device-pile.png"
              alt="Popular devices"
            />
            <ZPattern.Video
              extraStyles="max-w-[63%] max-h-[47%] top-[34%] "
              autoPlay
              muted
              loop
              src="./assets/videos/video-devices.mp4"
              title="Hawkings Middle School Serie"
            />
          </ZPattern.Combinable>
        </ZPattern>
      </Wrapper>
      <Line />
      <Wrapper>
        <ZPattern>
          <ZPattern.Combinable>
            <ZPatternImage src="./assets/images/kids.png" alt="Kids" />
          </ZPattern.Combinable>
          <ZPattern.Content>
            <h2 className="mb-6 text-4xl font-extrabold lg:text-5xl">
              Create profiles for kids
            </h2>
            <p className="text-lg">
              Send kids on adventures with their favorite characters in a space
              made just for them—free with your membership.
            </p>
          </ZPattern.Content>
        </ZPattern>
      </Wrapper>
    </Global>
  );
};
