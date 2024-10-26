import { PropsWithChildren } from "react";
import Image from "next/image";
import FormIllustration from "../../../../public/png/form-illustration.png";

const NewLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex h-full">
      <div className={"w-3/5 pt-20 h-full"}>
        <div className={"py-4 px-32 h-full"}>{children}</div>
      </div>
      <div
        className={
          "w-1/2 bg-background-subtle flex justify-end items-center pt-20"
        }
      >
        <Image
          className={"max-h-full h-full w-auto"}
          alt={""}
          src={FormIllustration}
        />
      </div>
    </div>
  );
};
export default NewLayout;
