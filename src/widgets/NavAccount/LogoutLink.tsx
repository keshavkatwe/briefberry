"use client";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";
import { useClerk } from "@clerk/nextjs";
import { ButtonHTMLAttributes } from "react";

const LogoutLink = (otherProps: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { signOut } = useClerk();

  return (
    <button {...otherProps} onClick={() => signOut({ redirectUrl: "/" })}>
      <ArrowLeftStartOnRectangleIcon className="size-6" />
      Log out
    </button>
  );
};
export default LogoutLink;
