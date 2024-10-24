import { Badge } from "@/components";

const TypePage = () => {
  return (
    <div>
      <div className="flex items-start gap-4">
        <h1 className={"text-h2"}>What's your type of project?</h1>
        <Badge label={"1 / 7"} />
      </div>
    </div>
  );
};

export default TypePage;
