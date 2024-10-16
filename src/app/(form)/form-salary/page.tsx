"use client";
import { FormCard } from "@/components/Form/FormCard/FormCard";
import { Button } from "@/components/ui/button";
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
import { TSalaryForm, salaryFormSchema, salaryMap } from "@/lib/schemas/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function FormContactPage() {
  const { updateFormState, navigateTo, getFieldLabel } = useTenantFormContext();

  const form = useForm<TSalaryForm>({
    resolver: zodResolver(salaryFormSchema),
    reValidateMode: "onChange",
  });

  const handleSubmit = async (data: TSalaryForm) => {
    updateFormState(data);
    navigateTo("summary");
  };
  return (
    <FormCard
      title="Contact Information"
      content={
        <Form {...form}>
          <form className="w-2/3 space-y-6">
            <FormField
              control={form.control}
              name="salary"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>{getFieldLabel("salary")}</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      {Object.entries(salaryMap).map(([key, value]) => (
                        <FormItem
                          className="flex items-center space-x-3 space-y-0"
                          key={`${key}-${value}`}
                        >
                          <FormControl>
                            <RadioGroupItem value={`${key}`} />
                          </FormControl>
                          <FormLabel className="font-normal">{value}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      }
      footer={
        <Button type="button" onClick={form.handleSubmit(handleSubmit)}>
          Next
        </Button>
      }
    />
  );
}
