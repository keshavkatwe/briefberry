import { PropsWithChildren } from "react";

const NewLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <div>{children}</div>
      <div></div>
    </div>
  );
};
export default NewLayout;
