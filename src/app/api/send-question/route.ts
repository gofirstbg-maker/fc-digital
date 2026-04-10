import { contactFormSchema } from "@/schemas";
import { SMTPClient } from "emailjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const validationResult = contactFormSchema.safeParse(body);

  if (!validationResult.success) {
    return NextResponse.json({ message: "Missing data.", success: false }, { status: 400 });
  }

  const { email: userEmail, message: userMessage, name } = validationResult.data;

  const user = process.env.SMTP_USER;
  const password = process.env.SMTP_PASSWORD;
  const host = process.env.SMTP_HOST;

  const client = new SMTPClient({
    user,
    password,
    host,
    ssl: true
  });

  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const message = await client.sendAsync({
      text: userMessage,
      from: `${name}`,
      to: "goFirstbg@gmail.com",
      subject: `Question from: ${userEmail}`
    });
    console.log("Subscription message sended");
    return NextResponse.json({ message: "success", success: true }, { status: 200 });
  } catch (error) {
    console.log("ERROR", error);
    return NextResponse.json(
      { message: "Subscription failed! Error was occurred", success: false },
      { status: 500 }
    );
  }
}
