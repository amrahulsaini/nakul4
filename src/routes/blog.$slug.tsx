import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { POSTS, type Post } from "./blog";
import { WHATSAPP_URL, SITE_NAME } from "@/lib/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Article not found" }, { name: "robots", content: "noindex" }] };
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} | ${SITE_NAME}` },
        { name: "description", content: post.excerpt },
        { name: "keywords", content: post.keywords ?? "" },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${post.slug}` },
        { property: "article:published_time", content: post.date },
        { property: "article:section", content: post.category },
      ],
      links: [{ rel: "canonical", href: `/blog/${post.slug}` }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          dateModified: post.date,
          articleSection: post.category,
          keywords: post.keywords,
          author: { "@type": "Organization", name: SITE_NAME },
          publisher: { "@type": "Organization", name: SITE_NAME },
        }),
      }],
    };
  },
  component: BlogPost,
  notFoundComponent: () => (
    <section className="container-page py-20 text-center">
      <h1 className="text-3xl">Article not found</h1>
      <Link to="/blog" className="btn-primary mt-6 inline-flex">Back to blog</Link>
    </section>
  ),
});

function BlogPost() {
  const { post } = Route.useLoaderData();
  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
  const headings = post.content.filter((b) => b.h).map((b) => b.h!) as string[];

  return (
    <article className="container-page py-12 md:py-16 max-w-3xl">
      <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-6">
        <Link to="/" className="hover:text-foreground">Home</Link> <span className="mx-1">/</span>{" "}
        <Link to="/blog" className="hover:text-foreground">Blog</Link> <span className="mx-1">/</span> <span className="text-foreground">{post.title}</span>
      </nav>

      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="rounded-full bg-primary/20 border border-primary/40 px-2.5 py-1 text-primary font-semibold uppercase tracking-wider">{post.category}</span>
        <time dateTime={post.date} className="text-muted-foreground">
          {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
        </time>
        <span className="text-muted-foreground">·</span>
        <span className="text-muted-foreground">{post.readMin} min read</span>
      </div>

      <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl leading-[1.1]">{post.title}</h1>
      <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{post.excerpt}</p>

      {headings.length > 3 && (
        <nav aria-label="Table of contents" className="mt-8 card-surface p-5">
          <p className="text-xs uppercase tracking-widest text-primary font-semibold">In this article</p>
          <ol className="mt-3 space-y-1.5 text-sm">
            {headings.map((h, i) => (
              <li key={i} className="text-muted-foreground">
                <span className="text-primary/60 mr-2">{String(i + 1).padStart(2, "0")}</span>{h}
              </li>
            ))}
          </ol>
        </nav>
      )}

      <div className="mt-10 prose-rich">
        {post.content.map((block: Post["content"][number], i: number) => {
          if (block.h) return <h2 key={i}>{block.h}</h2>;
          if (block.list) return (
            <ul key={i}>
              {block.list.map((li: string, j: number) => <li key={j}>{li}</li>)}
            </ul>
          );
          return <p key={i}>{block.p}</p>;
        })}
      </div>

      <div className="card-surface mt-14 p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-semibold">Get your cricket ID with {SITE_NAME}</h3>
        <p className="mt-2 text-sm text-muted-foreground">Instant activation on 30+ verified platforms. 5% joining bonus, 2% refill bonus, 24×7 WhatsApp support — every day of the year.</p>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary mt-5 inline-flex">Chat on WhatsApp</a>
      </div>

      <div className="mt-14 border-t border-border/60 pt-8">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Keep reading</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => (
            <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="card-surface p-5 hover:border-primary/50 transition-colors">
              <span className="text-[10px] uppercase tracking-widest text-primary font-semibold">{p.category}</span>
              <h4 className="mt-1 font-semibold">{p.title}</h4>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
