"use client";
import { TenantFormContextProvider } from "@/context/FormContext";

export default function FormLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <TenantFormContextProvider>{children}</TenantFormContextProvider>;
}
