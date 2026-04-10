import { NavItem, NavItemProps } from "@/components";
import useCloseModalOnClickOut from "@/hooks/use-close-modal-on-click-out";
import useRemoveScrollWhenModalIsOpen from "@/hooks/use-remove-scroll-when-modalIs-open";
import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";
import React, { useRef } from "react";

export interface SideNavbarProps {
  onClick: () => void;
  isVisible: boolean;
  logo: ImageProps;
  navItems: NavItemProps[];
}

export const SideNavbar = ({
  isVisible,
  logo,
  navItems,
  onClick,
  className,
  ...props
}: SideNavbarProps & React.HTMLAttributes<HTMLDivElement>) => {
  const navSidebarRef = useRef<HTMLDivElement>(null);
  //Custom Hooks
  useCloseModalOnClickOut(navSidebarRef, () => onClick());
  useRemoveScrollWhenModalIsOpen(isVisible);

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 top-0 z-[100] h-screen w-screen bg-[rgba(0,0,0,0.2)] transition-all duration-300",
        { "invisible opacity-0": !isVisible },
        { "animate-fade animate-duration-300 animate-ease-out visible opacity-100": isVisible }
      )}
      {...props}
    >
      <div
        ref={navSidebarRef}
        className={cn(
          "animate-fade-right scrollbar-hide animate-duration-300 animate-delay-100 absolute bottom-0 left-0 top-0 flex w-full flex-col gap-8 bg-secondary  pt-6 transition-all delay-100 duration-300 xs:max-w-[256px] xs:px-4 xs:pb-[45px] md:max-w-[390px] md:px-[45px] md:pb-0",
          { "invisible  opacity-0": !isVisible },
          {
            "animate-fade-right  animate-duration-300 animate-delay-100 visible translate-x-0 opacity-100":
              isVisible
          },
          className
        )}
        {...props}
      >
        <div className='flex w-full flex-col justify-center gap-20 '>
          <div className='h-[17px] w-[117px]'>
            <Image {...logo} alt='logo' height={18} width={119} />
          </div>
          <div className='scrollbar-hide flex h-full w-full flex-col justify-between gap-5 overflow-y-auto md:pb-10'>
            <div className='flex flex-col'>
              <nav className={cn("w-full transition-all duration-300", className)} {...props}>
                <ul className='flex flex-col gap-4'>
                  {navItems.map((item, index) => (
                    <NavItem
                      className={cn("", {
                        "bg-primary text-dark-06": item.label.toLowerCase() === "contact us"
                      })}
                      key={index}
                      {...item}
                      onClickClose={onClick}
                    />
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
