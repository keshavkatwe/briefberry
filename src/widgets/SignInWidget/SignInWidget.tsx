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
            <Field>
              <Label className="text-sm/6 font-medium text-white">
                Street address
              </Label>
              <Input
                className={
                  "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                }
              />
            </Field>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default SignInWidget;
