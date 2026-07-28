import { createFileRoute, Link } from "@tanstack/react-router";
import { WHATSAPP_URL, SITE_NAME } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About ${SITE_NAME} — India's Trusted Online Cricket ID Provider Since 2019` },
      { name: "description", content: `${SITE_NAME} is India's trusted online cricket ID and betting book provider. Instant IDs on 30+ verified exchanges, 24×7 WhatsApp support, secure UPI deposits and same-day payouts.` },
      { name: "keywords", content: "about madras book, online cricket id provider india, trusted cricket exchange, whatsapp cricket id support" },
      { property: "og:title", content: `About ${SITE_NAME}` },
      { property: "og:description", content: "A cricket concierge built by players — for players. Verified platforms, real humans, honest payouts." },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: `About ${SITE_NAME}`,
        description: `${SITE_NAME} — India's trusted online cricket ID provider.`,
      }),
    }],
  }),
  component: About,
});

const pillars = [
  { t: "Verified platforms only", d: `Every partner in our catalogue passes a checklist covering licensing, payout history and dispute resolution before we issue a single ID. If a brand slips, we drop it — no exceptions.` },
  { t: "Real humans on WhatsApp", d: `You get a named account manager, not a chatbot. Match-day questions get answered in seconds, deposits are guided step-by-step, and withdrawals happen on the same thread you signed up on.` },
  { t: "Payout guarantee", d: `We stand behind every ID we issue. On the rare occasion a platform delays a payout, our team escalates on your behalf and covers the gap while it clears.` },
  { t: "Player-first defaults", d: `Deposit caps, session timers, cool-down windows and self-exclusion are all one message away. Safe play isn't an add-on — it's how the service is built.` },
];

const numbers = [
  { k: "50k+", v: "Cricket IDs issued" },
  { k: "30+", v: "Verified partner platforms" },
  { k: "24×7", v: "WhatsApp availability" },
  { k: "< 2 min", v: "Median activation time" },
];

const timeline = [
  { y: "2019", t: "Started as a two-person WhatsApp desk", d: "Built for friends and family who wanted a hassle-free way to bet on IPL without paperwork or dodgy tipster groups." },
  { y: "2021", t: "Grew to 10+ verified partner brands", d: "Added cricket exchanges, books and live-casino operators — every partner vetted for payout reliability." },
  { y: "2023", t: "Introduced the payout guarantee", d: "We began underwriting delayed payouts ourselves, so players never wait when a platform is slow." },
  { y: "2026", t: "30+ platforms, one WhatsApp contact", d: "Today we serve players across India with instant IDs, secure UPI rails and same-day withdrawals." },
];

function About() {
  return (
    <>
      <section className="container-page pt-16 md:pt-20 pb-8">
        <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground">Home</Link> <span className="mx-1">/</span> About
        </nav>
        <div className="max-w-3xl">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider">About us</p>
          <h1 className="mt-2 text-4xl sm:text-5xl md:text-6xl leading-[1.05]">A cricket concierge built by players.</h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {SITE_NAME} started with a simple frustration: getting a working cricket ID in India took too long, involved too many strangers and left too many questions unanswered. We rebuilt the flow from scratch around one relationship — you and a WhatsApp agent who actually picks up.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Today we serve players in every Indian state where real-money gaming is permitted, across 30+ verified cricket exchanges, sportsbooks and live-casino platforms — all with instant UPI deposits, same-day withdrawals and a personal manager on WhatsApp.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Talk to our team</a>
            <Link to="/games" className="btn-ghost">Browse platforms</Link>
          </div>
        </div>
      </section>

      <section className="container-page mt-12">
        <div className="card-surface grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border/60 overflow-hidden">
          {numbers.map((n) => (
            <div key={n.v} className="p-6 text-center">
              <div className="font-display text-2xl md:text-3xl font-bold text-primary">{n.k}</div>
              <div className="mt-1 text-xs md:text-sm text-muted-foreground">{n.v}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page mt-20">
        <div className="max-w-2xl">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider">What we stand for</p>
          <h2 className="mt-2 text-3xl md:text-4xl">Four commitments we won't compromise on.</h2>
          <p className="mt-4 text-muted-foreground">These are the promises that keep {SITE_NAME} different from a random Telegram tipster group or a fly-by-night agent.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {pillars.map((p) => (
            <article key={p.t} className="card-surface p-6 md:p-7 hover:border-primary/50">
              <h3 className="text-xl font-semibold">{p.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-page mt-20">
        <div className="max-w-2xl">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider">Our story</p>
          <h2 className="mt-2 text-3xl md:text-4xl">From a two-person WhatsApp desk to India's #1 cricket ID concierge.</h2>
        </div>
        <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {timeline.map((t) => (
            <li key={t.y} className="card-surface p-6">
              <div className="font-display text-3xl font-bold text-primary">{t.y}</div>
              <h3 className="mt-2 text-lg font-semibold">{t.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="container-page mt-20 mb-20">
        <div className="card-surface p-6 md:p-10 text-center">
          <h2 className="text-2xl md:text-3xl">Ready when you are.</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">One WhatsApp message and your ID is live in under two minutes — with the 5% joining bonus applied automatically.</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 inline-flex">Get your cricket ID on WhatsApp</a>
        </div>
      </section>
    </>
  );
}
