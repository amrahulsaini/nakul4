import { createFileRoute, Link } from "@tanstack/react-router";
import { WHATSAPP_URL, SITE_NAME, PLATFORMS } from "@/lib/site";

export const Route = createFileRoute("/games")({
  head: () => ({
    meta: [
      { title: `Cricket ID Platforms — 30+ Exchanges, Books & Casinos | ${SITE_NAME}` },
      { name: "description", content: `Get instant IDs on FairPlay, Diamond Exchange, Sky Exchange, Lotus 365, Reddy Anna, Mahadev Book, 1xBet, JeetWin, KingExch, 7Cric, 11xPlay, Khelo24 and 20+ more. Activation on WhatsApp with ${SITE_NAME}.` },
      { name: "keywords", content: "diamond exchange id, sky exchange id, fairplay id, lotus 365 id, reddy anna id, mahadev book, 1xbet cricket id, jeetwin, kingexch, 7cric, 11xplay, khelo24, cricket exchange list india" },
      { property: "og:title", content: `Cricket ID Platforms on ${SITE_NAME}` },
      { property: "og:description", content: "30+ verified cricket exchanges and books — pick yours and get an instant ID on WhatsApp." },
      { property: "og:url", content: "/games" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/games" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: `${SITE_NAME} cricket ID platforms`,
        itemListElement: PLATFORMS.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: p.name,
          url: `/platforms/${p.slug}`,
          description: p.blurb,
        })),
      }),
    }],
  }),
  component: Games,
});

const categories: { title: string; body: string; tags: string[] }[] = [
  { title: "Cricket exchanges", body: "True back-and-lay pricing, deep liquidity on IPL and international cricket, and razor-tight fancy markets. Best for players who like to trade in-play.", tags: ["Exchange"] },
  { title: "Sportsbooks", body: "Fixed-odds cricket, football, tennis, kabaddi and horse racing under a single login. Best if you prefer straight-line match odds and accumulators.", tags: ["Sportsbook"] },
  { title: "Indian books", body: "Trusted domestic brands with fast session settlement and Hindi-first support. Popular during IPL and Asia Cup.", tags: ["Book"] },
  { title: "Casino + Sports", body: "One wallet across cricket, live casino, Teen Patti, Andar Bahar, roulette and slots. Best for players who want variety.", tags: ["All-in-one", "Casino + Sports", "Sports + Games", "Cricket first"] },
];

function Games() {
  return (
    <>
      <section className="container-page pt-16 md:pt-20 pb-4">
        <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground">Home</Link> <span className="mx-1">/</span> Platforms
        </nav>
        <div className="max-w-3xl">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider">Platforms</p>
          <h1 className="mt-2 text-4xl sm:text-5xl md:text-6xl leading-[1.05]">One WhatsApp. 30+ cricket & betting IDs.</h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {SITE_NAME} works with India's most popular cricket exchanges, sportsbooks, casino brands and Indian books. Compare limits, market depth and payout speeds — then get your ID activated on WhatsApp in under two minutes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Chat with a manager</a>
            <Link to="/topics" className="btn-ghost">Topic guides</Link>
          </div>
        </div>
      </section>

      <section className="container-page mt-12">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <article key={c.title} className="card-surface p-5">
              <h2 className="text-base font-semibold">{c.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {c.tags.map((t) => <span key={t} className="text-[10px] uppercase tracking-wider rounded-full bg-secondary/60 border border-border/60 px-2 py-0.5 text-muted-foreground">{t}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-page mt-16">
        <div className="flex items-end justify-between flex-wrap gap-3">
          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-wider">All platforms</p>
            <h2 className="mt-2 text-2xl md:text-3xl">Every partner brand on {SITE_NAME}</h2>
          </div>
          <p className="text-xs text-muted-foreground">Showing {PLATFORMS.length} verified brands</p>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PLATFORMS.map((p) => (
            <article key={p.slug} className="card-surface p-6 hover:border-primary/50 flex flex-col">
              <div className="flex min-w-0 items-center gap-3">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-secondary/60 text-2xl">{p.icon}</div>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold truncate">
                    <Link to="/platforms/$slug" params={{ slug: p.slug }} className="hover:text-primary transition-colors">{p.name}</Link>
                  </h3>
                  <p className="text-[11px] uppercase tracking-wider text-primary">{p.tag}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.blurb}</p>
              <dl className="mt-4 grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-lg bg-secondary/40 border border-border/60 p-2.5">
                  <dt className="text-muted-foreground uppercase tracking-wider text-[10px]">Min deposit</dt>
                  <dd className="mt-0.5 font-semibold">{p.minDeposit}</dd>
                </div>
                <div className="rounded-lg bg-secondary/40 border border-border/60 p-2.5">
                  <dt className="text-muted-foreground uppercase tracking-wider text-[10px]">Payout</dt>
                  <dd className="mt-0.5 font-semibold">{p.payoutTime}</dd>
                </div>
              </dl>
              <div className="mt-5 flex items-center gap-4 text-sm">
                <Link to="/platforms/$slug" params={{ slug: p.slug }} className="text-primary font-medium hover:underline">View details →</Link>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="ml-auto text-muted-foreground hover:text-foreground">WhatsApp</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-page mt-20 mb-20">
        <div className="card-surface p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl">Not sure which platform fits your play style?</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">Message us with how much you play, the sports you follow and your payment preference. Our manager will match you to the best-fit exchange or book — and set up a small starter account so you can decide before scaling up.</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6">Get a personal recommendation</a>
        </div>
      </section>
    </>
  );
}
