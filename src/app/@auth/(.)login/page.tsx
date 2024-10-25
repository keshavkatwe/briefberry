"use client";
import { useRouter } from "next/navigation";
import SignInWidget from "@/widgets/SignInWidget/SignInWidget";

const LoginPage = () => {
  const { back } = useRouter();
  return <SignInWidget onClose={() => back()} />;
};
export default LoginPage;
