import { Badge } from "@/components";
import { ProjectType } from "@/components/ProjectType";
import {
  GlobeAltIcon,
  SwatchIcon,
  DevicePhoneMobileIcon,
  CheckBadgeIcon,
  PencilIcon,
  CubeIcon,
} from "@heroicons/react/16/solid";
import { Button } from "@headlessui/react";

const TypePage = () => {
  return (
    <div className={"space-y-10 h-full flex flex-col"}>
      <div className="flex items-start gap-4">
        <h1 className={"text-h2"}>What's your type of project?</h1>
        <Badge label={"1 / 7"} />
      </div>

      <div className="grow">
        <div className={"grid grid-cols-2 gap-4 grow"}>
          <ProjectType label={"Web app"} icon={GlobeAltIcon} />
          <ProjectType label={"UI/UI Design"} icon={SwatchIcon} />
          <ProjectType label={"Mobile app"} icon={DevicePhoneMobileIcon} />
          <ProjectType label={"Branding & logo"} icon={CheckBadgeIcon} />
          <ProjectType label={"Illustration"} icon={PencilIcon} />
          <ProjectType label={"3D Design"} icon={CubeIcon} />
        </div>
      </div>
      <div className={"flex justify-end pb-4"}>
        <button className={"btn btn-primary btn-regular"}>Continue</button>
      </div>
    </div>
  );
};

export default TypePage;
