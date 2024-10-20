"use client";
import { FormCard } from "@/components/Form/FormCard/FormCard";
import { FormWrapper } from "@/components/Form/FormWrapper/FormWrapper";
import { NavigationButton } from "@/components/Form/NavigationButton/NavigationButton";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useTenantFormContext } from "@/context/FormContext";
import { TSalaryForm, salaryFormSchema } from "@/lib/schemas/form";
import { useI18n, useScopedI18n } from "@/locales/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function FormContactPage() {
  const { updateFormState, navigateTo, formState } = useTenantFormContext();
  const t = useI18n();
  const tPage = useScopedI18n("form.salaryPage");

  const form = useForm<TSalaryForm>({
    resolver: zodResolver(salaryFormSchema),
    defaultValues: formState,
    reValidateMode: "onChange",
  });

  const handleSubmit = async (data: TSalaryForm) => {
    updateFormState(data);
    navigateTo("summary");
  };

  return (
    <FormCard
      index={2}
      content={
        <Form {...form}>
          <FormWrapper>
            <FormField
              control={form.control}
              name="salary"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-4">
                  <FormLabel className="text-gray-400 text-xs">
                    {t("form.fields.salary.label") + " *"}
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={`${field.value}`}
                      className="flex flex-col space-y-1"
                    >
                      {new Array(5).fill(1).map((_, index) => {
                        const optionNumber = index + 1;
                        const translKey = `form.fields.salary.options.${optionNumber}`;

                        return (
                          <FormItem
                            className="flex items-center gap-6 space-y-0"
                            key={translKey}
                          >
                            <FormControl>
                              <RadioGroupItem
                                value={`${optionNumber}`}
                                className="h-6 w-6"
                              />
                            </FormControl>
                            <FormLabel className="font-normal text-md">
                              {
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-expect-error
                                t(translKey)
                              }
                            </FormLabel>
                          </FormItem>
                        );
                      })}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FormWrapper>
        </Form>
      }
      footer={
        <NavigationButton onClick={form.handleSubmit(handleSubmit)}>
          {tPage("cta")}
        </NavigationButton>
      }
    />
  );
}
