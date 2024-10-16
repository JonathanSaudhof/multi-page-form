"use client";
import { FormCard } from "@/components/Form/FormCard/FormCard";
import { Button } from "@/components/ui/button";
import { useTenantFormContext } from "@/context/FormContext";
import { TTenantForm } from "@/lib/schemas/form";

export default function Page2() {
  const { formState, getFieldLabel } = useTenantFormContext();
  return (
    <FormCard
      title="FormSummary"
      content={
        <>
          {Object.entries(formState).map(([key, value]) => {
            return (
              <div key={key} className="flex gap-4">
                <span>{getFieldLabel(key as keyof TTenantForm)}:</span>
                <span>{value}</span>
              </div>
            );
          })}
        </>
      }
      footer={<Button>Submit</Button>}
    />
  );
}
