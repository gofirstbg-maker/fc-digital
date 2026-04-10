import { Container, NavItemProps } from "@/components";
import Image, { ImageProps } from "next/image";
import React from "react";
import { Nav } from "../Navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

export interface HeaderProps {
  logo: ImageProps;
  navItems: NavItemProps[];
}

export const Header = ({
  logo,
  navItems,
  className,
  ...props
}: HeaderProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <header className={cn("", className)} {...props}>
      <Container className='flex flex-row justify-between bg-secondary xs:p-3.5 md:p-5 2xl:p-6'>
        <Link href='/' className='flex items-center justify-center'>
          <Image {...logo} width={100} height={18} />
        </Link>
        <Nav navItems={navItems} logo={logo} />
      </Container>
    </header>
  );
};
