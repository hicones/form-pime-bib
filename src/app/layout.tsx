import "@/styles/globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const Satoshi = localFont({ src: "../assets/fonts/Satoshi-Variable.ttf" });

export const metadata: Metadata = {
  title: "Form - BIB",
  description: "Formulário de pesquisa para o BIB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt_br">
      <body className={Satoshi.className}>{children}</body>
    </html>
  );
}
