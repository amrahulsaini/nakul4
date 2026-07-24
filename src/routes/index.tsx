import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-cricket.jpg";
import posterCricket from "@/assets/poster-cricket-betting.jpg";
import posterExchange from "@/assets/poster-exchange.jpg";
import posterIPL from "@/assets/poster-ipl-t20.jpg";
import posterCasino from "@/assets/poster-live-casino.jpg";
import realRoulette from "@/assets/real-roulette.jpg";
import realPoker from "@/assets/real-poker.jpg";
import realSlotsHall from "@/assets/real-slots-hall.jpg";
import realBlackjack from "@/assets/real-blackjack.jpg";
import logoAsset from "@/assets/madras-book-logo.webp.asset.json";
import { WHATSAPP_URL, WHATSAPP_NUMBER, SITE_NAME, PLATFORMS } from "@/lib/site";
import { TOPICS } from "@/lib/keywords";

function PosterCard({ img, label, title, alt }: { img: string; label: string; title: string; alt: string }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-border/60">
      <img src={img} alt={alt} width={1600} height={912} loading="lazy" className="w-full h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className="text-xs uppercase tracking-widest text-primary font-semibold">{label}</p>
        <h3 className="mt-1 text-xl font-semibold">{title}</h3>
      </div>
    </div>
  );
}


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
            <p className="mt-4 text-xs text-muted-foreground">Tap the button — chat opens directly on WhatsApp.</p>
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
            <Link
              key={p.slug}
              to="/platforms/$slug"
              params={{ slug: p.slug }}
              className="card-surface p-5 text-center hover:border-primary/60 transition-colors group"
            >
              <div className="text-4xl">{p.icon}</div>
              <h3 className="mt-3 text-base font-semibold group-hover:text-primary transition-colors">{p.name}</h3>
              <p className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">{p.tag}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Posters strip */}
      <section className="container-page mt-24">
        <div className="max-w-2xl">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider">What's live now</p>
          <h2 className="mt-2 text-3xl md:text-4xl">Cricket, exchange, IPL & live casino.</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <PosterCard img={posterCricket} label="Cricket Betting" title="Every match, every market" alt="Cricket batsman striking ball at night stadium" />
          <PosterCard img={posterExchange} label="Exchange Betting" title="Back & lay in real time" alt="Aerial cricket stadium with financial trading overlay" />
          <PosterCard img={posterIPL} label="IPL & T20" title="India's biggest cricket season" alt="Cricket batsman silhouette against sunset stadium" />
          <PosterCard img={posterCasino} label="Live Casino" title="500+ live-dealer tables" alt="Roulette wheel with playing cards and casino chips" />
        </div>
      </section>

      {/* Live Casino Floor — realistic showcase */}
      <section className="container-page mt-24">
        <div className="max-w-2xl">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider">Inside the casino floor</p>
          <h2 className="mt-2 text-3xl md:text-4xl">Real tables. Real dealers. Real time.</h2>
          <p className="mt-4 text-muted-foreground">Every {SITE_NAME} ID unlocks HD live-streamed rooms from the world's biggest studios — Evolution, Ezugi, Pragmatic Play Live and more. Sit at a table in seconds, tip the dealer, and cash out to UPI when you're done.</p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-12">
          {/* Feature: Roulette */}
          <article className="lg:col-span-7 relative overflow-hidden rounded-3xl border border-border/60 group">
            <img src={realRoulette} alt="Live European roulette wheel spinning inside a premium casino" width={1024} height={1024} loading="lazy" className="h-80 md:h-[26rem] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <span className="inline-block rounded-full bg-primary/20 border border-primary/40 px-3 py-1 text-[11px] uppercase tracking-widest text-primary font-semibold">Live Roulette</span>
              <h3 className="mt-3 text-2xl md:text-3xl font-semibold">European, Lightning & Auto-Roulette — 40+ tables open 24×7</h3>
              <p className="mt-2 max-w-2xl text-sm md:text-base text-muted-foreground">Single-zero wheels with RTP up to 97.30%, multipliers up to 500× on Lightning rounds, and side-bet markets you won't find in local rooms. Min stake ₹20, max ₹5,00,000 per spin.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["RTP 97.30%", "500× multipliers", "Min ₹20", "24×7 open"].map((t) => (
                  <span key={t} className="rounded-md bg-white/5 border border-white/10 px-2.5 py-1 text-[11px] text-white/80">{t}</span>
                ))}
              </div>
            </div>
          </article>

          {/* Feature: Poker */}
          <article className="lg:col-span-5 relative overflow-hidden rounded-3xl border border-border/60 group">
            <img src={realPoker} alt="Casino poker table with four aces and stacks of chips" width={1024} height={1024} loading="lazy" className="h-80 md:h-[26rem] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <span className="inline-block rounded-full bg-primary/20 border border-primary/40 px-3 py-1 text-[11px] uppercase tracking-widest text-primary font-semibold">Cards & Poker</span>
              <h3 className="mt-3 text-2xl font-semibold">Teen Patti, Andar Bahar & Casino Hold'em</h3>
              <p className="mt-2 text-sm text-muted-foreground">India's favourite card games with live Hindi-speaking dealers, side bets on Bonus, AA+, and 6-Card Bonus. Deal every 25 seconds.</p>
            </div>
          </article>

          {/* Feature: Slots */}
          <article className="lg:col-span-5 relative overflow-hidden rounded-3xl border border-border/60 group">
            <img src={realSlotsHall} alt="Luxury casino floor lined with glowing slot machines" width={1024} height={1024} loading="lazy" className="h-80 md:h-[26rem] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <span className="inline-block rounded-full bg-primary/20 border border-primary/40 px-3 py-1 text-[11px] uppercase tracking-widest text-primary font-semibold">Slots & Jackpots</span>
              <h3 className="mt-3 text-2xl font-semibold">2,000+ slots. Daily drops up to ₹1 crore.</h3>
              <p className="mt-2 text-sm text-muted-foreground">Pragmatic Play, PG Soft, NetEnt and Hacksaw titles — from Sweet Bonanza to Gates of Olympus. Buy-bonus enabled on eligible slots.</p>
            </div>
          </article>

          {/* Feature: Blackjack */}
          <article className="lg:col-span-7 relative overflow-hidden rounded-3xl border border-border/60 group">
            <img src={realBlackjack} alt="Live blackjack table with dealer, cards, and colored chips" width={1024} height={1024} loading="lazy" className="h-80 md:h-[26rem] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <span className="inline-block rounded-full bg-primary/20 border border-primary/40 px-3 py-1 text-[11px] uppercase tracking-widest text-primary font-semibold">Live Blackjack</span>
              <h3 className="mt-3 text-2xl md:text-3xl font-semibold">Classic 3:2 Blackjack, Infinite seats, Perfect Pairs</h3>
              <p className="mt-2 max-w-2xl text-sm md:text-base text-muted-foreground">Play head-to-head or in unlimited-seat rooms. Insurance, split, double-down, and Perfect Pairs / 21+3 side bets all live. House edge as low as 0.42% on classic tables.</p>
              <div className="mt-4 grid grid-cols-3 gap-3 max-w-md">
                <div><div className="text-primary font-display text-xl md:text-2xl font-bold">0.42%</div><div className="text-[11px] uppercase tracking-wider text-muted-foreground">House edge</div></div>
                <div><div className="text-primary font-display text-xl md:text-2xl font-bold">3:2</div><div className="text-[11px] uppercase tracking-wider text-muted-foreground">Blackjack pays</div></div>
                <div><div className="text-primary font-display text-xl md:text-2xl font-bold">₹50</div><div className="text-[11px] uppercase tracking-wider text-muted-foreground">Min bet</div></div>
              </div>
            </div>
          </article>
        </div>

        {/* Studio strip */}
        <div className="mt-8 card-surface p-5 md:p-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Powered by leading live-casino studios</p>
            <div className="mt-2 flex flex-wrap gap-3 text-sm font-semibold">
              {["Evolution", "Ezugi", "Pragmatic Live", "NetEnt Live", "PG Soft", "Hacksaw"].map((s) => (
                <span key={s} className="rounded-lg border border-border/60 px-3 py-1">{s}</span>
              ))}
            </div>
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Enter the casino floor</a>
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


      {/* Topic hub / keyword pages */}
      <section className="container-page mt-24">
        <div className="max-w-2xl">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider">Explore by topic</p>
          <h2 className="mt-2 text-3xl md:text-4xl">Deep-dive guides on every cricket ID keyword.</h2>
          <p className="mt-4 text-muted-foreground">Detailed pages on activation, markets, limits and payouts — written for Indian players and updated for the current season.</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {TOPICS.slice(0, 9).map((t) => (
            <Link key={t.slug} to="/topics/$slug" params={{ slug: t.slug }} className="card-surface p-5 hover:border-primary/60 transition-colors">
              <p className="text-[11px] uppercase tracking-widest text-primary font-semibold">{t.keyword}</p>
              <h3 className="mt-2 text-base font-semibold">{t.h1}</h3>
            </Link>
          ))}
        </div>
        <div className="mt-6">
          <Link to="/topics" className="btn-ghost">See all topics →</Link>
        </div>
      </section>

      {/* Reviews */}
      <section className="container-page mt-24">
        <div className="max-w-2xl">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider">Player reviews</p>
          <h2 className="mt-2 text-3xl md:text-4xl">Rated 4.9/5 by {SITE_NAME} players.</h2>
          <p className="mt-4 text-muted-foreground">Independent feedback from cricket, exchange and casino players across India.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            { n: "Rohit S.", c: "Chennai", r: "Got my Sky Exchange ID two minutes before toss. Withdrawal hit UPI in 12 min after the game. Solid team." },
            { n: "Aakash M.", c: "Mumbai", r: "The fancy sessions on Diamond are sharp. Manager helped me lock a green book in the 14th over — first time cashing out mid-innings." },
            { n: "Priya K.", c: "Bengaluru", r: "Started with a ₹500 Teen Patti wallet. Hindi dealer, instant payout, no hidden charges. Now my regular Sunday game." },
            { n: "Vikram T.", c: "Hyderabad", r: "Held three IDs during IPL — 1xBet for accumulators, FairPlay for back-lay, Lotus for casino. One WhatsApp, zero drama." },
            { n: "Suresh R.", c: "Coimbatore", r: "Withdrawal disputes on other sites took days. Here it was resolved in one chat, refunded same day. That's trust." },
            { n: "Ankit J.", c: "Delhi", r: "Live roulette limits are actually usable — ₹5L max on Lightning. Streams don't lag even on my 4G." },
          ].map((v) => (
            <article key={v.n} className="card-surface p-6">
              <div className="text-primary text-lg">★★★★★</div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">"{v.r}"</p>
              <p className="mt-4 text-sm font-semibold">{v.n} <span className="text-muted-foreground font-normal">· {v.c}</span></p>
            </article>
          ))}
        </div>
      </section>

      {/* Homepage FAQ */}
      <section className="container-page mt-24">
        <div className="max-w-2xl">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider">Frequently asked</p>
          <h2 className="mt-2 text-3xl md:text-4xl">Everything about your cricket ID.</h2>
        </div>
        <div className="mt-10 max-w-3xl divide-y divide-border/60 border border-border/60 rounded-2xl overflow-hidden">
          {[
            { q: "How fast do I actually get my cricket ID?", a: `Most ${SITE_NAME} players are set up in under two minutes on WhatsApp — from first message to first login.` },
            { q: "Which platforms can I open an ID on?", a: "12+ verified platforms including 1xBet, FairPlay, Diamond Exchange, Sky Exchange, Lotus 365, Reddy Anna, Mahadev Book and more." },
            { q: "What is the minimum deposit?", a: "Most cricket IDs start at ₹500. Premium exchange IDs open from ₹1,000." },
            { q: "Do you support all payment methods?", a: "Yes — Paytm, GPay, PhonePe, UPI, IMPS, NEFT, bank transfer and crypto. Pick whatever suits you." },
            { q: "How fast are withdrawals?", a: "Standard payouts complete within 15–30 minutes to your registered UPI or bank account." },
            { q: "Do I get a bonus on my first deposit?", a: "Yes — every new player gets a 5% joining bonus and a 2% refill bonus on every subsequent top-up." },
            { q: "Is support really 24×7?", a: "Yes. Real humans, not bots — replies within seconds any hour of the day." },
          ].map((f) => (
            <details key={f.q} className="group open:bg-secondary/40">
              <summary className="cursor-pointer list-none p-5 flex items-start justify-between gap-4">
                <span className="font-medium">{f.q}</span>
                <span className="shrink-0 text-primary group-open:rotate-45 transition-transform text-xl leading-none">+</span>
              </summary>
              <p className="px-5 pb-5 -mt-1 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-6">
          <Link to="/faq" className="btn-ghost">See full FAQ →</Link>
        </div>
      </section>




      {/* CTA */}
      <section className="container-page mt-24 mb-8">
        <div className="card-surface p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative grid gap-6 md:grid-cols-[1.4fr_1fr] items-center">
            <div>
              <h2 className="text-2xl md:text-3xl">Ready to play the next match?</h2>
              <p className="mt-3 text-muted-foreground max-w-xl">Your ID can be live before the coin toss. Message {SITE_NAME} on WhatsApp — {WHATSAPP_NUMBER.replace(/./g, "•")}.</p>
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


