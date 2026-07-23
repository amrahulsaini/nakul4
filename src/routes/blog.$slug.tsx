import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { POSTS } from "./blog";
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
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${post.slug}` },
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
      <Link to="/blog" className="btn-primary mt-6 inline-block">Back to blog</Link>
    </section>
  ),
});

function BlogPost() {
  const { post } = Route.useLoaderData();
  return (
    <article className="container-page py-20 max-w-3xl">
      <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-6">
        <Link to="/" className="hover:text-foreground">Home</Link> <span className="mx-1">/</span>{" "}
        <Link to="/blog" className="hover:text-foreground">Blog</Link> <span className="mx-1">/</span> {post.title}
      </nav>
      <div className="flex items-center gap-3 text-xs text-muted-foreground">
        <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</time>
        <span>·</span>
        <span>{post.readMin} min read</span>
      </div>
      <h1 className="mt-3 text-3xl md:text-5xl leading-tight">{post.title}</h1>
      <p className="mt-4 text-lg text-muted-foreground">{post.excerpt}</p>
      <div className="mt-10 space-y-6 text-[15px] leading-relaxed">
        {post.content.map((block, i) => {
          if (block.h) return <h2 key={i} className="text-2xl mt-10 font-semibold">{block.h}</h2>;
          if (block.list) return (
            <ul key={i} className="list-disc pl-6 space-y-2 text-muted-foreground">
              {block.list.map((li, j) => <li key={j}>{li}</li>)}
            </ul>
          );
          return <p key={i} className="text-muted-foreground">{block.p}</p>;
        })}
      </div>
      <div className="card-surface mt-12 p-6 md:p-8">
        <h3 className="text-xl font-semibold">Get your cricket ID with {SITE_NAME}</h3>
        <p className="mt-2 text-sm text-muted-foreground">Instant activation on 30+ platforms. 5% joining bonus, 2% refill bonus, 24×7 WhatsApp support.</p>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary mt-5 inline-block">Chat on WhatsApp</a>
      </div>
      <div className="mt-12 border-t border-border/60 pt-8">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">More from the blog</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {POSTS.filter((p) => p.slug !== post.slug).slice(0, 2).map((p) => (
            <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="card-surface p-5 hover:border-primary/50 transition-colors">
              <h4 className="font-semibold">{p.title}</h4>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
