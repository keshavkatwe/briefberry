"use client";
import { Modal } from "@/components";
import { Field, Input, Label } from "@headlessui/react";
import Link from "next/link";
import SubmitButton from "../SubmitButton/SubmitButton";
import { useSignIn } from "@clerk/nextjs";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

const SignInWidget = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const onFormSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      if (!isLoaded) {
        return;
      }
      try {
        const signInAttempt = await signIn?.create({
          identifier: email,
          password: password,
        });

        if (signInAttempt?.status === "complete") {
          await setActive?.({ session: signInAttempt?.createdSessionId });
          router.push("/briefs");
          router.refresh();
        } else {
          // If the status is not complete, check why. User may need to
          // complete further steps.
          console.error(JSON.stringify(signInAttempt, null, 2));
        }
      } catch (e) {
        console.log(e);
      }
    },
    [email, isLoaded, password, router, setActive, signIn],
  );

  return (
    <>
      <Modal
        open={true}
        className="relative z-50"
        onClose={() => {}}
        title={"Sign in to Briefberry"}
      >
        <form onSubmit={onFormSubmit}>
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
                <Input
                  name={"email"}
                  placeholder={"designer@example.com"}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Field>
              <Field className={"input-field"}>
                <Label>Password</Label>
                <Input
                  name={"password"}
                  placeholder={"------"}
                  type={"password"}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Field>
            </div>
            <div className={"space-y-4"}>
              <SubmitButton label={"Sign in"} />
              <p className={"text-hairline text-text-secondary"}>
                Need an account?{" "}
                <Link className="text-text-primary" href={"/register"} replace>
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
