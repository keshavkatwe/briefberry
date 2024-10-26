"use client";
import { CreateContainer } from "@/components";
import { Field, Input, Label } from "@headlessui/react";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

const NamePage = () => {
  const router = useRouter();
  const submit = useCallback(() => {
    router.push("/new/goal");
  }, [router]);
  return (
    <CreateContainer
      title={"What's the name of your project?"}
      badge={"2 / 7"}
      footer={
        <>
          <button className={"btn btn-primary btn-regular"} onClick={submit}>
            Continue
          </button>
        </>
      }
    >
      <div>
        <Field className={"input-field input-large"}>
          <Label>Project name</Label>
          <Input name={"email"} placeholder={"e.g. UI8 Studio Web Design"} />
        </Field>
      </div>
    </CreateContainer>
  );
};
export default NamePage;
