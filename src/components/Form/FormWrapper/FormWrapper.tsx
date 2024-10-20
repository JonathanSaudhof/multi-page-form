import { PropsWithChildren } from "react";

export function FormWrapper({ children }: Readonly<PropsWithChildren>) {
  return <form className="flex flex-col gap-4">{children}</form>;
}
