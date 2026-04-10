import Link, { LinkProps } from "next/link";
import React from "react";
import { Button } from "../ui";
import { Icon } from "../Icon";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const LinkButtonIconVariants = cva("items-center justify-center flex", {
  variants: {
    variant: {
      filledLight:
        "rounded-full border border-dark-20  bg-dark-12 md:h-10 md:w-10 2xl:h-[52px] 2xl:w-[52px]",
      filledDark: "rounded-full border border-dark-15  bg-dark-06 ",
      filledWhite:
        "rounded-full border border-dark-20  bg-white md:h-10 md:w-10 2xl:h-[52px] 2xl:w-[52px]",
      ghost: "bg-transparent w-fit h-fit"
    },
    size: {
      "dark-lg": "2xl:h-[68px] 2xl:w-[68px] xs:h-[52px] xs:w-[52px]",
      "dark-md": "h-12 w-12",
      "light-lg": "md:h-10 md:w-10 2xl:h-[52px] 2xl:w-[52px] xs:h-[52px] xs:w-[52px]",
      "light-md": "w-10 h-10  ",
      fit: "w-fit h-fit"
    }
  },
  defaultVariants: {
    variant: "filledLight",
    size: "light-lg"
  }
});

export interface LinkButtonProps extends VariantProps<typeof LinkButtonIconVariants> {
  label?: string;
  link: LinkProps;
  icon?: Icon;
  className?: string;
}

export const LinkButton = ({
  label,
  variant,
  className,
  size,
  icon,
  link,
  ...props
}: LinkButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  if (!link?.href) return <></>;

  return (
    <Button asChild {...props}>
      <Link
        {...link}
        href={`/${link.href}`}
        className={cn("flex flex-row gap-2", className, {
          "flex-row-reverse ": variant?.includes("ghost")
        })}
      >
        {icon && (
          <div className={cn(LinkButtonIconVariants({ variant, size }), "flex-shrink-0")}>
            <Icon name={icon} className='h-6 w-6 text-primary' />
          </div>
        )}
        {label}
      </Link>
    </Button>
  );
};
