import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, source } = await req.json();

    // Basic validation
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }
    const normalized = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(normalized)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    // Send notification to your inbox
    await resend.emails.send({
      from: 'Fruit <notifications@thisisfruit.co.uk>',
      to: 'hey@thisisfruit.co.uk',
      subject: 'New lead (email capture)',
      text: `Email: ${normalized}\nSource: ${source || 'unknown'}\nTime: ${new Date().toISOString()}`,
    });

    // Optional: Send an auto‑reply to the lead
    await resend.emails.send({
      from: 'Fruit <hello@thisisfruit.co.uk>',
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
