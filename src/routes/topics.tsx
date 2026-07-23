import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE_NAME, WHATSAPP_URL } from "@/lib/site";
import { TOPICS } from "@/lib/keywords";

export const Route = createFileRoute("/topics")({
  head: () => ({
    meta: [
      { title: `Cricket ID Topics & Keyword Guides | ${SITE_NAME}` },
      { name: "description", content: `Browse ${SITE_NAME} keyword guides — online cricket ID, IPL betting ID, exchange, fancy markets, live casino, Teen Patti, Andar Bahar and more.` },
      { property: "og:title", content: `Cricket ID Topics — ${SITE_NAME}` },
      { property: "og:description", content: "Deep dives on every cricket ID and casino keyword — activation, markets, limits and payouts." },
      { property: "og:url", content: "/topics" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/topics" }],
  }),
  component: TopicsIndex,
});

function TopicsIndex() {
  return (
    <section className="container-page py-20">
      <div className="max-w-2xl">
        <p className="text-primary text-sm font-semibold uppercase tracking-wider">Topic hub</p>
        <h1 className="mt-2 text-4xl md:text-5xl">Explore by keyword.</h1>
        <p className="mt-5 text-muted-foreground">Detailed guides on every cricket ID, exchange market and live casino table — written for Indian players and updated for the current season.</p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {TOPICS.map((t) => (
          <Link key={t.slug} to="/topics/$slug" params={{ slug: t.slug }} className="card-surface p-6 hover:border-primary/60 transition-colors">
            <p className="text-[11px] uppercase tracking-widest text-primary font-semibold">{t.keyword}</p>
            <h2 className="mt-2 text-lg font-semibold">{t.h1}</h2>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{t.intro}</p>
          </Link>
        ))}
      </div>
      <div className="mt-12">
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Get your ID on WhatsApp</a>
      </div>
    </section>
  );
}
