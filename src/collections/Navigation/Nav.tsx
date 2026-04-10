import { NavItem, type NavItemProps } from "@/components";
import { cn } from "@/lib/utils";
import React from "react";
import { MobileNav } from "./MobileNav";
import { ImageProps } from "next/image";

export interface NavProps {
  navItems: NavItemProps[];
  logo: ImageProps;
}

export const Nav = ({ navItems, logo }: NavProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <nav>
      <ul className='flex-row xs:hidden md:gap-3.5 lg:flex 2xl:gap-4 '>
        {navItems.map(({ label, link }, index) => (
          <NavItem
            key={index}
            label={label}
            link={link}
            className={cn("", {
              "bg-primary text-dark-06": label.toLowerCase() === "contact us"
            })}
          />
        ))}
      </ul>

      <MobileNav className='xs:flex lg:hidden' navItems={navItems} logo={logo} />
    </nav>
  );
};
