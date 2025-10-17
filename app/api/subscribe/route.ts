// app/api/subscribe/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { email, source } = await req.json();

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const normalized = email.trim().toLowerCase();

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, 
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send notification to you
    await transporter.sendMail({
      from: `"Fruit" <${process.env.SMTP_USER}>`,
      to: 'hey@thisisfruit.co.uk',
      subject: 'New lead',
      text: `Email: ${normalized}\nSource: ${source || 'unknown'}\nTime: ${new Date().toISOString()}`,
    });

    // Auto‑reply to the lead
    await transporter.sendMail({
      from: `"Fruit" <${process.env.SMTP_USER}>`,
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
