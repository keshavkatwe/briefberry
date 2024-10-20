"use server";
import { auth } from "@clerk/nextjs/server";

export const SignInAction = async (formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");
  console.log(email, password);
  // const { signIn } = auth();
};
