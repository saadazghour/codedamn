"use client";

import React from "react";
import SideBarIcon from "@/SideBarIcon";
import SideBarInActive from "@/SideBarInActive";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

// import { Card } from "@/Card";

type sideBarItemProps = {
  isActive: boolean;
  label: string;
};

const SideBar = () => {
  const pathname = usePathname();

  // console.log("pathname", pathname);

  return (
    <div className="flex flex-col gap-4 px-4 py-4 border">
      {/* <SideBarItem label="Profile" isActive={pathname === "/profile/edit"} /> */}
      <SideBarItem label="Profile" isActive={true} />
      <SideBarItem label="Socials" isActive={pathname === "/profile/socials"} />
      <SideBarItem
        label="Portfolio"
        isActive={pathname === "/profile/portfolio"}
      />
      <SideBarItem label="Resume" isActive={pathname === "/profile/resume"} />
    </div>
  );
};

const SideBarItem = ({ label, isActive }: sideBarItemProps) => {
  return (
    <Link
      className="relative flex items-center gap-4"
      href={isActive ? `#` : `profile/edit/${label.toLowerCase()}`}
    >
      {isActive && (
        <div className="absolute w-1 h-full bg-black border-2 border-black rounded-e-md -left-3"></div>
      )}

      {isActive ? <SideBarIcon /> : <SideBarInActive />}

      <span
        className={
          isActive ? "text-black font-semibold" : "text-gray-400 font-semibold"
        }
      >
        {label}
      </span>
    </Link>
  );
};

export default SideBar;
