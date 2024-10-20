import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { Menu, MenuButton, MenuItems, MenuSeparator } from "@headlessui/react";
import MenuLink from "@/widgets/NavAccount/MenuLink";
import {
  DocumentDuplicateIcon,
  ArrowLeftStartOnRectangleIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

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

        <Menu>
          <MenuButton>
            <Image
              alt={""}
              src={user.imageUrl}
              height={48}
              width={48}
              className={"border-4 rounded-full border-background-surface2"}
            />
          </MenuButton>

          <MenuItems
            transition
            anchor="bottom end"
            className="w-60 bg-background-surface2 mt-3 rounded-32 py-3"
          >
            <MenuLink
              label={"My briefs"}
              href={"/briefs"}
              icon={DocumentDuplicateIcon}
            />
            <MenuLink
              label={"Account settings"}
              href={"/settings"}
              icon={UserIcon}
            />
            <MenuSeparator className={"h-px bg-background-subtle my-2"} />
            <MenuLink
              label={"Log out"}
              href={"/briefs"}
              icon={ArrowLeftStartOnRectangleIcon}
            />
          </MenuItems>
        </Menu>
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
