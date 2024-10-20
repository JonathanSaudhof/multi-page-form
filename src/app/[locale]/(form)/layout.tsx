"use client";
import { TenantFormContextProvider } from "@/context/FormContext";
import Image from "next/image";
import apartment from "@/assets/apartment.jpg";
export default function FormLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TenantFormContextProvider>
      <div className="container mx-auto flex justify-between flex-col md:flex-row items-stretch">
        <div className="flex flex-col space-y-6 w-full md:flex-1 py-8">
          {children}
        </div>
        <div className="relative flex-1 w-full">
          <Image
            src={apartment}
            alt={"Photo of an apartment from Patrick Perkins from Unsplash"}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <span className="absolute -bottom-4 right-0 text-muted-foreground text-xs">
            <a href="https://unsplash.com/de/@patrickperkins?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Patrick Perkins
            </a>{" "}
            auf{" "}
            <a href="https://unsplash.com/de/fotos/grauer-stoff-zweisitzer-in-der-nahe-des-braunen-holztisches-3wylDrjxH-E?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Unsplash
            </a>
          </span>
        </div>
      </div>
    </TenantFormContextProvider>
  );
}
