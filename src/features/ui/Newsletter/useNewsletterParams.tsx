import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { RoutesEnum } from "../../../types/shared";

type Params = {
  email: string;
};

export const useNewsletterParams = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const params = {
    email: searchParams.get("email") ?? "",
  };

  const redirect = ({ email }: Params) => {
    navigate({
      pathname: RoutesEnum.REGISTER,
      search: `${createSearchParams({ email })}`.toString(),
    });
  };

  return { params, redirect } as const;
};
