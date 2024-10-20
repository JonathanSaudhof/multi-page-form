"use client";
import { CTA } from "@/components/Form/CTA/CTA";
import { FormCard } from "@/components/Form/FormCard/FormCard";
import { useTenantFormContext } from "@/context/FormContext";
import { useScopedI18n } from "@/locales/client";
import { PropsWithChildren } from "react";

export default function Summary() {
  const { formState } = useTenantFormContext();
  const tFields = useScopedI18n("form.fields");
  const tPage = useScopedI18n("form.summaryPage");
  return (
    <FormCard
      index={3}
      content={
        <div className="flex flex-col gap-6">
          <SummaryRow>
            <SummaryItemLabel>{tFields("fullName.label")}:</SummaryItemLabel>
            <SummaryItemValue>{formState.fullName ?? "-"}</SummaryItemValue>
          </SummaryRow>
          <SummaryRow>
            <SummaryItemLabel>{tFields("email.label")}:</SummaryItemLabel>
            <SummaryItemValue>{formState.email ?? "-"}</SummaryItemValue>
          </SummaryRow>
          <SummaryRow>
            <SummaryItemLabel>{tFields("phoneNumber.label")}:</SummaryItemLabel>
            <SummaryItemValue>{formState.phoneNumber ?? "-"}</SummaryItemValue>
          </SummaryRow>
          <SummaryRow>
            <SummaryItemLabel>{tFields("salary.label")}:</SummaryItemLabel>
            <SummaryItemValue>
              {formState.salary
                ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-expect-error
                  tFields("salary.options." + formState.salary)
                : "-"}
            </SummaryItemValue>
          </SummaryRow>
          <p></p>
        </div>
      }
      footer={
        <CTA
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        >
          {tPage("cta")}
        </CTA>
      }
    />
  );
}

function SummaryRow({ children }: Readonly<PropsWithChildren>) {
  return <div className="flex gap-4">{children}</div>;
}

function SummaryItemLabel({ children }: Readonly<PropsWithChildren>) {
  return <span className="text-gray-400 text-xs flex-1">{children}</span>;
}
function SummaryItemValue({ children }: Readonly<PropsWithChildren>) {
  return <span className="text-sm font-extralight flex-1">{children}</span>;
}
