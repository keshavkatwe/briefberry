"use client";
import { Modal } from "@/components";
import { Field, Input, Label } from "@headlessui/react";
import Link from "next/link";

const SignInWidget = () => {
  return (
    <>
      <Modal
        open={true}
        className="relative z-50"
        onClose={() => {}}
        title={"Sign in to Briefberry"}
      >
        <div className={"space-y-6 text-center"}>
          <button className={"btn-secondary btn-regular"}>
            Sign up with google
          </button>
          <p className={"text-small text-text-tertiary"}>Or use your email</p>
          <div className={"space-y-4"}>
            <Field className={"input-field"}>
              <Label>Email</Label>
              <Input placeholder={"designer@example.com"} />
            </Field>
            <Field className={"input-field"}>
              <Label>Password</Label>
              <Input placeholder={"------"} type={"password"} />
            </Field>
          </div>
          <div className={"space-y-4"}>
            <button className={"btn-primary btn-regular"}>Sign in</button>
            <p className={"text-hairline text-text-secondary"}>
              Need an account?{" "}
              <Link className="text-text-primary" href={"/sign-up"}>
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default SignInWidget;
