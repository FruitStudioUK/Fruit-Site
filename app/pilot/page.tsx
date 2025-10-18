import { redirect } from "next/navigation";
import { v4 as uuid } from "uuid";

export default async function BrandRedirectPage({ searchParams }) {
  const source = searchParams.utm_source || "unknown";
  const campaign = searchParams.utm_campaign || "unspecified";
  const sessionId = uuid();

  // Fire-and-forget logging
  fetch("https://script.google.com/macros/s/AKfycbwRQLsxuE1iEnD6Q3z-Eju9L4kWWlKcBaVnVrWgOYx97acewhAdO5H7GmJ3KhJCoZ3xcg/exec", {
    method: "POST",
    body: JSON.stringify({
      brand: "brandname",
      creator: source,
      campaign,
      sessionId,
    }),
    headers: { "Content-Type": "application/json" },
  }).catch(() => {});

  redirect("https://brand.com");
}
