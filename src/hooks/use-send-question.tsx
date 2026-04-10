import { ContactFormValue } from "@/schemas";
import { SendQuestionApi } from "@/services/send-question-api";
import { useMutation } from "@tanstack/react-query";

export function useSendQuestion() {
  return useMutation({
    mutationFn: async (input: ContactFormValue) => {
      const sendQuestionApi = new SendQuestionApi();

      return sendQuestionApi.send(input);
    }
  });
}
