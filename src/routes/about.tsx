import { createFileRoute } from "@tanstack/react-router";
import { WHATSAPP_URL, SITE_NAME } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About ${SITE_NAME} — Trusted Cricket ID Provider in India` },
      { name: "description", content: `Learn how ${SITE_NAME} helps thousands of Indian cricket fans get instant, secure IDs on India's most trusted fantasy and exchange platforms.` },
      { property: "og:title", content: `About ${SITE_NAME}` },
      { property: "og:description", content: "Instant, secure cricket IDs backed by 24×7 WhatsApp support." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <section className="container-page py-20">
      <div className="max-w-3xl">
        <p className="text-primary text-sm font-semibold uppercase tracking-wider">About us</p>
        <h1 className="mt-2 text-4xl md:text-5xl">A cricket concierge built by players.</h1>
        <p className="mt-5 text-lg text-muted-foreground">
          {SITE_NAME} started with a simple frustration: getting a working cricket ID in India took too long, involved too many strangers, and left too many questions unanswered. We rebuilt the flow from scratch around one relationship — you and a WhatsApp agent who actually picks up.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold">Our promise</h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Every ID we issue is on a verified platform, funded through auditable payment rails, and backed by a payout guarantee. If something goes wrong, we own it — not you.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">What we don't do</h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              We don't share your details, run ghost platforms, or push players toward risky bets. We work with adults who know what they want to play and help them do it safely.
            </p>
          </div>
        </div>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary mt-10">Talk to our team</a>
      </div>
    </section>
  );
}
