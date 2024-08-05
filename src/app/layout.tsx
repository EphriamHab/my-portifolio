import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";

export const metadata: Metadata = {
  title: "Ephrem | Portifolio",
  description: "personal Portifolio website",
  

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="Pi.png" type="image/png" sizes="32x32" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
