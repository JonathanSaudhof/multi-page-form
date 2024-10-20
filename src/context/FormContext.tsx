import { TTenantForm } from "@/lib/schemas/form";
import PAGES from "@/routes/pages";
import { usePathname, useRouter } from "next/navigation";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

const FIRST_PAGE = PAGES.details;

const TenantFormContext = createContext<{
  formState: Partial<TTenantForm>;
  // eslint-disable-next-line no-unused-vars
  updateFormState: (data: Partial<TTenantForm>) => void;
  submitData: () => void;
  // eslint-disable-next-line no-unused-vars
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
  const pathname = usePathname();

  // NOTE: redirect to first page, if
  useEffect(() => {
    const isStateEmpty = Object.keys(formState).length === 0;
    const isFirstPage = pathname === FIRST_PAGE;
    if (isStateEmpty && !isFirstPage) {
      router.push(FIRST_PAGE);
    }
  }, [formState, pathname, router]);

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
