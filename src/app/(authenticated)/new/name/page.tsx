import { CreateContainer } from "@/components";
import { Field, Input, Label } from "@headlessui/react";

const NamePage = () => {
  return (
    <CreateContainer
      title={"What's the name of your project?"}
      badge={"2 / 7"}
      footer={
        <>
          <button className={"btn btn-primary btn-regular"}>Continue</button>
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
