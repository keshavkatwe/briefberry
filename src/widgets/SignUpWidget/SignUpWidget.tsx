"use client";
import { Modal } from "@/components";
import { Field, Input, Label } from "@headlessui/react";
import Link from "next/link";

const SignUpWidget = () => {
  return (
    <>
      <Modal
        open={true}
        className="relative z-50"
        onClose={() => {}}
        title={"Create an account"}
      >
        <div className={"space-y-6 text-center"}>
          <button className={"btn-secondary btn-regular w-full"}>
            Sign up with Google
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
            <button className={"btn-primary btn-regular w-full"}>
              Create account
            </button>
            <p className={"text-hairline text-text-secondary"}>
              Already have an account?{" "}
              <Link className="text-text-primary" href={"/login"} replace>
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default SignUpWidget;
