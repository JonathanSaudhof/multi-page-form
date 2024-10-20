import { I18nProviderClient } from "@/locales/client";
import { PropsWithChildren } from "react";

export default function LocaleLayout({
  params: { locale },
  children,
}: Readonly<
  PropsWithChildren<{
    params: { locale: string };
  }>
>) {
  return (
    <I18nProviderClient locale={locale}>
      <nav className="bg-background text-foreground px-4 py-8 text-xl font-thin font-mono">
        Tenant Application
      </nav>
      <main className="container min-h-screen bg-muted-foreground">
        {children}
      </main>
    </I18nProviderClient>
  );
}
