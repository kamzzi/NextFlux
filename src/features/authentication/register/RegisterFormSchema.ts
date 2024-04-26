import { z } from "zod";

export const RegisterFormSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords are not the same",
    path: ["confirmPassword"],
  });

export type RegisterFormSchemaType = z.infer<typeof RegisterFormSchema>;
