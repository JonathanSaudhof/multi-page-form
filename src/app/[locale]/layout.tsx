import { MainPageWrapper } from "@/components/MainPageWrapper/MainPageWrapper";
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
      <MainPageWrapper>{children}</MainPageWrapper>
    </I18nProviderClient>
  );
}
