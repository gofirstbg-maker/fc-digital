import { SendQuestionsApi } from "@/types/send-questions-api";
import { BaseApi } from "./base-api";

export class SendQuestionApi extends BaseApi {
  constructor() {
    super("/api");
  }

  public async send(input: SendQuestionsApi["req"]): Promise<SendQuestionsApi["res"]> {
    const response = await this.post<SendQuestionsApi["res"]>(["send-question"], input);

    return response.data;
  }
}
