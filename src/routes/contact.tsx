import { createFileRoute, Link } from "@tanstack/react-router";
import { WHATSAPP_URL, SITE_NAME } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact ${SITE_NAME} — WhatsApp Cricket ID Support 24×7` },
      { name: "description", content: `Reach ${SITE_NAME} on WhatsApp any time — instant replies for new cricket IDs, deposits, withdrawals and match-day questions. 24×7 across India.` },
      { name: "keywords", content: "contact madras book, whatsapp cricket id, cricket id support india, online betting help" },
      { property: "og:title", content: `Contact ${SITE_NAME}` },
      { property: "og:description", content: "WhatsApp cricket ID support — 24×7, every day of the year." },
      { property: "og:url", content: "/contact" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: `Contact ${SITE_NAME}`,
        description: `24×7 WhatsApp cricket ID support from ${SITE_NAME}.`,
      }),
    }],
  }),
  component: Contact,
});

const helpItems = [
  { t: "Get a new cricket ID", d: "Tell us which platform you want — FairPlay, Diamond, Sky Exchange, Lotus 365, 1xBet or any of our 30+ partners — and we'll activate it in under two minutes." },
  { t: "Fund your wallet", d: "Deposit via UPI, IMPS, NEFT or bank transfer. We share verified account details in-chat and confirm the credit the moment it lands." },
  { t: "Withdraw winnings", d: "Send the amount and your registered UPI or bank account. Standard payouts settle in under 15 minutes; big amounts within 2 hours." },
  { t: "Resolve a platform issue", d: "Stuck on a market settlement, a bonus credit or a locked account? We escalate on your behalf until it's fixed." },
  { t: "Adjust play limits", d: "Turn on daily deposit caps, session timers or a self-exclusion window. One message and it's live." },
  { t: "Ask a match-day question", d: "Odds, market rules, pitch reports, cash-out mechanics — our team is watching every game with you." },
];

function Contact() {
  return (
    <>
      <section className="container-page pt-16 md:pt-20 pb-8">
        <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground">Home</Link> <span className="mx-1">/</span> Contact
        </nav>
        <div className="max-w-2xl">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider">Contact</p>
          <h1 className="mt-2 text-4xl sm:text-5xl md:text-6xl leading-[1.05]">We're one message away.</h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            WhatsApp is the fastest way to reach {SITE_NAME} — a real teammate replies within seconds, 24 hours a day, every day of the year. No forms, no queues, no bots.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Open WhatsApp chat</a>
            <Link to="/faq" className="btn-ghost">Read the FAQ</Link>
          </div>
        </div>
      </section>

      <section className="container-page mt-8 grid gap-5 md:grid-cols-3 max-w-5xl">
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="card-surface p-6 hover:border-primary/60 group">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold">Chat</div>
          <div className="mt-2 text-xl font-semibold">WhatsApp support</div>
          <p className="mt-2 text-sm text-muted-foreground">Instant replies from a named account manager — the fastest way to reach us.</p>
          <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">Open WhatsApp →</div>
        </a>
        <div className="card-surface p-6">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold">Hours</div>
          <div className="mt-2 text-xl font-semibold">24 × 7 · 365 days</div>
          <p className="mt-2 text-sm text-muted-foreground">Every match day, every holiday, every hour of the night. Someone is always on.</p>
        </div>
        <div className="card-surface p-6">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold">Languages</div>
          <div className="mt-2 text-xl font-semibold">English & Hindi</div>
          <p className="mt-2 text-sm text-muted-foreground">Regional support available on request — just tell your manager your preference.</p>
        </div>
      </section>

      <section className="container-page mt-16">
        <div className="max-w-2xl">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider">What we help with</p>
          <h2 className="mt-2 text-3xl md:text-4xl">Six reasons people reach out — and what to expect.</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {helpItems.map((h) => (
            <article key={h.t} className="card-surface p-6 hover:border-primary/50">
              <h3 className="text-lg font-semibold">{h.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{h.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-page mt-16 mb-20">
        <div className="card-surface p-6 md:p-10 text-center">
          <h2 className="text-2xl md:text-3xl">Prefer to browse first?</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Explore our full platform catalogue, deep-dive keyword guides and blog articles before you message us.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/games" className="btn-ghost">All platforms</Link>
            <Link to="/topics" className="btn-ghost">Topic guides</Link>
            <Link to="/blog" className="btn-ghost">Blog</Link>
          </div>
        </div>
      </section>
    </>
  );
}
