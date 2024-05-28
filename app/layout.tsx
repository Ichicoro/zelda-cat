import type { Metadata } from "next";
import "./globals.css";
import { vcHoney } from "./vchoney";

export const metadata: Metadata = {
  title: "zelda.cat",
  description: "hey :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.svg"></link>
        <link rel="mask-icon" href="favicon.svg" color="#000000"></link>
      </head>
      <body className={vcHoney.className}>{children}</body>
    </html>
  );
}
