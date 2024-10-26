"use client";
import { CreateContainer } from "@/components";
import { Field, Input, Label } from "@headlessui/react";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

const BudgetPage = () => {
  const router = useRouter();
  const submit = useCallback(() => {
    router.push("/new/scope");
  }, [router]);
  return (
    <CreateContainer
      title={"What's your budget for this project?"}
      badge={"5 / 7"}
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
          <Label>Your budget</Label>
          <Input name={"email"} placeholder={"0"} />
        </Field>
      </div>
    </CreateContainer>
  );
};
export default BudgetPage;
