import { createFileRoute } from "@tanstack/react-router";
import { WHATSAPP_URL, SITE_NAME } from "@/lib/site";

export const Route = createFileRoute("/games")({
  head: () => ({
    meta: [
      { title: `Cricket, Fantasy & Live Games — ${SITE_NAME}` },
      { name: "description", content: "Browse cricket exchange, fantasy leagues, live cards, and casino table games available with your CricPro ID. IPL, T20, ODI, and Test coverage." },
      { property: "og:title", content: `Games available with ${SITE_NAME}` },
      { property: "og:description", content: "Cricket exchange, fantasy leagues, and live table games under one ID." },
      { property: "og:url", content: "/games" },
    ],
    links: [{ rel: "canonical", href: "/games" }],
  }),
  component: Games,
});

const categories = [
  { t: "Cricket Exchange", d: "Back and lay markets across IPL, BBL, PSL, T20 World Cup and international bilateral series with live ball-by-ball odds." },
  { t: "Fantasy Cricket", d: "Draft your XI for every scheduled fixture. Small-league, grand-league and head-to-head formats supported." },
  { t: "Football & More", d: "Beyond cricket — football, tennis, kabaddi and horse racing across major global leagues." },
  { t: "Live Casino", d: "Teen Patti, Andar Bahar, Roulette, Blackjack and Baccarat streamed with real dealers around the clock." },
  { t: "Slots & Instant Games", d: "A rotating shelf of certified RNG slots and instant-win games from studios like Pragmatic and Evolution." },
  { t: "Virtual Sports", d: "Simulated cricket, football and racing markets that never close between real fixtures." },
];

function Games() {
  return (
    <section className="container-page py-20">
      <div className="max-w-2xl">
        <p className="text-primary text-sm font-semibold uppercase tracking-wider">Games</p>
        <h1 className="mt-2 text-4xl md:text-5xl">One ID. Every match, every format.</h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Your {SITE_NAME} account unlocks a curated shelf of verified platforms. Tell us how you like to play and we'll match you to the right room.
        </p>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => (
          <article key={c.t} className="card-surface p-6 hover:border-primary/50 transition-colors">
            <h2 className="text-lg font-semibold">{c.t}</h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
          </article>
        ))}
      </div>
      <div className="mt-12">
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Get an ID for your favorite game</a>
      </div>
    </section>
  );
}
