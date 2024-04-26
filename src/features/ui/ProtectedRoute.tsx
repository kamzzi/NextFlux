import { ReactNode, useEffect } from "react";
import { useCurrentUser } from "../authentication/useCurrentUser";
import { useNavigate } from "react-router";
import { RoutesEnum } from "../../types/shared";
import { Loader } from "./Loader";

type ProtectedRouteProps = {
  children: ReactNode;
};

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, isLoading, isAuthenticated } = useCurrentUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && !isLoading) {
      navigate(RoutesEnum.LOGIN);
    }
  }, [isLoading, user, navigate]);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-black">
        <Loader />
      </div>
    );
  }

  return isAuthenticated ? children : null;
};
