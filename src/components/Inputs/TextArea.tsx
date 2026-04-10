import React from "react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Textarea as _Textarea } from "../ui/textarea";
import { type FieldValues, type UseControllerProps } from "react-hook-form";
import { cn } from "@/lib/utils";

export interface TextAreaProps {
  label?: React.ReactNode;
}

export const TextArea = <T extends FieldValues = any>({
  control,
  name,
  placeholder,
  className,
  label,
  ...props
}: TextAreaProps & UseControllerProps<T> & React.InputHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FormItem className={cn("flex w-full flex-col gap-2", className)}>
          {label && (
            <FormLabel
              htmlFor={name}
              className='uppercase text-orange-90 xs:Body-16-md 2xl:Body-18-md'
            >
              {label}
            </FormLabel>
          )}
          <div className='relative !mt-0'>
            <FormControl>
              <_Textarea
                id={name}
                className={cn(
                  "relative w-full bg-dark-06 placeholder:text-grey-40 focus:outline-none xs:max-w-full ",
                  {
                    "": !!error
                  }
                )}
                {...field}
                {...props}
                placeholder={placeholder}
              />
            </FormControl>
          </div>
          <FormMessage className='Body-XS text-assorted-alert mt-1 text-[10px]' />
        </FormItem>
      )}
    />
  );
};
