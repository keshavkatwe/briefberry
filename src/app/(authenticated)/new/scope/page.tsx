"use client";
import { CreateContainer } from "@/components";
import { Field, Input, Label } from "@headlessui/react";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { PlusIcon } from "@heroicons/react/16/solid";

const ScopePage = () => {
  const router = useRouter();
  const submit = useCallback(() => {
    router.push("/new/scope");
  }, [router]);
  return (
    <CreateContainer
      title={"Let's break down your budget."}
      badge={"6 / 7"}
      footer={
        <>
          <button className={"btn btn-primary btn-regular"} onClick={submit}>
            Continue
          </button>
        </>
      }
    >
      <div>
        <div className={"space-y-4"}>
          <div className={"grid grid-cols-2 gap-4"}>
            <Field className={"input-field input-large"}>
              <Label>Scope of work</Label>
              <Input name={"email"} placeholder={"e.g Landing page design"} />
            </Field>
            <Field className={"input-field input-large"}>
              <Label>Budget</Label>
              <Input name={"email"} placeholder={"$"} />
            </Field>
          </div>
          <div className={"grid grid-cols-2 gap-4"}>
            <Field className={"input-field input-large"}>
              <Label>Scope of work</Label>
              <Input name={"email"} placeholder={"e.g Landing page design"} />
            </Field>
            <Field className={"input-field input-large"}>
              <Label>Budget</Label>
              <Input name={"email"} placeholder={"$"} />
            </Field>
          </div>
          <button
            className={
              "btn btn-outline btn-regular flex flex-row whitespace-nowrap gap-1"
            }
          >
            <PlusIcon className={"size-5"} />
            Add more
          </button>
        </div>
      </div>
    </CreateContainer>
  );
};
export default ScopePage;
