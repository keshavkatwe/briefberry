import { MenuItem } from "@headlessui/react";
import Link from "next/link";
import { useMemo } from "react";

interface IMenuLinkProps {
  label: string;
  href: string;
  icon: Function;
}
const MenuLink = ({ label, href, icon }: IMenuLinkProps) => {
  const IconElement = useMemo(() => icon, [icon]);
  return (
    <MenuItem>
      <Link
        href={href}
        className="h-12 w-full rounded-16 text-hairline text-text-secondary hover:bg-background-highlight flex flex-row items-center px-3 mx-3 gap-4"
      >
        <IconElement className="size-6" />
        {label}
      </Link>
    </MenuItem>
  );
};
export default MenuLink;
