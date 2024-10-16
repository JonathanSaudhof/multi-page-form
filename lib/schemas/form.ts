import { z } from "zod";

export type TTenantForm = z.infer<typeof formSchema>;

export const salaryMap = {
  1: "0 - 1.000",
  2: "1.000 - 2.000",
  3: "2.000 - 3.000",
  4: "3.000 - 4.000",
  5: "Mehr als 4.000",
};

const errorMessage = {
  fullName: "Please enter your full name (e.g. John Doe)",
  email: "Please enter a valid email",
  phoneNumber:
    "Please enter a valid phone number in the format of +49123456789",
  salary: "Please select a salary range",
};

export const formSchema = z.object({
  fullName: z
    .string()
    .transform((val) => val.split(" ").map((val) => val.trim()))
    .refine((val) => val.length >= 2, errorMessage.fullName),
  email: z.string().email(errorMessage.email),
  phoneNumber: z.string().refine(
    // found here: https://www.twilio.com/docs/glossary/what-e164#regex-matching-for-e164
    (val) => RegExp(/^\+[1-9]\d{1,14}$/).exec(val),
    errorMessage.phoneNumber
  ),
  salary: z.coerce
    .number()
    .min(1)
    .max(5)
    .transform((val) => salaryMap[val as unknown as keyof typeof salaryMap])
    .pipe(z.string()),
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
