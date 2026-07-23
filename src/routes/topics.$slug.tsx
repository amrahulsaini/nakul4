import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SITE_NAME, WHATSAPP_URL } from "@/lib/site";
import { TOPIC_BY_SLUG, TOPICS } from "@/lib/keywords";

export const Route = createFileRoute("/topics/$slug")({
  loader: ({ params }) => {
    const topic = TOPIC_BY_SLUG[params.slug];
    if (!topic) throw notFound();
    return { topic };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Not found" }, { name: "robots", content: "noindex" }] };
    const t = loaderData.topic;
    return {
      meta: [
        { title: t.title },
        { name: "description", content: t.description },
        { name: "keywords", content: `${t.keyword}, ${SITE_NAME.toLowerCase()}, cricket id, online betting id, whatsapp cricket id` },
        { property: "og:title", content: t.title },
        { property: "og:description", content: t.description },
        { property: "og:url", content: `/topics/${params.slug}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/topics/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: t.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "/" },
              { "@type": "ListItem", position: 2, name: "Topics", item: "/topics" },
              { "@type": "ListItem", position: 3, name: t.h1, item: `/topics/${params.slug}` },
            ],
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <section className="container-page py-24">
      <h1 className="text-3xl">Topic not found</h1>
      <Link to="/topics" className="btn-ghost mt-6 inline-flex">Back to topics</Link>
    </section>
  ),
  errorComponent: () => (
    <section className="container-page py-24">
      <h1 className="text-3xl">Something went wrong</h1>
      <Link to="/topics" className="btn-ghost mt-6 inline-flex">Back to topics</Link>
    </section>
  ),
  component: TopicPage,
});

function TopicPage() {
  const { topic: t } = Route.useLoaderData();
  const related = t.related.map((slug) => TOPIC_BY_SLUG[slug]).filter(Boolean);
  return (
    <>
      <section className="container-page pt-16 pb-8">
        <nav className="text-xs text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link> <span className="mx-1">/</span>
          <Link to="/topics" className="hover:text-primary">Topics</Link> <span className="mx-1">/</span>
          <span className="text-foreground">{t.keyword}</span>
        </nav>
        <p className="mt-6 text-primary text-sm font-semibold uppercase tracking-wider">{t.keyword}</p>
        <h1 className="mt-2 text-4xl md:text-5xl max-w-3xl">{t.h1}</h1>
        <p className="mt-5 text-muted-foreground max-w-3xl leading-relaxed">{t.intro}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Get your ID on WhatsApp</a>
          <Link to="/games" className="btn-ghost">Browse platforms</Link>
        </div>
      </section>

      <section className="container-page mt-8 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
        <article className="space-y-8">
          {t.sections.map((s) => (
            <div key={s.h} className="card-surface p-6 md:p-8">
              <h2 className="text-2xl">{s.h}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.p}</p>
            </div>
          ))}

          <div className="card-surface p-6 md:p-8">
            <h2 className="text-2xl">Frequently asked</h2>
            <div className="mt-4 divide-y divide-border/60">
              {t.faqs.map((f) => (
                <details key={f.q} className="group py-4">
                  <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                    <span className="font-medium">{f.q}</span>
                    <span className="shrink-0 text-primary group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                  </summary>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </article>

        <aside className="space-y-6">
          <div className="card-surface p-6">
            <p className="text-xs uppercase tracking-widest text-primary font-semibold">Related topics</p>
            <ul className="mt-3 space-y-2">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link to="/topics/$slug" params={{ slug: r.slug }} className="text-sm hover:text-primary">→ {r.h1}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="card-surface p-6">
            <p className="text-xs uppercase tracking-widest text-primary font-semibold">Start now</p>
            <p className="mt-2 text-sm text-muted-foreground">Your ID can be live in under two minutes.</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary mt-4 w-full text-center">Chat on WhatsApp</a>
          </div>
        </aside>
      </section>

      <section className="container-page mt-16 mb-24">
        <p className="text-primary text-sm font-semibold uppercase tracking-wider">More topics</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {TOPICS.filter((x) => x.slug !== t.slug).map((x) => (
            <Link key={x.slug} to="/topics/$slug" params={{ slug: x.slug }} className="rounded-full border border-border/60 bg-secondary/40 px-3 py-1.5 text-xs hover:border-primary/60 hover:text-primary">
              {x.keyword}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
