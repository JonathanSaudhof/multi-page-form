import { TTenantForm } from "@/lib/schemas/form";
import { useRouter } from "next/navigation";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

export const PAGES = {
  details: "/form-details",
  salary: "/form-salary",
  summary: "/form-summary",
};

const START_PAGE_INDEX = 1;

const FieldLabelMap: {
  [key in keyof TTenantForm]: string;
} = {
  fullName: "Name",
  email: "Email",
  salary: "Salary",
  phoneNumber: "Phone Number",
};

const TenantFormContext = createContext<{
  formState: Partial<TTenantForm>;
  updateFormState: (data: Partial<TTenantForm>) => void;
  submitData: () => void;
  navigateTo: (page: keyof typeof PAGES) => void;
  getFieldLabel: (field: keyof TTenantForm) => string;
  pageIndex: number;
}>({
  formState: {},
  updateFormState: () => {},
  submitData: () => {},
  navigateTo: () => {},
  getFieldLabel: () => "",
  pageIndex: START_PAGE_INDEX,
});

export const useTenantFormContext = () => useContext(TenantFormContext);

export function TenantFormContextProvider({
  children,
}: Readonly<PropsWithChildren>) {
  const [formState, setFormState] = useState<Partial<TTenantForm>>({});
  const [pageIndex, setPageIndex] = useState(START_PAGE_INDEX);
  const router = useRouter();

  useEffect(() => {
    const isStateEmpty = Object.keys(formState).length === 0;
    if (isStateEmpty) {
      setPageIndex(START_PAGE_INDEX);
      router.push(PAGES.details);
    }
  }, [formState, router]);

  const navigateTo = (page: keyof typeof PAGES) => {
    setPageIndex((prev) => prev + 1);
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

  const getFieldLabel = (field: keyof TTenantForm) => {
    return FieldLabelMap[field];
  };

  const values = {
    formState,
    updateFormState,
    submitData,
    navigateTo,
    getFieldLabel,
    pageIndex,
  };

  return (
    <TenantFormContext.Provider value={values}>
      {children}
    </TenantFormContext.Provider>
  );
}
