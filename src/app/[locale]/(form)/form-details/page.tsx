"use client";
import { CustomInput } from "@/components/Form/CustomInput/CustomInput";
import { FormCard } from "@/components/Form/FormCard/FormCard";
import { NavigationButton } from "@/components/Form/NavigationButton/NavigationButton";
import { Form } from "@/components/ui/form";
import { useTenantFormContext } from "@/context/FormContext";
import { TDetailsForm, detailsFormSchema } from "@/lib/schemas/form";
import { useI18n } from "@/locales/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function Home() {
  const { updateFormState, navigateTo, getFieldLabel, formState } =
    useTenantFormContext();

  const t = useI18n();

  const form = useForm<TDetailsForm>({
    resolver: zodResolver(detailsFormSchema),
    defaultValues: formState,
    reValidateMode: "onChange",
  });

  const handleSubmit = async (data: TDetailsForm) => {
    updateFormState(data);
    navigateTo("salary");
  };

  return (
    <FormCard
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
              label={t("form.detailsPage.fullName.label")}
              placeholder={t("form.detailsPage.fullName.placeholder")}
              required
            />
            <CustomInput
              control={form.control}
              name="email"
              label={t("form.detailsPage.email.label")}
              placeholder={t("form.detailsPage.email.placeholder")}
              required
            />
            <CustomInput
              control={form.control}
              name="phoneNumber"
              label={t("form.detailsPage.phoneNumber.label")}
              placeholder={t("form.detailsPage.phoneNumber.placeholder")}
              required
            />
          </form>
        </Form>
      }
    />
  );
}
