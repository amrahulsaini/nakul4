import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-cricket.jpg";
import { WHATSAPP_URL, WHATSAPP_NUMBER, SITE_NAME } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Online Cricket ID in 2 Minutes — CricPro ID | WhatsApp Support 24×7" },
      { name: "description", content: "Get your online cricket ID instantly on India's trusted platforms. Fast deposits, quick withdrawals, and 24×7 WhatsApp help. Chat now to activate your ID." },
      { name: "keywords", content: "online cricket id, cricket betting id, fantasy cricket id, ipl id, cricket exchange id, instant cricket id india" },
      { property: "og:title", content: "Online Cricket ID in 2 Minutes — CricPro ID" },
      { property: "og:description", content: "India's trusted service for instant cricket IDs with 24×7 WhatsApp support." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: SITE_NAME,
          url: "/",
          potentialAction: { "@type": "SearchAction", target: "/?q={q}", "query-input": "required name=q" },
        }),
      },
    ],
  }),
  component: Home,
});

const stats = [
  { k: "2 min", v: "Average ID activation time" },
  { k: "24×7", v: "WhatsApp customer support" },
  { k: "20+", v: "Verified partner platforms" },
  { k: "100%", v: "Instant deposit & withdrawal" },
];

const features = [
  { t: "Instant Activation", d: "Message us on WhatsApp and receive a ready-to-play cricket ID within minutes — no long forms or waiting queues." },
  { t: "Secure Transactions", d: "All top-ups and payouts run through verified UPI, IMPS, and NEFT rails with encrypted handoffs." },
  { t: "Bonus on Every Reload", d: "Loyalty bonus credited on repeat deposits so your bankroll stretches further across matches." },
  { t: "Personal Account Manager", d: "A dedicated support agent guides you through your first deposit, first bet, and first withdrawal." },
  { t: "Multi-Platform Access", d: "One point of contact for over twenty exchange, fantasy, and casino ID options across mobile and desktop." },
  { t: "Responsible Play Tools", d: "Set daily deposit caps and self-limit sessions. We honor cool-off requests without questions." },
];

const steps = [
  { n: "01", t: "Chat on WhatsApp", d: "Tap the button and send us a hi. Our team replies within seconds, any hour of the day." },
  { n: "02", t: "Pick your platform", d: "Choose from cricket exchange, fantasy, or casino IDs — we help match the right platform to your play style." },
  { n: "03", t: "Deposit & play", d: "Fund your ID via UPI in a single tap. Credentials land in your inbox, ready to use before the next over." },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container-page pt-16 pb-20 md:pt-24 md:pb-28 grid gap-12 lg:grid-cols-[1.05fr_1fr] items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-secondary/60 px-3 py-1 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald" /> Live support online now
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05]">
              Your <span className="text-primary">online cricket ID</span>,
              <br className="hidden sm:block" /> ready before the toss.
            </h1>
            <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl">
              Skip the paperwork. {SITE_NAME} pairs you with a verified cricket exchange or fantasy account in under two minutes — with real humans on WhatsApp for every deposit, payout, and match-day question.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Get your ID on WhatsApp
              </a>
              <Link to="/games" className="btn-ghost">Browse games</Link>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">Direct line: {WHATSAPP_NUMBER}</p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/25 to-accent/20 blur-2xl" />
            <img
              src={heroImg}
              alt="Night cricket stadium with motion-blurred ball under stadium floodlights"
              width={1600}
              height={1000}
              className="relative w-full h-auto rounded-3xl border border-border/60 shadow-2xl"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container-page">
        <div className="card-surface grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border/60 overflow-hidden">
          {stats.map((s) => (
            <div key={s.v} className="p-6 text-center">
              <div className="font-display text-2xl md:text-3xl font-bold text-primary">{s.k}</div>
              <div className="mt-1 text-xs md:text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container-page mt-24">
        <div className="max-w-2xl">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider">Why {SITE_NAME}</p>
          <h2 className="mt-2 text-3xl md:text-4xl">Built for players who value speed and safety.</h2>
          <p className="mt-4 text-muted-foreground">Every feature below exists to make one thing simpler: getting on the field and staying focused on the match, not the platform.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article key={f.t} className="card-surface p-6 hover:border-primary/50 transition-colors">
              <h3 className="text-lg font-semibold">{f.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.d}</p>
            </article>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="container-page mt-24">
        <div className="max-w-2xl">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider">How it works</p>
          <h2 className="mt-2 text-3xl md:text-4xl">Three steps from message to match.</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="card-surface p-6">
              <div className="font-display text-primary text-4xl font-bold">{s.n}</div>
              <h3 className="mt-3 text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-page mt-24">
        <div className="card-surface p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative grid gap-6 md:grid-cols-[1.4fr_1fr] items-center">
            <div>
              <h2 className="text-2xl md:text-3xl">Ready to play the next match?</h2>
              <p className="mt-3 text-muted-foreground max-w-xl">Your ID can be live before the coin toss. Message the team on WhatsApp and we'll walk you through platform, deposit, and first match in one flow.</p>
            </div>
            <div className="flex md:justify-end">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Start on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
