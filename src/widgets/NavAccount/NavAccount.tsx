import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

const NavAccount = async () => {
  const user = await currentUser();
  if (user) {
    return (
      <div className={"flex gap-3"}>
        <Link
          href={"/login"}
          className={"btn-primary btn-regular rounded-full"}
        >
          New brief
        </Link>
        <Image
          alt={""}
          src={user.imageUrl}
          height={48}
          width={48}
          className={"border-4 rounded-full border-background-surface2"}
        />
      </div>
    );
  }

  return (
    <Link href={"/login"} className={"btn-secondary btn-regular rounded-full"}>
      Sign in
    </Link>
  );
};
export default NavAccount;
