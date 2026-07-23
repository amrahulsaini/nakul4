import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-cricket.jpg";
import logoAsset from "@/assets/madras-book-logo.webp.asset.json";
import { WHATSAPP_URL, WHATSAPP_NUMBER, SITE_NAME, PLATFORMS } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SITE_NAME} — Online Cricket ID in 2 Minutes | WhatsApp 24×7` },
      { name: "description", content: `Get your online cricket ID with ${SITE_NAME} on 30+ trusted platforms including FairPlay, Diamond Exchange, Sky Exchange, Lotus 365 & more. Instant activation, 5% joining bonus, 24×7 WhatsApp support.` },
      { name: "keywords", content: "madras book, online cricket id, cricket betting id india, diamond exchange, sky exchange, fairplay id, lotus 365, reddy anna, ipl betting id, online betting id, whatsapp cricket id" },
      { property: "og:title", content: `${SITE_NAME} — India's #1 Online Cricket ID Provider` },
      { property: "og:description", content: "Instant cricket IDs on 30+ verified platforms. 5% joining bonus, 2% refill bonus, 24×7 WhatsApp support." },
      { property: "og:url", content: "/" },
      { property: "og:image", content: logoAsset.url },
      { name: "twitter:image", content: logoAsset.url },
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
  { k: "2 min", v: "Average ID activation" },
  { k: "24×7", v: "WhatsApp support" },
  { k: "30+", v: "Verified platforms" },
  { k: "100%", v: "Instant deposit & withdraw" },
];

const features = [
  { t: "Instant Activation", d: "Message us on WhatsApp and receive a ready-to-play cricket ID within minutes — no long forms." },
  { t: "5% Joining Bonus", d: "Every new player gets a 5% welcome bonus on the first deposit, credited instantly to the wallet." },
  { t: "2% Refill Bonus", d: "Ongoing refill bonus on every top-up so your bankroll stretches further across matches." },
  { t: "All Payment Methods", d: "Paytm, GPay, PhonePe, UPI, IMPS, NEFT, bank transfer and crypto deposits — pick what suits you." },
  { t: "Personal Manager", d: "A dedicated support agent guides you through platform selection, deposit and withdrawal." },
  { t: "Secure & Confidential", d: "Encrypted communication, verified partner platforms and strict privacy for every account." },
];

const steps = [
  { n: "01", t: "Chat on WhatsApp", d: "Tap the button and send us a hi — our team replies in seconds, any hour of the day." },
  { n: "02", t: "Pick your platform", d: "Choose from 30+ cricket exchange, book and casino IDs. We match the right one to your style." },
  { n: "03", t: "Deposit & play", d: "Fund your ID via UPI in one tap. Credentials arrive on WhatsApp, ready to use before the toss." },
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
              India's <span className="text-primary">#1 online cricket ID</span> &
              <br className="hidden sm:block" /> betting book.
            </h1>
            <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl">
              {SITE_NAME} pairs you with a verified cricket exchange, fantasy or live-casino account in under two minutes — with real humans on WhatsApp for every deposit, payout and match-day question.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Get your ID on WhatsApp
              </a>
              <Link to="/games" className="btn-ghost">Browse platforms</Link>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">Direct line: {WHATSAPP_NUMBER}</p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/25 to-accent/20 blur-2xl" />
            <img
              src={heroImg}
              alt="Night cricket stadium under floodlights"
              width={1600}
              height={1000}
              className="relative w-full h-auto rounded-3xl border border-border/60 shadow-2xl"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      {/* Promo bonus banner */}
      <section className="container-page">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-[oklch(0.22_0.08_290)] via-[oklch(0.18_0.09_285)] to-[oklch(0.14_0.06_270)] p-6 md:p-10">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[oklch(0.85_0.18_88)]/20 blur-3xl" />
          <div className="relative grid gap-8 md:grid-cols-3 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-[oklch(0.85_0.18_88)] font-semibold">Bonuses on {SITE_NAME}</p>
              <h2 className="mt-2 text-2xl md:text-3xl text-white">Play more with every deposit.</h2>
              <p className="mt-3 text-sm text-white/70">Cricket, football, tennis, horse racing and 500+ live-casino games — one wallet, one WhatsApp contact.</p>
            </div>
            <div className="rounded-2xl border-2 border-[oklch(0.85_0.18_88)] bg-black/40 p-5 text-center">
              <div className="font-display text-4xl md:text-5xl font-black text-[oklch(0.85_0.18_88)]">5%</div>
              <div className="mt-1 text-sm font-semibold text-white uppercase tracking-wider">Joining bonus</div>
              <div className="mt-1 text-xs text-white/60">On your first deposit</div>
            </div>
            <div className="rounded-2xl border-2 border-[oklch(0.85_0.18_88)] bg-black/40 p-5 text-center">
              <div className="font-display text-4xl md:text-5xl font-black text-[oklch(0.85_0.18_88)]">2%</div>
              <div className="mt-1 text-sm font-semibold text-white uppercase tracking-wider">Refill bonus</div>
              <div className="mt-1 text-xs text-white/60">On every top-up</div>
            </div>
          </div>
          <div className="relative mt-8 pt-6 border-t border-white/10">
            <p className="text-[11px] uppercase tracking-widest text-white/60 text-center font-semibold">{SITE_NAME} accepts all payment methods</p>
            <div className="mt-4 flex flex-wrap gap-2 md:gap-3 justify-center">
              {["Paytm", "GPay", "PhonePe", "UPI", "IMPS", "NEFT", "Bank Transfer", "Crypto"].map((p) => (
                <span key={p} className="rounded-lg bg-white/95 px-3 py-1.5 text-xs md:text-sm font-semibold text-[oklch(0.22_0.08_290)]">{p}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container-page mt-12">
        <div className="card-surface grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border/60 overflow-hidden">
          {stats.map((s) => (
            <div key={s.v} className="p-6 text-center">
              <div className="font-display text-2xl md:text-3xl font-bold text-primary">{s.k}</div>
              <div className="mt-1 text-xs md:text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Platforms grid */}
      <section id="platforms" className="container-page mt-24">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider">Partner platforms</p>
          <h2 className="mt-2 text-3xl md:text-4xl">30+ cricket & betting platforms — IDs available on {SITE_NAME}</h2>
          <p className="mt-4 text-muted-foreground">India's most popular cricket exchanges and books, all under one WhatsApp contact. Choose your platform, deposit and play.</p>
        </div>
        <div className="mt-10 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {PLATFORMS.map((p) => (
            <a
              key={p.slug}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="card-surface p-5 text-center hover:border-primary/60 transition-colors group"
            >
              <div className="text-4xl">{p.icon}</div>
              <h3 className="mt-3 text-base font-semibold group-hover:text-primary transition-colors">{p.name}</h3>
              <p className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">{p.tag}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container-page mt-24">
        <div className="max-w-2xl">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider">Why {SITE_NAME}</p>
          <h2 className="mt-2 text-3xl md:text-4xl">Built for players who value speed and safety.</h2>
          <p className="mt-4 text-muted-foreground">Every feature exists to make one thing simpler: getting on the field and staying focused on the match, not the platform.</p>
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
              <p className="mt-3 text-muted-foreground max-w-xl">Your ID can be live before the coin toss. Message {SITE_NAME} on WhatsApp and we'll walk you through platform, deposit and first match in one flow.</p>
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
