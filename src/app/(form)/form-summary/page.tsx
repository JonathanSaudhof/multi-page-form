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
        <div className="flex flex-col gap-4">
          {Object.entries(formState).map(([key, value]) => {
            return (
              <div key={key} className="flex gap-4">
                <span className="text-gray-400 text-xs flex-1">
                  {getFieldLabel(key as keyof TTenantForm)}:
                </span>
                <span className="text-sm font-extralight flex-1">{value}</span>
              </div>
            );
          })}
        </div>
      }
      footer={<Button>Submit</Button>}
    />
  );
}
