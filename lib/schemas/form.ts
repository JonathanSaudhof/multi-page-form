import { z } from "zod";

export type TForm = z.infer<typeof formSchema>;

export const formSchema = z.object({
  firstName: z.string().min(3),
  lastName: z.string(),
  email: z.string().email(),
});

export const pageOneFormSchema = formSchema.pick({
  firstName: true,
  lastName: true,
});

export type TPageOneForm = z.infer<typeof pageOneFormSchema>;

export const pageTwoSchema = formSchema.pick({
  email: true,
});

export type TPageTwoForm = z.infer<typeof pageTwoSchema>;
