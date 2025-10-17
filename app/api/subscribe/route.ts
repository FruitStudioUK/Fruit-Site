// app/api/subscribe/route.ts
import { NextResponse } from 'next/server';
import { resend } from '@/lib/resend';

export async function POST(req: Request) {
  try {
    const { email, source } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'Fruit <onboarding@resend.dev>', // use a verified sender
      to: 'hey@thisisfruit.co.uk',
      subject: 'New lead',
      text: `Email: ${email}\nSource: ${source || 'unknown'}\nTime: ${new Date().toISOString()}`,
    });

    // Optional: Send an auto‑reply to the lead
    await resend.emails.send({
      from: 'Fruit <hey@thisisfruit.co.uk>',
      to: normalized,
      subject: 'Thanks — we’ll send you more info',
      text: `Thanks for your interest! We’ll email you more info shortly.\n\n— Fruit`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
