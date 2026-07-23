import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PLATFORMS, WHATSAPP_URL, WHATSAPP_NUMBER, SITE_NAME, type Platform } from "@/lib/site";
import posterCricket from "@/assets/poster-cricket-betting.jpg";
import posterExchange from "@/assets/poster-exchange.jpg";
import posterIPL from "@/assets/poster-ipl-t20.jpg";
import posterCasino from "@/assets/poster-live-casino.jpg";

const POSTER_BY_TAG: Record<string, string> = {
  "Sportsbook": posterCricket,
  "Exchange": posterExchange,
  "All-in-one": posterCasino,
  "Book": posterCricket,
  "Casino + Sports": posterCasino,
  "Cricket first": posterIPL,
  "Sports + Games": posterIPL,
};

export const Route = createFileRoute("/platforms/$slug")({
  loader: ({ params }) => {
    const platform = PLATFORMS.find((p) => p.slug === params.slug);
    if (!platform) throw notFound();
    return { platform };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Platform not found" }, { name: "robots", content: "noindex" }] };
    const p = loaderData.platform;
    return {
      meta: [
        { title: `${p.name} — Get Your ID Instantly on WhatsApp | ${SITE_NAME}` },
        { name: "description", content: `Get your ${p.name} instantly via WhatsApp. ${p.blurb} 5% joining bonus, 2% refill bonus, 24×7 support from ${SITE_NAME}.` },
        { name: "keywords", content: p.keywords },
        { property: "og:title", content: `${p.name} on ${SITE_NAME}` },
        { property: "og:description", content: p.blurb },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/platforms/${p.slug}` },
      ],
      links: [{ rel: "canonical", href: `/platforms/${p.slug}` }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: p.name,
          description: p.blurb,
          brand: { "@type": "Brand", name: SITE_NAME },
          category: p.tag,
        }),
      }],
    };
  },
  component: PlatformDetail,
  notFoundComponent: () => (
    <section className="container-page py-20 text-center">
      <h1 className="text-3xl">Platform not found</h1>
      <Link to="/games" className="btn-primary mt-6 inline-block">Browse all platforms</Link>
    </section>
  ),
});

function PlatformDetail() {
  const { platform: p } = Route.useLoaderData() as { platform: Platform };
  const poster = POSTER_BY_TAG[p.tag] ?? posterCricket;
  const related = PLATFORMS.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <>
      <section className="container-page pt-12 pb-6">
        <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground">Home</Link> <span className="mx-1">/</span>{" "}
          <Link to="/games" className="hover:text-foreground">Platforms</Link> <span className="mx-1">/</span> {p.name}
        </nav>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-secondary/60 px-3 py-1 text-xs">
              <span>{p.icon}</span> <span className="text-muted-foreground">{p.tag}</span>
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">{p.hero}</h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">{p.blurb}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Get {p.name} on WhatsApp</a>
              <Link to="/games" className="btn-ghost">Other platforms</Link>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">Direct line: {WHATSAPP_NUMBER}</p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/25 to-accent/20 blur-2xl" />
            <img
              src={poster}
              alt={`${p.name} promotional poster`}
              width={1600}
              height={912}
              loading="lazy"
              className="relative w-full h-auto rounded-3xl border border-border/60 shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="container-page mt-16">
        <div className="card-surface grid grid-cols-3 divide-x divide-border/60 overflow-hidden">
          <div className="p-6 text-center">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Min deposit</div>
            <div className="mt-2 font-display text-2xl font-bold text-primary">{p.minDeposit}</div>
          </div>
          <div className="p-6 text-center">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Payout time</div>
            <div className="mt-2 font-display text-2xl font-bold text-primary">{p.payoutTime}</div>
          </div>
          <div className="p-6 text-center">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Category</div>
            <div className="mt-2 font-display text-2xl font-bold text-primary">{p.tag}</div>
          </div>
        </div>
      </section>

      <section className="container-page mt-16 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl md:text-3xl">Why players choose {p.name}</h2>
          <ul className="mt-6 space-y-3">
            {p.highlights.map((h) => (
              <li key={h} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
                <span className="text-sm text-muted-foreground">{h}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground"><strong className="text-foreground">Best for:</strong> {p.bestFor}</p>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl">Available markets</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {p.markets.map((m) => (
              <span key={m} className="rounded-full border border-border/60 bg-secondary/40 px-3 py-1.5 text-xs">{m}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page mt-16">
        <div className="card-surface p-6 md:p-8">
          <h2 className="text-xl md:text-2xl">How to get your {p.name}</h2>
          <ol className="mt-5 grid gap-4 md:grid-cols-3 text-sm">
            <li className="flex gap-3"><span className="font-display text-primary text-2xl font-bold">1.</span><span className="text-muted-foreground">Message {SITE_NAME} on WhatsApp — say you want a {p.name}.</span></li>
            <li className="flex gap-3"><span className="font-display text-primary text-2xl font-bold">2.</span><span className="text-muted-foreground">Confirm username, deposit amount and preferred payment method.</span></li>
            <li className="flex gap-3"><span className="font-display text-primary text-2xl font-bold">3.</span><span className="text-muted-foreground">Deposit via UPI, receive credentials, start playing.</span></li>
          </ol>
        </div>
      </section>

      <section className="container-page mt-16">
        <h2 className="text-xl font-semibold">Other platforms you may like</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {related.map((r) => (
            <Link key={r.slug} to="/platforms/$slug" params={{ slug: r.slug }} className="card-surface p-5 hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="text-2xl">{r.icon}</div>
                <div>
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-[11px] uppercase tracking-wider text-primary">{r.tag}</div>
                </div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{r.blurb}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
