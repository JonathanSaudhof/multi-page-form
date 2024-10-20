import { z } from "zod";
import de from "@/locales/de";
export type TTenantForm = z.infer<typeof formSchema>;

const errorMessage: { [key: string]: keyof (typeof de)["form"]["fields"] } = {
  fullName: "fullName",
  email: "email",
  phoneNumber: "phoneNumber",
  salary: "salary",
};

export const formSchema = z.object({
  fullName: z
    .string()
    .refine((val) => val.split(" ").length >= 2, errorMessage.fullName),
  email: z.string().email(errorMessage.email),
  phoneNumber: z.string().refine(
    // found here: https://www.twilio.com/docs/glossary/what-e164#regex-matching-for-e164
    (val) => RegExp(/^\+[1-9]\d{1,14}$/).exec(val),
    errorMessage.phoneNumber
  ),
  salary: z.coerce.number().min(1).max(5),
});

export const detailsFormSchema = formSchema.pick({
  fullName: true,
  email: true,
  phoneNumber: true,
});

export type TDetailsForm = z.infer<typeof detailsFormSchema>;

export const salaryFormSchema = formSchema.pick({
  salary: true,
});

export type TSalaryForm = z.infer<typeof salaryFormSchema>;
