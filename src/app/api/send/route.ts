import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { ContactMeTemplate } from "@/components/email-template";

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await request.json();

    const { name, email } = body;

    const data = await resend.emails.send({
      from: `${name} <email@mail.devmarty.com>`,
      to: ["msiksnis@gmail.com"],
      replyTo: email,
      subject: "A message through devmarty.com",
      react: ContactMeTemplate(body),
    });

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
