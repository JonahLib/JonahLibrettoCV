"use client";

import Link from "next/link";
import Image from "next/image";
import { NavItemProps } from "./types";
import { ReactElement } from "react";
import { NullableReactElement } from "@/typings/util";
import clsx from "clsx";
import { isSelected } from "./helpers";
import { usePathname } from "next/navigation";

const NavItem = ({
  icon,
  title,
  description,
  link,
}: NavItemProps): ReactElement => {
  const pathname = usePathname();

  const renderTitle = (): ReactElement => {
    return <h1 className="font-bold">{title}</h1>;
  };

  const renderIcon = (): NullableReactElement => {
    if (!icon) return null;

    return <Image src={icon} alt="nav-icon" width={24} height={24} />;
  };

  const renderDecription = (): NullableReactElement => {
    if (!description) return null;

    return <p className="text-sky-50">{description}</p>;
  };

  return (
    <li
      className={clsx(
        "border-b-2 flex w-full flex-col justify-between  hover:bg-cyan-600 hover:rounded-md",
        isSelected(link, pathname) && "border-l-8 border-l-white rounded-l-md"
      )}
    >
      <Link href={link} className=" flex flex-col w-full p-2 pl-4">
        <div className="flex justify-start align-middle gap-2">
          {renderIcon()}
          {renderTitle()}
        </div>
        {renderDecription()}
      </Link>
    </li>
  );
};

export default NavItem;
