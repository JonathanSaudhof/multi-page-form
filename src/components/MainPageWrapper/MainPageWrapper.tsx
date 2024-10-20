"use client";
import { useI18n } from "@/locales/client";
import { PropsWithChildren } from "react";

export function MainPageWrapper({ children }: Readonly<PropsWithChildren>) {
  const t = useI18n();
  return (
    <>
      <header className="bg-background text-foreground px-8 py-12 text-2xl">
        {t("page.title")}
      </header>
      <main className="bg-muted min-h-screen">{children}</main>
    </>
  );
}
