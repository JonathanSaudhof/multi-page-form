"use client";
import { FormCard } from "@/components/Form/FormCard/FormCard";
import { Button } from "@/components/ui/button";
import { useTenantFormContext } from "@/context/FormContext";

export default function Page2() {
  const { formState } = useTenantFormContext();
  return (
    <FormCard
      title="FormSummary"
      content={<pre>{JSON.stringify(formState)}</pre>}
      footer={<Button>Submit</Button>}
    />
  );
}
