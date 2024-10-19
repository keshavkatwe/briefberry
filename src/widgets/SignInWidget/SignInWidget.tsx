"use client";
import { Modal } from "@/components";
import { Field, Input, Label } from "@headlessui/react";

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
          <button className={"btn-secondary btn-regular rounded-full w-full"}>
            Sign up with google
          </button>
          <p className={"text-small text-text-tertiary"}>Or use your email</p>
          <div>
            <Field className={"input-field"}>
              <Label>Email</Label>
              <Input placeholder={"designer@example.com"} />
            </Field>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default SignInWidget;
