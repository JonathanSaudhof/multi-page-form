import { TForm } from "@/lib/schemas/form";
import { createContext, PropsWithChildren, useContext, useState } from "react";

const TenantFormContext = createContext<{
  formState: Partial<TForm>;
  updateFormState: (data: Partial<TForm>) => void;
  submitData: () => void;
}>({
  formState: {},
  updateFormState: () => {},
  submitData: () => {},
});

export const useTenantFormContext = () => useContext(TenantFormContext);

export function TenantFormContextProvider({
  children,
}: Readonly<PropsWithChildren>) {
  const [formState, setFormState] = useState<Partial<TForm>>({});

  const updateFormState = (data: Partial<TForm>) => {
    setFormState((prev) => {
      if (!prev) {
        return data;
      }

      return { ...prev, ...data };
    });
  };

  const submitData = () => {};

  const values = {
    formState,
    updateFormState,
    submitData,
  };

  return (
    <TenantFormContext.Provider value={values}>
      {children}
    </TenantFormContext.Provider>
  );
}
