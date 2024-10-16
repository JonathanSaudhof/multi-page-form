import { z } from "zod";

export type TForm = z.infer<typeof formSchema>;

export const formSchema = z.object({
  firstName: z.string().min(3),
  lastName: z.string(),
});
