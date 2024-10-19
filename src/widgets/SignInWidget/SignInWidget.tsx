"use client";
import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

const SignInWidget = () => {
  return (
    <>
      <Dialog open={true} className="relative z-50" onClose={() => {}}>
        <DialogBackdrop className="fixed inset-0 bg-background-overlay" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 bg-background-surface1 p-12 rounded-32">
            <DialogTitle className="text-h3 text-center">
              Sign in to Briefberry
            </DialogTitle>
            <Description>
              This will permanently deactivate your account
            </Description>
            <p>
              Are you sure you want to deactivate your account? All of your data
              will be permanently removed.
            </p>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};
export default SignInWidget;
