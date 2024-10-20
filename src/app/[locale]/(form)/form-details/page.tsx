"use client";
import { CustomInput } from "@/components/Form/CustomInput/CustomInput";
import { FormCard } from "@/components/Form/FormCard/FormCard";
import { FormWrapper } from "@/components/Form/FormWrapper/FormWrapper";
import { NavigationButton } from "@/components/Form/NavigationButton/NavigationButton";
import { Form } from "@/components/ui/form";
import { useTenantFormContext } from "@/context/FormContext";
import { TDetailsForm, detailsFormSchema } from "@/lib/schemas/form";
import { useI18n, useScopedI18n } from "@/locales/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function Home() {
  const { updateFormState, navigateTo, formState } = useTenantFormContext();

  const t = useI18n();
  const tPage = useScopedI18n("form.detailsPage");
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
      index={1}
      content={
        <Form {...form}>
          <FormWrapper>
            <CustomInput
              control={form.control}
              name="fullName"
              label={t("form.fields.fullName.label")}
              placeholder={t("form.fields.fullName.placeholder")}
              required
            />
            <CustomInput
              control={form.control}
              name="email"
              label={t("form.fields.email.label")}
              placeholder={t("form.fields.email.placeholder")}
              required
            />
            <CustomInput
              control={form.control}
              name="phoneNumber"
              label={t("form.fields.phoneNumber.label")}
              placeholder={t("form.fields.phoneNumber.placeholder")}
              required
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
