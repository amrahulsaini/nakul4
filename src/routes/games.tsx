import { createFileRoute, Link } from "@tanstack/react-router";
import { WHATSAPP_URL, SITE_NAME, PLATFORMS } from "@/lib/site";

export const Route = createFileRoute("/games")({
  head: () => ({
    meta: [
      { title: `Cricket ID Platforms — 30+ Exchanges & Books on ${SITE_NAME}` },
      { name: "description", content: `Get IDs for FairPlay, Diamond Exchange, Sky Exchange, Lotus 365, Reddy Anna, Mahadev Book, 1xBet, JeetWin and more. Instant activation with ${SITE_NAME}.` },
      { name: "keywords", content: "diamond exchange id, sky exchange id, fairplay id, lotus 365 id, reddy anna id, mahadev book, 1xbet cricket id, jeetwin, kingexch, 7cric, 11xplay, khelo24" },
      { property: "og:title", content: `Cricket ID Platforms on ${SITE_NAME}` },
      { property: "og:description", content: "30+ verified cricket exchanges and books — pick yours and get an instant ID." },
      { property: "og:url", content: "/games" },
    ],
    links: [{ rel: "canonical", href: "/games" }],
  }),
  component: Games,
});

function Games() {
  return (
    <section className="container-page py-20">
      <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-6">
        <Link to="/" className="hover:text-foreground">Home</Link> <span className="mx-1">/</span> Platforms
      </nav>
      <div className="max-w-2xl">
        <p className="text-primary text-sm font-semibold uppercase tracking-wider">Platforms</p>
        <h1 className="mt-2 text-4xl md:text-5xl">One WhatsApp. 30+ cricket & betting IDs.</h1>
        <p className="mt-5 text-lg text-muted-foreground">
          {SITE_NAME} works with India's most popular cricket exchanges, books and casino brands. Choose the platform that fits your play style — we handle the ID, deposit and first payout.
        </p>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {PLATFORMS.map((p) => (
          <article key={p.slug} className="card-surface p-6 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="text-3xl">{p.icon}</div>
              <div>
                <h2 className="text-lg font-semibold">
                  <Link to="/platforms/$slug" params={{ slug: p.slug }} className="hover:text-primary transition-colors">{p.name}</Link>
                </h2>
                <p className="text-[11px] uppercase tracking-wider text-primary">{p.tag}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.blurb}</p>
            <div className="mt-5 flex items-center gap-4 text-sm">
              <Link to="/platforms/$slug" params={{ slug: p.slug }} className="text-primary font-medium hover:underline">Details →</Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">WhatsApp</a>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-12">
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Chat with a manager</a>
      </div>
    </section>
  );
}
