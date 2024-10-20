import { BriefBox } from "@/components";

const BriefsPage = () => {
  return (
    <div className={"pt-10 max-w-screen-xl m-auto space-y-12"}>
      <h1 className={"text-h1"}>My briefs</h1>
      <div className={"grid grid-cols-3 gap-6"}>
        <BriefBox />
        <BriefBox />
        <BriefBox />
        <BriefBox />
        <BriefBox />
        <BriefBox />
      </div>
    </div>
  );
};
export default BriefsPage;
