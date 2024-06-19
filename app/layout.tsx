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
        <meta name="darkreader-lock">
      </head>
      <body className={vcHoney.className}>
        <main className={"p-7 sm:p-10 text-red-950 bg-orange-200 font-vc-honey font-bold text-xl gap-5"}>
          {children}
        </main>
      </body>
    </html>
  );
}
