import { Button, Form, Icon } from "@/components";
import { cn } from "@/lib/utils";
import { SubscriptionFormValue, subscriptionFormSchema } from "@/schemas/subscription-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { DefaultValues, SubmitHandler, useForm } from "react-hook-form";
import { InputCaptions } from "./ContactForm";
import { TextInput } from "@/components/Inputs";

export interface SubscriptionFormProps {
  submitFunction: SubmitHandler<SubscriptionFormValue>;
  defaultValues?: DefaultValues<SubscriptionFormValue>;
  emailInputCaptions: InputCaptions;
}

export const SubscriptionForm = ({
  submitFunction,
  defaultValues,
  emailInputCaptions,
  className,
  ...props
}: SubscriptionFormProps & React.HTMLAttributes<HTMLFormElement>) => {
  //useForm Hook
  const form = useForm<SubscriptionFormValue>({
    resolver: zodResolver(subscriptionFormSchema),
    defaultValues
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(submitFunction)}
        className={cn("flex w-full max-w-[436px] items-end", className)}
        {...props}
      >
        <TextInput
          className=' border-b border-b-dark-20 bg-transparent'
          control={form.control}
          name='email'
          label={emailInputCaptions.label}
          placeholder={emailInputCaptions.placeholder}
        />
        <Button type='submit' variant='ghost' className='!p-0'>
          <div className='flex items-center justify-center rounded-full border border-dark-20 bg-dark-12 xs:h-10 xs:w-10  xs:p-2.5 2xl:h-[52px] 2xl:w-[52px] 2xl:p-3.5'>
            <Icon name='ArrowTopRight' className='text-primary xs:h-5 xs:w-5 2xl:h-6 2xl:w-6' />
          </div>
        </Button>
      </form>
    </Form>
  );
};
