"use client";
import React, { useState } from "react";
import { HeaderProps } from "../Header";
import { cn } from "@/lib/utils";
import { Icon } from "@/components";
import { SideNavbar } from "./SideNavbar";

export interface MobileNavProps extends HeaderProps {}

export const MobileNav = ({
  logo,
  navItems,
  className,
  ...props
}: MobileNavProps & React.HTMLAttributes<HTMLDivElement>) => {
  const [showSideNavBar, setShowSideNavBar] = useState(false);

  return (
    <div className={cn("", className)} {...props}>
      <button
        onClick={() => setShowSideNavBar(true)}
        className='flex h-[44px] w-[44px] items-center justify-center rounded-xl bg-dark-06'
      >
        <Icon name='Bars' className='text-white' />
      </button>
      {showSideNavBar && (
        <SideNavbar
          isVisible={showSideNavBar}
          onClick={() => setShowSideNavBar(false)}
          logo={logo}
          navItems={navItems}
        />
      )}
    </div>
  );
};
