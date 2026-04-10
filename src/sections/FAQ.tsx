"use client";
import { ContactForm, ContactFormProps } from "@/collections";
import {
  Container,
  LinkButtonProps,
  SectionContainer,
  SectionHeading,
  _Accordion
} from "@/components";
import { AccordionItemProps } from "@/components/Accordion/AccordionItem";
import { useSendQuestion } from "@/hooks/use-send-question";
import { cn } from "@/lib/utils";
import { ContactFormValue } from "@/schemas";
import React from "react";
import { SubmitHandler } from "react-hook-form";

export interface FAQProps {
  title: string;
  linkBtn: LinkButtonProps;
  accordionItems: Omit<AccordionItemProps, "value">[];
  formCaptions: Omit<ContactFormProps, "submitFunction" | "defaultValues">;
}

export const FAQ = ({
  title,
  linkBtn,
  accordionItems,
  formCaptions,
  className,
  ...props
}: FAQProps & React.HTMLAttributes<HTMLDivElement>) => {
  //Mutation
  const { mutate, isPending, isSuccess } = useSendQuestion();
  const submitHandler: SubmitHandler<ContactFormValue> = async data => {
    mutate(data);
  };

  return (
    <SectionContainer className={cn("!p-0", className)} {...props}>
      <SectionHeading title={title} linkBtn={linkBtn} className='xs:mb-2.5 2xl:mb-5' />
      <Container className='grid w-full grid-cols-12 !p-0 xs:gap-2.5 2xl:gap-5'>
        <div className='xs:col-span-12 lg:col-span-7'>
          <_Accordion items={accordionItems} />
        </div>
        <div className='xs:col-span-12 lg:col-span-5'>
          <ContactForm
            isPending={isPending}
            isSuccess={isSuccess}
            submitFunction={submitHandler}
            defaultValues={{ email: "", message: "", name: "" }}
            {...formCaptions}
          />
        </div>
      </Container>
    </SectionContainer>
  );
};
