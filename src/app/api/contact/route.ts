import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  const formattedMessage = `🤖 *New Portfolio Lead!*\n\n*Name:* ${name}\n*Email:* ${email}\n*Message:* ${message}`;

  await fetch(
    `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: formattedMessage,
        parse_mode: "Markdown",
      }),
    }
  );

  return NextResponse.json({ success: true }, { status: 200 });
}
