import z from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required." })
    .max(100, { message: "Name cannot exceed 100 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z
    .string()
    .min(1, { message: "Message is required." })
    .max(1000, { message: "Message cannot exceed 1000 characters." })
});

export type ContactFormValue = z.infer<typeof contactFormSchema>;
