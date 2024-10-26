"use client";
import { CreateContainer } from "@/components";
import { ProjectType } from "@/components/ProjectType";
import {
  GlobeAltIcon,
  SwatchIcon,
  DevicePhoneMobileIcon,
  CheckBadgeIcon,
  PencilIcon,
  CubeIcon,
} from "@heroicons/react/16/solid";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

const TypePage = () => {
  const router = useRouter();

  const submit = useCallback(() => {
    router.push("/new/name");
  }, [router]);

  return (
    <CreateContainer
      title={"What's your type of project?"}
      badge={"1 / 7"}
      footer={
        <>
          <button className={"btn btn-primary btn-regular"} onClick={submit}>
            Continue
          </button>
        </>
      }
    >
      <div className={"grid grid-cols-2 gap-4 grow"}>
        <ProjectType label={"Web app"} icon={GlobeAltIcon} />
        <ProjectType label={"UI/UI Design"} icon={SwatchIcon} />
        <ProjectType label={"Mobile app"} icon={DevicePhoneMobileIcon} />
        <ProjectType label={"Branding & logo"} icon={CheckBadgeIcon} />
        <ProjectType label={"Illustration"} icon={PencilIcon} />
        <ProjectType label={"3D Design"} icon={CubeIcon} />
      </div>
    </CreateContainer>
  );
};

export default TypePage;
