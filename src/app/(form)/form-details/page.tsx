"use client";
import { CustomInput } from "@/components/Form/CustomInput/CustomInput";
import { FormCard } from "@/components/Form/FormCard/FormCard";
import { NavigationButton } from "@/components/Form/NavigationButton/NavigationButton";
import { Form } from "@/components/ui/form";
import { useTenantFormContext } from "@/context/FormContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { detailsFormSchema, TDetailsForm } from "../../../../lib/schemas/form";

export default function Home() {
  const { updateFormState, navigateTo, getFieldLabel } = useTenantFormContext();

  const form = useForm<TDetailsForm>({
    resolver: zodResolver(detailsFormSchema),
    reValidateMode: "onChange",
  });

  const handleSubmit = async (data: TDetailsForm) => {
    updateFormState(data);
    navigateTo("salary");
  };

  return (
    <FormCard
      title="Personal Information"
      footer={
        <NavigationButton onClick={form.handleSubmit(handleSubmit)}>
          Next
        </NavigationButton>
      }
      content={
        <Form {...form}>
          <form className="flex flex-col gap-4">
            <CustomInput
              control={form.control}
              name="fullName"
              label={getFieldLabel("fullName")}
              placeholder="John Doe"
              required
            />
            <CustomInput
              control={form.control}
              name="email"
              label={getFieldLabel("email")}
              placeholder="John.Doe@example.com"
              required
            />
            <CustomInput
              control={form.control}
              name="phoneNumber"
              label={getFieldLabel("phoneNumber")}
              placeholder="+49123456789"
              required
            />
          </form>
        </Form>
      }
    />
  );
}
