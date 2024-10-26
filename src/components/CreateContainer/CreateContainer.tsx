import { Badge } from "@/components";
import { PropsWithChildren, ReactElement } from "react";

interface ICreateContainerProps {
  title: string;
  badge: string;
  footer: ReactElement;
}
const CreateContainer = ({
  title,
  badge,
  children,
  footer,
}: PropsWithChildren<ICreateContainerProps>) => {
  return (
    <div className={"space-y-10 h-full flex flex-col"}>
      <div className="flex items-start gap-4">
        <h1 className={"text-h2"}>{title}</h1>
        <Badge label={badge} />
      </div>
      <div className="grow">{children}</div>
      <div className={"flex justify-end pb-4"}>{footer}</div>
    </div>
  );
};
export default CreateContainer;
