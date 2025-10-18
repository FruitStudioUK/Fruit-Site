import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const source = searchParams.get("utm_source") || "unknown";
  const campaign = searchParams.get("utm_campaign") || "unspecified";
  const sessionId = Date.now().toString();

  // Send POST to Google Apps Script
  await fetch("https://script.google.com/macros/s/AKfycbwRQLsxuE1iEnD6Q3z-Eju9L4kWWlKcBaVnVrWgOYx97acewhAdO5H7GmJ3KhJCoZ3xcg/exec", {
    method: "POST",
    body: JSON.stringify({
      brand: "brandname",
      creator: source,
      campaign,
      sessionId,
    }),
    headers: { "Content-Type": "application/json" },
  }).catch(() => {});

  // Redirect viewer
  return NextResponse.redirect("https://google.com");
}
