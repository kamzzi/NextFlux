import { Global } from "../layout/Global";
import { Hero } from "../layout/Hero";
import { RecoveryForm } from "../features/authentication/recovery/RecoveryForm";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
import { RoutesEnum } from "../types/shared";

export const Recovery = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isError = location.hash.startsWith("#error");

  useEffect(() => {
    if (isError) {
      navigate(RoutesEnum.HOME, { replace: true });
    }
  }, [isError, navigate]);

  return (
    <Global>
      <Hero extraStyles="min-h-screen bg-hero-small md:bg-hero-medium lg:bg-hero-large">
        <Hero.Body extraStyles="max-w-[35rem]">
          <RecoveryForm />
        </Hero.Body>
      </Hero>
    </Global>
  );
};
