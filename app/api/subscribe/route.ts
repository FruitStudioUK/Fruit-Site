// app/api/subscribe/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email, source } = await req.json();

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Normalize and basic validation
    const normalized = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(normalized)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    // Lazy import Resend here so it's only evaluated on the server
    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY!);

    // Send notification to your inbox
    await resend.emails.send({
      from: 'Fruit <onboarding@resend.dev>', // use a verified sender
      to: 'hey@thisisfruit.co.uk',
      subject: 'New lead',
      text: `Email: ${normalized}\nSource: ${source || 'unknown'}\nTime: ${new Date().toISOString()}`,
    });

    // Optional: auto‑reply to the lead
    await resend.emails.send({
      from: 'Fruit <onboarding@resend.dev>', // keep using a verified sender until you set up your domain
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
