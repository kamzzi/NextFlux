import z from "zod";

export const NewsletterSchema = z.object({
  email: z.string().email(),
});

export type NewsletterSchema = z.infer<typeof NewsletterSchema>;
