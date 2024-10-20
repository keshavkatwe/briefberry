import { ReactNode } from "react";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";
export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      <SignedIn>{children}</SignedIn>
    </>
  );
}
