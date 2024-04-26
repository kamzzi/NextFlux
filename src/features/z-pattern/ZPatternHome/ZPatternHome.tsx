import { useTranslation } from "react-i18next";
import { Wrapper } from "../../../layout/Wrapper";
import { Line } from "../../ui/Line";
import { MdDownloading } from "react-icons/md";
import { ZPattern } from "../ZPattern";

export const ZPatternHome = () => {
  const { t } = useTranslation();

  return (
    <>
      <Wrapper>
        <ZPattern>
          <ZPattern.Content>
            <h2 className="mb-6 text-4xl font-extrabold lg:text-5xl">
              {t("z-pattern.title-enjoy")}
            </h2>
            <p className="text-lg">{t("z-pattern.description-enjoy")}</p>
          </ZPattern.Content>
          <ZPattern.Combinable>
            <ZPattern.Image src="./assets/images/tv.png" alt="TV" />
            <ZPattern.Video
              extraStyles="max-w-[73%] max-h-[54%] top-1/2 "
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
                <p className="text-blue-500">
                  {t("z-pattern.overlay-downloading")}
                </p>
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
              {t("z-pattern.title-download")}
            </h2>
            <p className="text-lg">{t("z-pattern.description-download")}</p>
          </ZPattern.Content>
        </ZPattern>
      </Wrapper>
      <Line />
      <Wrapper>
        <ZPattern>
          <ZPattern.Content>
            <h2 className="mb-6 text-4xl font-extrabold lg:text-5xl">
              {t("z-pattern.title-watch")}
            </h2>
            <p className="text-lg">{t("z-pattern.description-watch")}</p>
          </ZPattern.Content>
          <ZPattern.Combinable>
            <ZPattern.Image
              src="./assets/images/device-pile.png"
              alt="Popular devices"
            />
            <ZPattern.Video
              extraStyles="max-w-[63%] max-h-[47%] top-[34%] "
              src="./assets/videos/video-devices.mp4"
            />
          </ZPattern.Combinable>
        </ZPattern>
      </Wrapper>
      <Line />
      <Wrapper>
        <ZPattern>
          <ZPattern.Combinable>
            <ZPattern.Image src="./assets/images/kids.png" alt="Kids" />
          </ZPattern.Combinable>
          <ZPattern.Content>
            <h2 className="mb-6 text-4xl font-extrabold lg:text-5xl">
              {t("z-pattern.title-kids")}
            </h2>
            <p className="text-lg">{t("z-pattern.description-kids")}</p>
          </ZPattern.Content>
        </ZPattern>
      </Wrapper>
    </>
  );
};
