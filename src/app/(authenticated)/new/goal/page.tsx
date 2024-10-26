"use client";
import { CreateContainer } from "@/components";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { Field, Label, Textarea } from "@headlessui/react";

const GoalPage = () => {
  const router = useRouter();

  const submit = useCallback(() => {
    router.push("/new/date");
  }, [router]);

  return (
    <CreateContainer
      title={"What are the main goals of your project?"}
      badge={"3 / 7"}
      footer={
        <>
          <button className={"btn btn-primary btn-regular"} onClick={submit}>
            Continue
          </button>
        </>
      }
    >
      <div className={""}>
        <Field className={"input-field input-large"}>
          <Label>Project goals</Label>
          <Textarea
            name="description"
            placeholder={
              "e.g. Create a user-friendly mobile app to help people track their daily water intake"
            }
          />
        </Field>
      </div>
    </CreateContainer>
  );
};

export default GoalPage;
