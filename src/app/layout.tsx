import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "MDV - Pesquisa de Satisfação",
  description: "Pesquisa de satisfação - MDV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body >{children}</body>
    </html>
  );
}
