import { createFileRoute, Link } from "@tanstack/react-router";
import { WHATSAPP_URL, SITE_NAME } from "@/lib/site";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readMin: number;
  content: { h?: string; p?: string; list?: string[] }[];
};

export const POSTS: Post[] = [
  {
    slug: "how-to-get-online-cricket-id-in-india",
    title: "How to Get an Online Cricket ID in India (2026 Guide)",
    excerpt: "A step-by-step walkthrough for choosing a platform, activating your ID on WhatsApp, funding via UPI and placing your first cricket bet safely.",
    date: "2026-06-10",
    readMin: 8,
    content: [
      { p: `An online cricket ID is simply a verified account on a cricket exchange or book that lets you place markets on live and upcoming matches. In India, the fastest route to one is through a trusted provider like ${SITE_NAME} — you skip long registration forms and get a ready-to-play ID on WhatsApp in under two minutes.` },
      { h: "Step 1 — Choose the right platform" },
      { p: `Different platforms suit different players. Cricket exchanges like FairPlay, Diamond Exchange and Sky Exchange offer back-lay markets with tight spreads. Books like Reddy Anna and Mahadev Book are popular for their settled Indian user base and quick payouts. All-in-one platforms like Lotus 365 and 11xPlay bundle sportsbook plus live casino under one wallet.` },
      { h: "Step 2 — Message on WhatsApp" },
      { p: `Send a hi to the ${SITE_NAME} team, mention which platform you want, and our manager confirms your username, deposit amount and preferred payment method. Credentials are shared over the same chat, so nothing is lost in email.` },
      { h: "Step 3 — Deposit securely" },
      { p: `Deposits go through standard Indian rails — UPI (GPay, PhonePe, Paytm), IMPS, NEFT, bank transfer, and crypto for larger balances. UPI is instant; bank transfers usually clear within 5-10 minutes.` },
      { h: "Step 4 — Place your first market" },
      { p: `Start small. Match odds (win/lose) are the simplest market. Fancy markets (session runs, over totals, batsman runs) reward players who study form. Never chase losses — set a session cap before you begin.` },
      { h: "Withdrawals" },
      { p: `Withdrawals happen on the same WhatsApp thread. Approved withdrawals credit back to the same UPI or bank account in 5-30 minutes depending on your bank.` },
      { h: "Frequently asked" },
      { list: [
        "Is a cricket ID legal in India? Real-money gaming laws vary by state — always check your local law before playing.",
        "What's the minimum deposit? Most platforms start at ₹500. Ask your manager for the exact number on your chosen platform.",
        "Can I get bonuses? Yes — 5% joining bonus on first deposit and 2% refill bonus on every top-up.",
      ] },
    ],
  },
  {
    slug: "diamond-exchange-vs-sky-exchange",
    title: "Diamond Exchange vs Sky Exchange: Which Cricket ID Is Right For You?",
    excerpt: "Both are among India's most popular cricket exchanges — but they differ in limits, market depth and casino coverage. Here's an honest comparison.",
    date: "2026-06-18",
    readMin: 7,
    content: [
      { p: "Diamond Exchange and Sky Exchange are two of the most searched cricket exchange brands in India. Both offer back-lay markets, fancy sessions and live casino — but there are meaningful differences that matter based on your play style." },
      { h: "Market depth & liquidity" },
      { p: "Sky Exchange typically has slightly deeper liquidity on Indian domestic markets like Ranji Trophy and Vijay Hazare. Diamond Exchange tends to price IPL and international T20 fancies more aggressively, which suits players who like to trade in-play." },
      { h: "Limits" },
      { p: "Diamond Exchange caters to higher-limit players out of the box. Sky Exchange starts more conservatively but limits open up as your account history grows." },
      { h: "Live casino" },
      { p: "Sky Exchange offers a broader mix of Evolution and Ezugi live tables. Diamond Exchange focuses on Andar Bahar, Teen Patti and Roulette with strong Indian dealers." },
      { h: "Deposit & withdrawal experience" },
      { p: `Through ${SITE_NAME}, both platforms clear UPI deposits instantly. Withdrawals on both average 15-20 minutes, though very large payouts can take an hour on match nights.` },
      { h: "Which should you pick?" },
      { p: "Casual IPL players: Diamond Exchange for sharper fancy pricing. Volume players on domestic cricket: Sky Exchange for deeper books. If you're unsure, message us — a manager can set up a small account on both and you'll know within a week which fits your rhythm." },
    ],
  },
  {
    slug: "ipl-betting-strategy-beginners",
    title: "IPL Betting Strategy for Beginners: 7 Rules That Actually Work",
    excerpt: "The mistakes new players make in IPL season — and the seven habits that separate long-term profitable players from the crowd.",
    date: "2026-07-02",
    readMin: 9,
    content: [
      { p: "IPL is the busiest cricket-betting window of the year in India. It's also when new players lose the most money. Almost every big loss comes down to the same handful of avoidable mistakes." },
      { h: "1. Set a season bankroll first" },
      { p: "Decide the total you're willing to spend across the entire tournament before the first ball. Divide it into per-match units — usually 1-2% of the bankroll per market. This alone eliminates the biggest cause of blow-ups." },
      { h: "2. Never chase" },
      { p: "The urge to double up after a loss is the single most expensive habit in cricket betting. Losses are baked into the game; chasing turns a normal downswing into a bankroll wipe." },
      { h: "3. Read the pitch report" },
      { p: "Wankhede, Chinnaswamy and Eden Gardens are batting-friendly. Chepauk and Ekana favour spinners. Pitch character predicts totals better than team form." },
      { h: "4. Toss matters more than you think" },
      { p: "In day-night IPL games at dew venues, chasing wins ~60% of the time. Wait for toss before committing on match odds if you're uncertain." },
      { h: "5. Fancy markets reward specialists" },
      { p: "Over-under markets on powerplay runs, batsman totals and wickets in a session are where informed players make their edge. But they punish tourists — study a batter's recent 10-innings before you back a run total." },
      { h: "6. Cash out is a tool, not a habit" },
      { p: "Use cash-out to protect against genuine collapse risk (rain, injury). Don't use it to lock in tiny profits from every green position — the accumulated cost eats your edge." },
      { h: "7. Take breaks" },
      { p: "The 60-match IPL is a marathon. Skip a game if you're tilted. Skip a week if your read on the season is off." },
      { p: `Ready to start? Get your IPL-ready ID on WhatsApp — the ${SITE_NAME} team activates you in under two minutes with the 5% joining bonus applied.` },
    ],
  },
  {
    slug: "safe-online-betting-india",
    title: "How to Bet Safely Online in India: A Practical Checklist",
    excerpt: "Nine practical safety rules — from picking a verified platform to protecting your UPI, spotting scams and knowing when to stop.",
    date: "2026-07-15",
    readMin: 6,
    content: [
      { p: "Online cricket betting has grown fast in India — and so has the number of shady operators. This checklist covers the practical, non-negotiable habits that keep your money and identity safe." },
      { h: "1. Only use verified platforms" },
      { p: `Stick to established names — FairPlay, Diamond Exchange, Sky Exchange, Lotus 365, Reddy Anna, Mahadev Book, 1xBet, JeetWin. ${SITE_NAME} only issues IDs on platforms with a track record of clean payouts.` },
      { h: "2. Get IDs through WhatsApp, not random Telegram groups" },
      { p: "Verified providers work over WhatsApp with a real support agent. Random Telegram \"tipster\" groups selling IDs are the single biggest source of scams." },
      { h: "3. Never share your UPI PIN or OTP" },
      { p: "No real support agent will ever ask for your UPI PIN or bank OTP. Deposits happen from your side; withdrawals arrive from the platform's side. Nobody needs your PIN." },
      { h: "4. Keep a spending diary" },
      { p: "Track every deposit and withdrawal for one month. Most players are shocked how quickly small stakes add up. Awareness is 80% of control." },
      { h: "5. Set a hard weekly cap" },
      { p: "Not \"a budget I try to stick to\" — a hard cap. When it's hit, you're done for the week regardless of how the match is going." },
      { h: "6. Withdraw regularly" },
      { p: "Don't let a big win sit in the platform wallet. Withdraw at least 50% of any significant win to your bank the same day. Money in your bank feels different from money on the screen." },
      { h: "7. Take mandatory breaks" },
      { p: "One day off every week, minimum. One full week off every month. This keeps the activity a hobby instead of a compulsion." },
      { h: "8. Recognise the warning signs" },
      { list: [
        "Chasing losses with bigger stakes",
        "Betting to escape stress or boredom",
        "Hiding activity from family",
        "Borrowing money to bet",
      ] },
      { p: "Any one of these is a signal to stop and talk to someone. Responsible-gaming helplines exist in India — please use them." },
      { h: "9. Know the law" },
      { p: "Real-money gaming laws vary by Indian state. Andhra Pradesh, Telangana, Tamil Nadu and a few others restrict certain formats. Check your local law and play only where permitted." },
    ],
  },
];

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: `Blog — Cricket Betting Guides & Strategy | ${SITE_NAME}` },
      { name: "description", content: `Long-form guides on cricket betting, IPL strategy, platform comparisons and safe online play — from the ${SITE_NAME} team.` },
      { property: "og:title", content: `${SITE_NAME} Blog` },
      { property: "og:description", content: "Practical, honest guides for online cricket ID users in India." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

function Blog() {
  return (
    <section className="container-page py-20">
      <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-6">
        <Link to="/" className="hover:text-foreground">Home</Link> <span className="mx-1">/</span> Blog
      </nav>
      <div className="max-w-2xl">
        <p className="text-primary text-sm font-semibold uppercase tracking-wider">Blog</p>
        <h1 className="mt-2 text-4xl md:text-5xl">Guides, strategy & safe-play playbooks.</h1>
        <p className="mt-5 text-lg text-muted-foreground">Long-form pieces written by our team — the same people who answer your WhatsApp messages. Honest, no fluff.</p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {POSTS.map((post) => (
          <article key={post.slug} className="card-surface p-6 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</time>
              <span>·</span>
              <span>{post.readMin} min read</span>
            </div>
            <h2 className="mt-3 text-xl font-semibold">
              <Link to="/blog/$slug" params={{ slug: post.slug }} className="hover:text-primary transition-colors">{post.title}</Link>
            </h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
            <Link to="/blog/$slug" params={{ slug: post.slug }} className="mt-4 inline-block text-sm text-primary font-medium hover:underline">Read article →</Link>
          </article>
        ))}
      </div>
      <div className="mt-12">
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Get your cricket ID on WhatsApp</a>
      </div>
    </section>
  );
}
