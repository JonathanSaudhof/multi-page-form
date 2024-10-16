import type { Metadata } from "next";
import "./globals.css";
import { createContext } from "react";
import { UseFormReturn } from "react-hook-form";
import { TForm } from "@/lib/schemas/form";

export const FormContext = createContext<{
  form: UseFormReturn<TForm>;
}>();

export const metadata: Metadata = {
  title: "Multi-form-page",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="container mx-auto min-h-screen py-4">{children}</main>
      </body>
    </html>
  );
}
