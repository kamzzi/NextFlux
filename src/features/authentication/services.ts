import { supabase } from "../../services/supabase";

type AuthData = {
  email: string;
  password: string;
};

export const register = async ({ email, password }: AuthData) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const login = async ({ email, password }: AuthData) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};