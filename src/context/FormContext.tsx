import { TTenantForm } from "@/lib/schemas/form";
import { useRouter } from "next/navigation";
import { createContext, PropsWithChildren, useContext, useState } from "react";

export const PAGES = {
  details: "/form-details",
  salary: "/form-salary",
  summary: "/form-summary",
};

const TenantFormContext = createContext<{
  formState: Partial<TTenantForm>;
  updateFormState: (data: Partial<TTenantForm>) => void;
  submitData: () => void;
  navigateTo: (page: keyof typeof PAGES) => void;
}>({
  formState: {},
  updateFormState: () => {},
  submitData: () => {},
  navigateTo: () => {},
});

export const useTenantFormContext = () => useContext(TenantFormContext);

export function TenantFormContextProvider({
  children,
}: Readonly<PropsWithChildren>) {
  const [formState, setFormState] = useState<Partial<TTenantForm>>({});
  const router = useRouter();

  const navigateTo = (page: keyof typeof PAGES) => {
    router.push(PAGES[page]);
  };

  const updateFormState = (data: Partial<TTenantForm>) => {
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
    navigateTo,
  };

  return (
    <TenantFormContext.Provider value={values}>
      {children}
    </TenantFormContext.Provider>
  );
}
