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
            <Field className={"relative"}>
              <Label className="absolute bg-background-surface1 -top-[5px] mx-5 px-2 text-small">
                Email
              </Label>
              <Input
                className={
                  "h-12 bg-background-transparent border rounded-full px-7 text-button w-full border-stroke1"
                }
                placeholder={"designer@example.com"}
              />
            </Field>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default SignInWidget;
