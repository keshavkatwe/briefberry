"use server";
import { object, string } from "yup";
import { auth } from "@clerk/nextjs/server";

const schema = object({
  email: string().required(),
  password: string().required(),
});

export const SignInAction = async (formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  const validatedFields = await schema.validate({
    email,
    password,
  });
};
