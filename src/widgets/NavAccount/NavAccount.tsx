import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  MenuSeparator,
} from "@headlessui/react";
import { DocumentDuplicateIcon, UserIcon } from "@heroicons/react/24/outline";
import LogoutLink from "@/widgets/NavAccount/LogoutLink";

const linkClassname =
  "h-12 w-full rounded-16 text-hairline text-text-secondary hover:bg-background-highlight flex flex-row items-center px-3 mx-3 gap-4";

const NavAccount = async () => {
  const user = await currentUser();

  const links = [
    {
      label: "My briefs",
      link: "/briefs",
      icon: <DocumentDuplicateIcon className="size-6" />,
    },
    {
      label: "Account settings",
      link: "/settings",
      icon: <UserIcon className="size-6" />,
    },
  ];

  if (user) {
    return (
      <div className={"flex gap-3"}>
        <Link
          href={"/new/type"}
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
            {links.map((link) => (
              <MenuItem key={link.link}>
                <Link href={link.link} className={linkClassname}>
                  {link.icon}
                  {link.label}
                </Link>
              </MenuItem>
            ))}
            <MenuSeparator className={"h-px bg-background-subtle my-2"} />
            <LogoutLink className={linkClassname} />
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
