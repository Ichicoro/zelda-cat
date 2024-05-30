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
        <link rel="icon" href="favicon.ico" type="*" />
        <link rel="icon" href="favicon.svg" type="image/svg+xml" />
        <link rel="mask-icon" href="favicon.svg" color="#000000"></link>
      </head>
      <body className={vcHoney.className}>
        <main className={"min-h-screen p-7 sm:p-10 text-red-950 bg-orange-200 font-vc-honey gap-5"}>
          {children}
        </main>
      </body>
    </html>
  );
}
