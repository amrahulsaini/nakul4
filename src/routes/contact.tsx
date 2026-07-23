import { createFileRoute } from "@tanstack/react-router";
import { WHATSAPP_URL, WHATSAPP_NUMBER, SITE_NAME } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact ${SITE_NAME} — WhatsApp Cricket ID Support 24×7` },
      { name: "description", content: `Reach ${SITE_NAME} on WhatsApp at ${WHATSAPP_NUMBER} any time. Instant replies for new IDs, deposits, withdrawals and match-day questions.` },
      { property: "og:title", content: `Contact ${SITE_NAME}` },
      { property: "og:description", content: `WhatsApp ${WHATSAPP_NUMBER} — 24×7 cricket ID support.` },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <section className="container-page py-20">
      <div className="max-w-2xl">
        <p className="text-primary text-sm font-semibold uppercase tracking-wider">Contact</p>
        <h1 className="mt-2 text-4xl md:text-5xl">We're one message away.</h1>
        <p className="mt-5 text-lg text-muted-foreground">
          WhatsApp is the fastest way to reach us — a real teammate replies in seconds, 24 hours a day.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 max-w-4xl">
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="card-surface p-6 block hover:border-primary/60 transition-colors">
          <div className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</div>
          <div className="mt-1 text-2xl font-semibold">Chat with us instantly</div>
          <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">Open WhatsApp →</div>
        </a>
        <div className="card-surface p-6">
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Hours</div>
          <div className="mt-1 text-2xl font-semibold">24 × 7</div>
          <p className="mt-4 text-sm text-muted-foreground">Every day of the year, including match days and holidays.</p>
        </div>
      </div>
    </section>
  );
}
