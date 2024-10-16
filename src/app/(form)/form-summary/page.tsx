"use client";
import { useTenantFormContext } from "@/context/FormContext";

export default function Page2() {
  const { formState } = useTenantFormContext();
  return (
    <div>
      <h1>Form State</h1>
      <pre>{JSON.stringify(formState)}</pre>
    </div>
  );
}
