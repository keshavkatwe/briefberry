"use client";
import { Modal } from "@/components";

const SignInWidget = () => {
  return (
    <>
      <Modal
        open={true}
        className="relative z-50"
        onClose={() => {}}
        title={"Sign in to Briefberry"}
      ></Modal>
    </>
  );
};
export default SignInWidget;
