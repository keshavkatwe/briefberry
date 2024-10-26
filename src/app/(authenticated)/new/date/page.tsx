"use client";
import { CreateContainer } from "@/components";
import { Field, Input, Label } from "@headlessui/react";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

const DatePage = () => {
  const router = useRouter();
  const submit = useCallback(() => {
    router.push("/new/budget");
  }, [router]);
  return (
    <CreateContainer
      title={"When do you need this project completed?"}
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
          <Label>Select date</Label>
          <Input
            name={"email"}
            placeholder={"Write anytime here. e.g. tomorrow or 18 Oct 2024"}
          />
        </Field>
      </div>
    </CreateContainer>
  );
};
export default DatePage;
