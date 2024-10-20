import type { Metadata } from "next";
import "./globals.css";
import { Inter, Instrument_Sans } from "next/font/google";

import Image from "next/image";
import Logo from "../../public/svg/logo.svg";
import { ReactNode } from "react";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const instrument_Sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--instrument-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  auth,
}: Readonly<{
  children: ReactNode;
  auth: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${instrument_Sans.variable} antialiased`}
      >
        <div className="h-20 flex justify-between px-5 items-center">
          <Image alt={""} src={Logo} />
          <Link
            href={"/login"}
            className={"btn-secondary btn-regular rounded-full"}
          >
            Sign in
          </Link>
        </div>
        {children}
        {auth}
      </body>
    </html>
  );
}
