import { z } from "zod";

export const RecoverySchema = z
  .object({
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords are not the same",
    path: ["confirmPassword"],
  });

export type RecoverySchemaType = z.infer<typeof RecoverySchema>;
