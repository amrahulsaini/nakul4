import { createFileRoute, Link } from "@tanstack/react-router";
import { WHATSAPP_URL, SITE_NAME } from "@/lib/site";

const groups: { title: string; faqs: { q: string; a: string }[] }[] = [
  {
    title: "Getting your cricket ID",
    faqs: [
      { q: "How fast do I actually get my cricket ID?", a: `Most players are set up in under two minutes from the moment they message us on WhatsApp. Complex payment setups may take up to five minutes. You receive your username, password and platform link on the same chat, ready to log in and deposit.` },
      { q: "Which platforms can I get an ID on?", a: `We work with 30+ verified brands including FairPlay, Diamond Exchange, Sky Exchange, Lotus 365, 1xBet, Reddy Anna, Mahadev Book, JeetWin, KingExch, 7Cric, 11xPlay and Khelo24. Full catalogue is on the Platforms page.` },
      { q: "Do I need to send documents or KYC upfront?", a: `No paperwork for standard IDs. Some higher-limit exchanges may ask for a light KYC before large withdrawals, and we guide you through it on WhatsApp if that comes up.` },
      { q: "Can I have IDs on multiple platforms?", a: `Yes — many players keep two or three IDs to compare odds across exchanges. There's no extra fee from ${SITE_NAME}.` },
    ],
  },
  {
    title: "Deposits, withdrawals & bonuses",
    faqs: [
      { q: "What is the minimum deposit?", a: `Most platforms start at ₹500. A few premium exchanges begin at ₹1,000. Your account manager will pick a starting balance that fits your play style.` },
      { q: "Which payment methods do you accept?", a: `UPI (GPay, PhonePe, Paytm), IMPS, NEFT, bank transfer and crypto for larger balances. UPI is instant; bank transfers usually clear within 5–10 minutes.` },
      { q: "How do withdrawals work?", a: `Message your manager on WhatsApp with the amount and your registered UPI or bank account. Standard payouts complete within 15 minutes; larger amounts may take up to 2 hours for verification on match nights.` },
      { q: "What bonuses do I actually get?", a: `Every new player receives a 5% joining bonus credited to the wallet on the first deposit, plus a 2% refill bonus on every top-up after that. No wagering tricks — the balance is real and playable.` },
      { q: "Are there withdrawal limits?", a: `No fixed cap from our side. Individual platforms may batch very large withdrawals (₹5 lakh+) into a couple of transactions for compliance — usually settled within 24 hours.` },
    ],
  },
  {
    title: "Safety, privacy & responsible play",
    faqs: [
      { q: "Is using an online cricket ID safe?", a: `Yes, when the platform is verified. Every partner ${SITE_NAME} works with is vetted for payout history, licensing where applicable, and dispute resolution. We drop brands that slip on any of these.` },
      { q: "How do you keep my details private?", a: `Chats are on WhatsApp end-to-end encryption. We never share your number, transactions or username with any third party, and we do not sell contact lists.` },
      { q: "Can I set limits on my play?", a: `Yes — daily deposit caps, session timers, cool-down windows and self-exclusion are all one message away. Message us any time to adjust or lock them.` },
      { q: "What if I have a dispute on a platform?", a: `Your account manager acts as your advocate. We escalate with the platform on your behalf and only close the ticket once the outcome is fair. If a platform delays payout, our payout guarantee covers the gap while it clears.` },
      { q: "Is cricket betting legal in India?", a: `Real-money gaming laws vary by state. States like Andhra Pradesh, Telangana, Tamil Nadu and a handful of others restrict certain formats. Always check your local law and play only where permitted. ${SITE_NAME} services are strictly for adults 18+.` },
    ],
  },
  {
    title: "Match day & support",
    faqs: [
      { q: "What if the platform is slow during an IPL final?", a: `We route you to the most stable of our partner exchanges before high-traffic events, and our support desk is fully staffed on IPL finals, ICC events and World Cup nights.` },
      { q: "Do you provide tips or picks?", a: `No — we provide IDs, not tips. Any provider selling "guaranteed" cricket predictions on Telegram is a red flag. We help you play informed; we don't play for you.` },
      { q: "What hours is support available?", a: `24 hours a day, every day of the year — including national holidays and match days.` },
    ],
  },
];

const allFaqs = groups.flatMap((g) => g.faqs);

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: `Cricket ID FAQ — Deposits, Withdrawals, Safety & Bonuses | ${SITE_NAME}` },
      { name: "description", content: `Answers to 15+ common questions about online cricket IDs in India — activation speed, deposits, withdrawals, KYC, bonuses, safety and responsible play, from the ${SITE_NAME} team.` },
      { name: "keywords", content: "cricket id faq, online betting id questions, cricket exchange withdrawal, cricket id deposit, whatsapp cricket id" },
      { property: "og:title", content: `Cricket ID FAQ — ${SITE_NAME}` },
      { property: "og:description", content: "Everything Indian players ask before getting an online cricket ID." },
      { property: "og:url", content: "/faq" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: allFaqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }),
    }],
  }),
  component: Faq,
});

function Faq() {
  return (
    <section className="container-page py-16 md:py-20">
      <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-6">
        <Link to="/" className="hover:text-foreground">Home</Link> <span className="mx-1">/</span> FAQ
      </nav>
      <div className="max-w-2xl">
        <p className="text-primary text-sm font-semibold uppercase tracking-wider">FAQ</p>
        <h1 className="mt-2 text-4xl sm:text-5xl">Questions, answered.</h1>
        <p className="mt-5 text-lg text-muted-foreground">Everything Indian players ask before opening a cricket ID with {SITE_NAME}. Don't see yours? WhatsApp us — a real human replies in seconds.</p>
      </div>
      <div className="mt-12 space-y-10">
        {groups.map((g) => (
          <div key={g.title}>
            <h2 className="text-xl md:text-2xl font-semibold">{g.title}</h2>
            <div className="mt-4 divide-y divide-border/60 border border-border/60 rounded-2xl overflow-hidden">
              {g.faqs.map((f) => (
                <details key={f.q} className="group open:bg-secondary/40">
                  <summary className="cursor-pointer list-none p-5 flex items-start justify-between gap-4 min-h-11">
                    <span className="font-medium">{f.q}</span>
                    <span className="shrink-0 text-primary group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                  </summary>
                  <p className="px-5 pb-5 -mt-1 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 card-surface p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">Still have a question?</h3>
          <p className="mt-1 text-sm text-muted-foreground">Ping us on WhatsApp any time — an agent replies within seconds.</p>
        </div>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary w-full md:w-auto">Ask on WhatsApp</a>
      </div>
    </section>
  );
}
