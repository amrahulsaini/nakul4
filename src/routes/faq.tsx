import { createFileRoute } from "@tanstack/react-router";
import { WHATSAPP_URL, SITE_NAME } from "@/lib/site";

const faqs = [
  { q: "How fast do I actually get my cricket ID?", a: `Most players are set up in under two minutes from the moment they message us. Complex payment setups may take up to five.` },
  { q: "Is using an online cricket ID safe?", a: `Yes, when the platform is verified. Every partner ${SITE_NAME} works with is vetted for payout history, licensing where applicable, and dispute resolution.` },
  { q: "What is the minimum deposit?", a: `Most platforms start at ₹500. Your account manager will help you pick a starting balance that fits your play style.` },
  { q: "How do withdrawals work?", a: `Winnings are transferred to your registered UPI or bank account. Standard payouts complete within 15 minutes; larger amounts may take up to 2 hours for verification.` },
  { q: "Can I set limits on my play?", a: `Absolutely. We support daily deposit caps, session timers, and self-exclusion. Message us any time to adjust them.` },
  { q: "What if I have a dispute on a platform?", a: `Your account manager acts as your advocate. We escalate on your behalf and only close the ticket once the outcome is fair.` },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: `FAQ — Online Cricket ID Questions Answered | ${SITE_NAME}` },
      { name: "description", content: "Answers to the most common questions about getting an online cricket ID: speed, safety, deposits, withdrawals, and responsible play." },
      { property: "og:title", content: `Cricket ID FAQ — ${SITE_NAME}` },
      { property: "og:description", content: "Speed, safety, deposits, withdrawals — everything you need to know before you play." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Faq,
});

function Faq() {
  return (
    <section className="container-page py-20">
      <div className="max-w-2xl">
        <p className="text-primary text-sm font-semibold uppercase tracking-wider">FAQ</p>
        <h1 className="mt-2 text-4xl md:text-5xl">Questions, answered.</h1>
        <p className="mt-5 text-muted-foreground">Don't see yours? Message us on WhatsApp — a human replies in seconds.</p>
      </div>
      <div className="mt-10 max-w-3xl divide-y divide-border/60 border border-border/60 rounded-2xl overflow-hidden">
        {faqs.map((f) => (
          <details key={f.q} className="group open:bg-secondary/40">
            <summary className="cursor-pointer list-none p-5 flex items-start justify-between gap-4">
              <span className="font-medium">{f.q}</span>
              <span className="shrink-0 text-primary group-open:rotate-45 transition-transform text-xl leading-none">+</span>
            </summary>
            <p className="px-5 pb-5 -mt-1 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary mt-10">Ask us anything</a>
    </section>
  );
}
