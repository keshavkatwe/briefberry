import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

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
            className="w-60 bg-background-surface2 mt-3 rounded-32 p-3"
          >
            <MenuItem>
              <Link
                href={"/briefs"}
                className="h-12 w-full rounded-16 text-hairline text-text-secondary hover:bg-background-highlight flex flex-col justify-center "
              >
                My briefs
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href={"/briefs"} className="block h-12">
                Log out
              </Link>
            </MenuItem>
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
