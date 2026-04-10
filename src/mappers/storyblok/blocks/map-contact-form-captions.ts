import { type SbBlokData } from "@/types";
import { mapInputCaptions, type ISbInputCaptions } from "./map-input-captions";
import { type ContactFormProps } from "@/collections";

export interface ISbContactFormCaptions extends SbBlokData {
  component: "contactFormCaptions";
  title: string;
  submitButtonLabel: string;
  inputsCaptions: ISbInputCaptions[];
}

export interface MappedContactFormCaptions
  extends SbBlokData,
    Omit<ContactFormProps, "submitFunction" | "defaultValues"> {}

export const mapContactFormCaptions = ({
  inputsCaptions,
  submitButtonLabel,
  title,
  ...props
}: ISbContactFormCaptions): MappedContactFormCaptions => {
  const [nameInputCaption, emailInputCaption, textareaInputCaption] = inputsCaptions;

  return {
    title,
    submitButtonLabel,
    nameInputCaption: mapInputCaptions(nameInputCaption),
    emailInputCaption: mapInputCaptions(emailInputCaption),
    textareaInputCaption: mapInputCaptions(textareaInputCaption),
    ...props
  };
};
