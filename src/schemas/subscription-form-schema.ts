import z from "zod";

export const subscriptionFormSchema = z.object({
  email: z.string().email({ message: "Invalid email address." })
});

export type SubscriptionFormValue = z.infer<typeof subscriptionFormSchema>;
