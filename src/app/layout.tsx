import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import Logo from "../../public/svg/logo.svg";
import { ReactNode } from "react";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
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
