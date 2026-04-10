"use client";
import { Button, Form } from "@/components";
import { contactFormSchema, ContactFormValue } from "@/schemas";
import React from "react";
import { DefaultValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { TextArea, TextInput } from "@/components/Inputs";

export type InputCaptions = {
  label?: string;
  placeholder: string;
};

export interface ContactFormProps {
  submitFunction: SubmitHandler<ContactFormValue>;
  defaultValues?: DefaultValues<ContactFormValue>;
  title: string;
  submitButtonLabel: string;
  nameInputCaption: InputCaptions;
  emailInputCaption: InputCaptions;
  textareaInputCaption: InputCaptions;
  isPending?: boolean;
  isSuccess?: boolean;
}

export const ContactForm = ({
  defaultValues,
  submitFunction,
  title,
  isPending,
  isSuccess,
  className,
  submitButtonLabel,
  emailInputCaption,
  nameInputCaption,
  textareaInputCaption,
  ...props
}: ContactFormProps & React.HTMLAttributes<HTMLFormElement>) => {
  //useForm Hook
  const form = useForm<ContactFormValue>({
    resolver: zodResolver(contactFormSchema),
    defaultValues
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(submitFunction)}
        className={cn(
          "flex flex-col rounded-[14px] bg-secondary xs:gap-3.5 xs:p-[30px] md:gap-4 md:p-[50px] 2xl:gap-5 2xl:p-[60px]",
          className
        )}
        {...props}
      >
        <header className='border-b  border-b-dark-15 xs:mb-5 xs:pb-5 md:mb-[30px] md:pb-[30px] 2xl:mb-[50px] 2xl:pb-[50px]'>
          <h3 className='uppercase text-orange-95 xs:Body-18-md md:Heading-20-md 2xl:Heading-24'>
            {title}
          </h3>
        </header>
        <TextInput
          control={form.control}
          name='name'
          label={nameInputCaption.label}
          placeholder={nameInputCaption.placeholder}
        />
        <TextInput
          control={form.control}
          name='email'
          label={emailInputCaption.label}
          placeholder={emailInputCaption.placeholder}
        />
        <TextArea
          control={form.control}
          name='message'
          label={textareaInputCaption.label}
          placeholder={textareaInputCaption.placeholder}
        />
        <Button
          variant='filled'
          disabled={isPending || isSuccess}
          size='lg'
          className='bg-primary uppercase text-dark-06 xs:mt-1.5 md:mt-2.5 2xl:mt-5'
        >
          {isSuccess ? "Message sended" : submitButtonLabel}
        </Button>
      </form>
    </Form>
  );
};
