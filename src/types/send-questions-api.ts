import { ContactFormValue } from "@/schemas";

export type SendQuestionsApi = {
  req: ContactFormValue;
  res: { message: string; success: boolean };
};
