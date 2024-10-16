"use client";
import { CustomInput } from "@/components/Form/CustomInput/CustomInput";
import { FormCard } from "@/components/Form/FormCard/FormCard";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useTenantFormContext } from "@/context/FormContext";
import { TPageTwoForm, pageTwoSchema } from "@/lib/schemas/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function FormContactPage() {
  const { updateFormState } = useTenantFormContext();
  const router = useRouter();

  const form = useForm<TPageTwoForm>({
    resolver: zodResolver(pageTwoSchema),
    reValidateMode: "onChange",
  });

  const handleSubmit = async (data: TPageTwoForm) => {
    updateFormState(data);
    router.push("/form-summary");
  };
  return (
    <FormCard
      title="Contact Information"
      content={
        <Form {...form}>
          <form className="gap-4">
            <CustomInput
              control={form.control}
              name="email"
              label="E-Mail"
              placeholder="john.doe@example.com"
              required
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
