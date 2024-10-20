"use client";
import { Modal } from "@/components";
import { Field, Input, Label } from "@headlessui/react";
import Link from "next/link";
import { SignInAction } from "@/widgets/SignInWidget/signIn.action";

const SignInWidget = () => {
  return (
    <>
      <Modal
        open={true}
        className="relative z-50"
        onClose={() => {}}
        title={"Sign in to Briefberry"}
      >
        <form action={SignInAction}>
          <div className={"space-y-6 text-center"}>
            <button
              type={"button"}
              className={"btn-secondary btn-regular w-full"}
            >
              Sign in with google
            </button>
            <p className={"text-small text-text-tertiary"}>Or use your email</p>

            <div className={"space-y-4"}>
              <Field className={"input-field"}>
                <Label>Email</Label>
                <Input name={"email"} placeholder={"designer@example.com"} />
              </Field>
              <Field className={"input-field"}>
                <Label>Password</Label>
                <Input
                  name={"password"}
                  placeholder={"------"}
                  type={"password"}
                />
              </Field>
            </div>
            <div className={"space-y-4"}>
              <button className={"btn-primary btn-regular w-full"}>
                Sign in
              </button>
              <p className={"text-hairline text-text-secondary"}>
                Need an account?{" "}
                <Link className="text-text-primary" href={"/sign-up"}>
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
};
export default SignInWidget;
