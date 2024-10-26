import Image from "next/image";
import briefGenerating from "../../../../public/png/brief-generating.png";

const BriefPage = () => {
  return (
    <div className={"pt-20 h-full flex flex-col"}>
      <div className={"w-[500px] mt-24 m-auto"}>
        <h3 className={"text-h1 text-center"}>
          Your brief will be delivered in 5 seconds.
        </h3>
      </div>
      <div className={"flex grow items-end justify-center"}>
        <Image src={briefGenerating} alt={""} />
      </div>
    </div>
  );
};
export default BriefPage;
