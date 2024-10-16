"use client";
import { CustomInput } from "@/components/Form/CustomInput/CustomInput";
import { FormCard } from "@/components/Form/FormCard/FormCard";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useTenantFormContext } from "@/context/FormContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { pageOneFormSchema, TPageOneForm } from "../../../../lib/schemas/form";

export default function Home() {
  const { updateFormState } = useTenantFormContext();
  const router = useRouter();

  const form = useForm<TPageOneForm>({
    resolver: zodResolver(pageOneFormSchema),
    reValidateMode: "onChange",
  });

  const handleSubmit = async (data: TPageOneForm) => {
    updateFormState(data);
    router.push("/form-contact");
  };

  return (
    <FormCard
      title="Personal Information"
      footer={
        <Button type="button" onClick={form.handleSubmit(handleSubmit)}>
          Next
        </Button>
      }
      content={
        <Form {...form}>
          <form className="gap-4">
            <CustomInput
              control={form.control}
              name="firstName"
              label="First Name"
              placeholder="John"
              required
            />
            <CustomInput
              control={form.control}
              name="lastName"
              label="Last Name"
              placeholder="Doe"
              required
            />
          </form>
        </Form>
      }
    />
  );
}
