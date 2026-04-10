"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { type InputCaptions, SubscriptionForm } from "../Forms";
import { type SubscriptionFormValue } from "@/schemas";
import { SubmitHandler } from "react-hook-form";

export interface FooterSubscriptionProps {
  label: string;
  title: string;
  emailInputCaptions: InputCaptions;
}

const defValues: SubscriptionFormValue = {
  email: ""
};

export const FooterSubscription = ({
  label,
  title,
  emailInputCaptions
}: FooterSubscriptionProps & React.HTMLAttributes<HTMLDivElement>) => {
  const submitFunction: SubmitHandler<SubscriptionFormValue> = async data => console.log(data);

  return (
    <div
      className={cn(
        "2xl:p-[50px ] flex justify-between rounded-[14px] bg-secondary xs:flex-col xs:gap-4 xs:p-6 md:flex-row md:p-10 2xl:gap-5"
      )}
    >
      <div className='flex-shrink-0'>
        <h4 className='uppercase text-grey-40 xs:Body-14-mono md:Body-16-mono 2xl:Body-18-mono'>
          {label}
        </h4>
        <h3 className='uppercase text-orange-95 xs:Body-18 md:Heading-20 2xl:Heading-24'>
          {title}
        </h3>
      </div>
      <SubscriptionForm
        emailInputCaptions={emailInputCaptions}
        submitFunction={submitFunction}
        defaultValues={defValues}
      />
    </div>
  );
};
