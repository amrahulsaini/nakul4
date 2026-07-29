import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { WHATSAPP_URL } from "@/lib/site";
import { IMPORTED_BY_SLUG, IMPORTED_PAGES, type ImportedPage } from "@/lib/imported-pages";
import { articleSchema, breadcrumbSchema, serviceSchema, webPageSchema } from "@/lib/schema";

export const Route = createFileRoute("/p/$")({
  loader: ({ params }) => {
    const slug = (params as { _splat?: string })._splat ?? "";
    const page = IMPORTED_BY_SLUG[slug];
    if (!page) throw notFound();
    return { page, slug };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Not found" }, { name: "robots", content: "noindex" }] };
    const { page, slug } = loaderData;
    return {
      meta: [
        { title: page.title },
        { name: "description", content: page.description },
        { name: "keywords", content: `${page.h1.toLowerCase()}, madras book, cricket id, online betting id, whatsapp cricket id` },
        { property: "og:title", content: page.title },
        { property: "og:description", content: page.description },
        { property: "og:url", content: `/p/${slug}` },
        { property: "og:type", content: "article" },
        { name: "twitter:title", content: page.title },
        { name: "twitter:description", content: page.description },
      ],
      links: [{ rel: "canonical", href: `/p/${slug}` }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(webPageSchema({ path: `/p/${slug}`, title: page.title, description: page.description })) },
        { type: "application/ld+json", children: JSON.stringify(articleSchema({ headline: page.h1, description: page.description, path: `/p/${slug}` })) },
        { type: "application/ld+json", children: JSON.stringify(serviceSchema({ name: page.h1, description: page.description, path: `/p/${slug}` })) },
        {
          type: "application/ld+json",
          children: JSON.stringify(breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: page.category, path: "/games" },
            { name: page.h1, path: `/p/${slug}` },
          ])),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <section className="container-page py-24 text-center">
      <h1 className="text-3xl">Page not found</h1>
      <Link to="/" className="btn-primary mt-6 inline-flex">Back to home</Link>
    </section>
  ),
  component: PageView,
});

function PageView() {
  const { page } = Route.useLoaderData();
  const related: ImportedPage[] = IMPORTED_PAGES
    .filter((p) => p.category === page.category && p.slug !== page.slug)
    .slice(0, 8);

  return (
    <>
      <section className="container-page pt-14 pb-8">
        <nav className="text-xs text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link> <span className="mx-1">/</span>
          <span className="text-foreground">{page.category}</span>
        </nav>
        <p className="mt-6 text-primary text-sm font-semibold uppercase tracking-wider">{page.category}</p>
        <h1 className="mt-2 text-4xl md:text-5xl max-w-3xl">{page.h1}</h1>
        <p className="mt-5 text-muted-foreground max-w-3xl leading-relaxed">{page.intro}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Get your ID on WhatsApp
          </a>
          <Link to="/games" className="btn-ghost">Browse all platforms</Link>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">One tap opens WhatsApp chat with our official Madras Book team.</p>
      </section>

      <section className="container-page mt-8 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
        <article className="space-y-6">
          <div className="card-surface p-6 md:p-8">
            <h2 className="text-2xl">Why players choose Madras Book for {page.h1.split(" — ")[0]}</h2>
            <ul className="mt-4 space-y-3">
              {page.bullets.map((b: string) => (
                <li key={b} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-surface p-6 md:p-8">
            <h2 className="text-2xl">How to get started in 3 steps</h2>
            <ol className="mt-4 space-y-4 text-sm text-muted-foreground">
              <li><span className="text-primary font-semibold">1. Message us on WhatsApp</span> — tap the button above to open a chat with the official Madras Book desk.</li>
              <li><span className="text-primary font-semibold">2. Share your preferred username</span> — our team creates and verifies your ID on the official platform.</li>
              <li><span className="text-primary font-semibold">3. Deposit via UPI & start playing</span> — 5% joining bonus is credited instantly and you can begin betting on cricket, casino, or sports of your choice.</li>
            </ol>
          </div>

          <div className="card-surface p-6 md:p-8">
            <h2 className="text-2xl">Deposits, withdrawals & safety</h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Every {page.category.toLowerCase()} account opened through Madras Book supports UPI (GPay, PhonePe, Paytm), IMPS, NEFT and direct bank transfer. Withdrawals typically settle within 10–30 minutes to any Indian bank account. Your KYC stays private, your ID stays yours, and our team is available 24×7 — just <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">contact us on WhatsApp</a> for any deposit, withdrawal or gameplay support.
            </p>
          </div>
        </article>

        <aside className="space-y-6">
          <div className="card-surface p-6 sticky top-24">
            <p className="text-xs uppercase tracking-widest text-primary font-semibold">Start now</p>
            <p className="mt-2 text-sm text-muted-foreground">Your {page.h1.split(" — ")[0]} ID can be live in under two minutes.</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary mt-4 w-full text-center">
              Chat on WhatsApp
            </a>
            <p className="mt-3 text-[11px] text-muted-foreground text-center">18+ only. Play responsibly.</p>
          </div>
          {related.length > 0 && (
            <div className="card-surface p-6">
              <p className="text-xs uppercase tracking-widest text-primary font-semibold">Related {page.category}s</p>
              <ul className="mt-3 space-y-2">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link to="/p/$" params={{ _splat: r.slug }} className="text-sm hover:text-primary">
                      → {r.h1.split(" — ")[0]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </section>

      <section className="container-page mt-16 mb-24">
        <p className="text-primary text-sm font-semibold uppercase tracking-wider">Explore more IDs</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {IMPORTED_PAGES.slice(0, 30).filter((x) => x.slug !== page.slug).map((x) => (
            <Link
              key={x.slug}
              to="/p/$"
              params={{ _splat: x.slug }}
              className="rounded-full border border-border/60 bg-secondary/40 px-3 py-1.5 text-xs hover:border-primary/60 hover:text-primary"
            >
              {x.h1.split(" — ")[0]}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
