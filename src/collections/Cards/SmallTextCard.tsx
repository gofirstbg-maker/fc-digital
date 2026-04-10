import { cn } from "@/lib/utils";
import React from "react";
import { LinkButton, LinkButtonProps } from "../../components/Buttons";

export interface SmallTextCardProps {
  label?: string;
  value?: string;
  linkBtn?: LinkButtonProps;
}

export const SmallTextCard = ({
  label,
  value,
  linkBtn,
  className,
  ...props
}: SmallTextCardProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-center rounded-xl bg-secondary xs:px-3.5 xs:py-4   md:px-4 md:py-5 2xl:px-[30px] 2xl:py-5",
        className
      )}
      {...props}
    >
      {linkBtn ? (
        <LinkButton
          {...linkBtn}
          variant={"filledDark"}
          size={"dark-md"}
          className='!p-0 uppercase'
        />
      ) : (
        <div className='flex flex-col items-center'>
          <p className='uppercase text-grey-70 xs:Body-14-md 2xl:Body-18-md'>{label}</p>
          <p className='text-orange-70 xs:Body-40 2xl:Body-60'>{value}</p>
        </div>
      )}
    </div>
  );
};
