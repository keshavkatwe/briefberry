import Image from "next/image";
import briefGenerating from "../../../../public/png/brief-generating.png";
import { BriefWidget } from "@/widgets";

const BriefPage = () => {
  const isLoading = false;
  return (
    <div className={"pt-20 h-full flex flex-col"}>
      {isLoading && (
        <>
          <div className={"w-[500px] mt-24 m-auto"}>
            <h3 className={"text-h1 text-center"}>
              Your brief will be delivered in 5 seconds.
            </h3>
          </div>
          <div className={"flex grow items-end justify-center"}>
            <Image src={briefGenerating} alt={""} />
          </div>
        </>
      )}
      {!isLoading && <BriefWidget />}
    </div>
  );
};
export default BriefPage;
