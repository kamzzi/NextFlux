import { supabase } from "../../services/supabase";

type RegisterData = {
  email: string;
  password: string;
};

export const register = async ({ email, password }: RegisterData) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
