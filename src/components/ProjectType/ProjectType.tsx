import { useMemo } from "react";

interface IProjectTypeProps {
  label: string;
  icon: () => void;
}
const ProjectType = ({ label, icon }: IProjectTypeProps) => {
  const IconElement = useMemo(() => icon, [icon]);
  return (
    <div
      className={
        "h-28 border border-stroke1 rounded-32 py-5 px-6 flex flex-col justify-between"
      }
    >
      <IconElement className={"size-5 text-text-secondary"} />
      <h3 className={"text-hero text-heading text-text-secondary"}>{label}</h3>
    </div>
  );
};
export default ProjectType;
