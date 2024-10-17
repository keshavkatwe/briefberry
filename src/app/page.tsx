import Image from "next/image";

export default function Home() {
  return (
    <div className={"flex  justify-center"}>
      <div className="max-w-[705px] flex flex-col gap-5">
        <h1 className={"text-hero text-center"}>
          AI-powered project briefs for designers
        </h1>
        <p className={"text-center text-body-lg text-text-secondary"}>
          Transform your ideas into comprehensive project briefs in seconds! Let
          AI create your project brief while you focus on bringing your vision
          to life.
        </p>
      </div>
    </div>
  );
}
