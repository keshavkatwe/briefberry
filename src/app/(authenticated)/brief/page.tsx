import Image from "next/image";
import briefGenerating from "../../../../public/png/brief-generating.png";
import { BriefWidget } from "@/widgets";

const BriefPage = () => {
  const isLoading = false;
  return (
    <div className={"h-full flex flex-col"}>
      {isLoading && (
        <>
          <div className={"pt-20 w-[500px] mt-24 m-auto"}>
            <h3 className={"text-h1 text-center"}>
              Your brief will be delivered in 5 seconds.
            </h3>
          </div>
          <div className={"flex grow items-end justify-center"}>
            <Image src={briefGenerating} alt={""} />
          </div>
        </>
      )}
      {!isLoading && (
        <div className={"py-20 "}>
          <BriefWidget />
        </div>
      )}
    </div>
  );
};
export default BriefPage;
