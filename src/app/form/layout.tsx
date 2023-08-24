"use client";

import { FormProvider } from "@/contexts/FormContext";

export default function FormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <FormProvider>{children}</FormProvider>;
}
