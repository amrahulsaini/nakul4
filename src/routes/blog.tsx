import { createFileRoute, Link } from "@tanstack/react-router";
import { WHATSAPP_URL, SITE_NAME } from "@/lib/site";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readMin: number;
  category: string;
  keywords: string;
  content: { h?: string; p?: string; list?: string[] }[];
};

export const POSTS: Post[] = [
  {
    slug: "how-to-get-online-cricket-id-in-india",
    title: "How to Get an Online Cricket ID in India (2026 Complete Guide)",
    excerpt: "A complete, step-by-step 2026 walkthrough for choosing the right platform, activating your cricket ID on WhatsApp, funding via UPI, placing your first market and withdrawing winnings safely.",
    date: "2026-06-10",
    readMin: 12,
    category: "Guides",
    keywords: "online cricket id, how to get cricket id, cricket betting id india, whatsapp cricket id, ipl id",
    content: [
      { p: `An online cricket ID is a verified account on a cricket exchange, sportsbook or Indian book that lets you place markets on live and upcoming matches. In India, the fastest route to one is through a trusted provider like ${SITE_NAME} — you skip the long registration forms, KYC uploads and dodgy Telegram groups, and get a ready-to-play ID delivered on WhatsApp in under two minutes.` },
      { p: `This guide covers everything a first-time player needs: choosing the right platform for your play style, activating the ID, depositing via UPI, understanding the main markets, and withdrawing your winnings without friction. It's the same walkthrough our WhatsApp managers use with new signups every day.` },

      { h: "What exactly is an online cricket ID?" },
      { p: `A cricket ID is your login on a cricket-focused betting platform. It typically comes with a wallet, access to match markets (odds, fancy sessions, player props), and — depending on the platform — live-casino tables, virtual sports and other sports like football, tennis and kabaddi. Each platform issues its own IDs; ${SITE_NAME} acts as an authorised concierge that provisions verified accounts for Indian players.` },

      { h: "Step 1 — Choose the right platform" },
      { p: `Different platforms suit different players. Cricket exchanges like FairPlay, Diamond Exchange and Sky Exchange offer back-lay markets with tight spreads — best if you like to trade in-play. Sportsbooks like 1xBet cover cricket alongside 40+ other sports with fixed odds. Books like Reddy Anna and Mahadev Book are popular for their settled Indian user base, quick session settlements and Hindi-first support. All-in-one platforms like Lotus 365, JeetWin and 11xPlay bundle sportsbook plus live casino under one wallet — ideal if you want variety.` },
      { list: [
        "Pure exchange trading → FairPlay, Diamond Exchange, Sky Exchange, KingExch",
        "Cricket-first with promos → 7Cric, Reddy Anna, Mahadev Book",
        "Cricket + live casino under one wallet → Lotus 365, JeetWin, 11xPlay",
        "Widest sportsbook coverage → 1xBet, Khelo24",
      ] },

      { h: "Step 2 — Message on WhatsApp" },
      { p: `Send a hi to the ${SITE_NAME} team, mention which platform you want, and our manager confirms your desired username, deposit amount and preferred payment method. Credentials are shared inside the same chat, so nothing gets lost in email spam folders. No PDFs, no forms, no waiting for a call-back.` },

      { h: "Step 3 — Deposit securely" },
      { p: `Deposits move through standard Indian rails — UPI (GPay, PhonePe, Paytm), IMPS, NEFT, bank transfer, and crypto for larger balances. UPI is instant; bank transfers usually clear within 5–10 minutes. Your manager shares a verified account or UPI ID for that day (details rotate for security) and confirms the credit the moment it lands.` },
      { p: `A safety note that applies to every provider: nobody legitimate will ever ask for your UPI PIN, bank OTP or card CVV. Deposits happen from your side; withdrawals arrive from the platform's side.` },

      { h: "Step 4 — Place your first market" },
      { p: `Start small — one or two percent of your bankroll per market is a sensible rule for the first two weeks. Match odds (which team wins) are the simplest market and have the most liquidity. Fancy markets (session runs in the first six overs, over totals, batsman runs, method of dismissal) reward players who study form and pitch conditions. Never chase losses — set a session cap before you begin and honour it.` },

      { h: "Step 5 — Withdraw winnings" },
      { p: `Withdrawals happen on the same WhatsApp thread. Send your manager the amount and your registered UPI or bank account, and approved withdrawals credit back within 15 minutes on standard payouts. Larger amounts (₹1 lakh+) may take up to two hours on match nights for verification. Payouts settle to the same bank account you deposited from — this is a compliance requirement across every serious platform.` },

      { h: "Bonuses on your first deposit" },
      { p: `Every new ${SITE_NAME} player receives a 5% joining bonus credited to the wallet on the first deposit, plus a 2% refill bonus on every top-up after that. Unlike bonuses on many international platforms, this is real, playable balance — there are no hidden wagering multipliers to unlock it.` },

      { h: "Common pitfalls to avoid" },
      { list: [
        "Buying IDs from random Telegram tipster groups — the #1 source of scams in India.",
        "Sharing your UPI PIN or OTP with anyone claiming to be support.",
        "Chasing losses by doubling stakes after a bad session.",
        "Ignoring platform limits and depositing beyond your monthly budget.",
        "Leaving big wins in the platform wallet instead of withdrawing to your bank.",
      ] },

      { h: "Frequently asked" },
      { list: [
        "Is a cricket ID legal in India? Real-money gaming laws vary by state — always check your local law before playing. Andhra Pradesh, Telangana, Tamil Nadu and a few others restrict certain formats.",
        "What's the minimum deposit? Most platforms start at ₹500. Premium exchanges begin at ₹1,000. Ask your manager for the exact number on your chosen platform.",
        "Can I get bonuses? Yes — 5% joining bonus on the first deposit and a 2% refill bonus on every top-up.",
        "How long does activation actually take? Median activation on WhatsApp is under two minutes end-to-end.",
        "Is my identity safe? Chats are end-to-end encrypted. We never share your number or transactions with any third party.",
      ] },
    ],
  },
  {
    slug: "diamond-exchange-vs-sky-exchange",
    title: "Diamond Exchange vs Sky Exchange: Which Cricket ID Is Right For You?",
    excerpt: "Both are among India's most popular cricket exchanges — but they differ in limits, market depth, fancy pricing and casino coverage. Here's an honest, head-to-head comparison for 2026.",
    date: "2026-06-18",
    readMin: 10,
    category: "Comparisons",
    keywords: "diamond exchange vs sky exchange, cricket exchange comparison, diamond exchange id, sky exchange id",
    content: [
      { p: `Diamond Exchange and Sky Exchange are two of the most searched cricket exchange brands in India. Both offer back-lay markets, fancy sessions and live casino — but there are meaningful differences that matter based on your play style, bankroll and how you like to trade in-play. This head-to-head compares them across the seven dimensions that actually change your P&L.` },

      { h: "1. Market depth & liquidity" },
      { p: `Sky Exchange typically carries slightly deeper liquidity on Indian domestic markets like Ranji Trophy, Vijay Hazare and Syed Mushtaq Ali. If you trade the domestic circuit, you'll find tighter spreads and less slippage on Sky. Diamond Exchange tends to price IPL and international T20 fancies more aggressively — the middle of the market is where its pricing shines, which suits players who like to green up positions in-play.` },

      { h: "2. Limits & bankroll fit" },
      { p: `Diamond Exchange caters to higher-limit players out of the box, with generous match-odds and bookmaker caps that don't tighten during peak IPL traffic. Sky Exchange starts more conservatively — new accounts see modest limits that open up as your history grows. If you're just starting out with a ₹5k–₹20k bankroll, both work fine. If you're playing at ₹1 lakh+ per match, Diamond gives you room to size up without splitting bets across accounts.` },

      { h: "3. Fancy market pricing" },
      { p: `Fancy sessions — 6-over runs, 20-over totals, batsman scores, wickets in a session, method of dismissal — are where informed players make their edge. Diamond Exchange consistently prices IPL fancies more competitively (tighter over-under spreads on the 6-over powerplay total). Sky Exchange runs sharper fancies on domestic cricket and second-tier international bilaterals.` },

      { h: "4. Live casino & other games" },
      { p: `Sky Exchange offers a broader mix of Evolution and Ezugi live-dealer tables (roulette, blackjack, baccarat, Deal or No Deal, Crazy Time). Diamond Exchange focuses more heavily on Andar Bahar, Teen Patti and Indian-dealer roulette, which suits players who prefer familiar card games in Hindi.` },

      { h: "5. Deposit & withdrawal experience" },
      { p: `Through ${SITE_NAME}, both platforms clear UPI deposits instantly. Withdrawals on both average 15–20 minutes on standard amounts, though very large payouts (₹5 lakh+) can take an hour on match nights while compliance reviews clear.` },

      { h: "6. App & interface" },
      { p: `Sky Exchange has a cleaner mobile web experience — nested markets are easier to navigate mid-innings. Diamond Exchange's interface is denser but exposes more markets on one screen, which power users prefer. Neither is perfect; both handle the essentials well.` },

      { h: "7. Match-night stability" },
      { p: `IPL final nights and India-Pakistan games are the real stress test. Diamond Exchange has historically stayed responsive under peak load. Sky Exchange has had occasional slowdowns during the last ball of a tight chase — usually resolved within a minute, but enough to miss a cash-out window.` },

      { h: "Which should you pick?" },
      { p: `Casual IPL players and in-play traders on international T20: Diamond Exchange for sharper fancy pricing and higher limits. Volume players focused on domestic cricket and Ranji: Sky Exchange for deeper books and better liquidity. If you're unsure, message us on WhatsApp — a manager can set up a small starter account on both, and you'll know within a week which fits your rhythm. There's no extra fee from ${SITE_NAME} for holding IDs on multiple platforms.` },

      { h: "Quick verdict table" },
      { list: [
        "Best for high limits → Diamond Exchange",
        "Best for domestic cricket → Sky Exchange",
        "Best for IPL fancy pricing → Diamond Exchange",
        "Best for live casino variety → Sky Exchange",
        "Best for beginners → Sky Exchange (lower entry, cleaner UI)",
        "Best for professional traders → Diamond Exchange",
      ] },
    ],
  },
  {
    slug: "ipl-betting-strategy-beginners",
    title: "IPL Betting Strategy for Beginners: 7 Rules That Actually Work",
    excerpt: "The mistakes new players make in IPL season — and the seven habits that separate long-term profitable players from the crowd. Bankroll, pitch reads, toss, fancy markets, cash-out and more.",
    date: "2026-07-02",
    readMin: 11,
    category: "Strategy",
    keywords: "ipl betting strategy, ipl cricket betting tips, ipl bankroll management, fancy betting ipl, cricket exchange strategy",
    content: [
      { p: `IPL is the busiest cricket-betting window of the year in India. It's also when new players lose the most money. Almost every big loss comes down to the same handful of avoidable mistakes. Here are the seven rules our most consistent players follow — nothing exotic, just the habits that compound over 60+ matches.` },

      { h: "1. Set a season bankroll first — and split it into units" },
      { p: `Decide the total you're willing to spend across the entire tournament before the first ball is bowled. Divide it into per-match units — usually 1–2% of the bankroll per market. So a ₹50,000 season bankroll means ₹500–₹1,000 per market, not ₹5,000. This one habit eliminates the biggest cause of blow-ups: over-sizing after a couple of quick wins.` },

      { h: "2. Never chase losses" },
      { p: `The urge to double up after a losing session is the single most expensive habit in cricket betting. Losses are baked into the game — even sharp traders lose 40% of their positions over a season. Chasing turns a normal downswing into a bankroll wipe. If you lose your daily unit cap, close the app for the night.` },

      { h: "3. Read the pitch report" },
      { p: `Wankhede, Chinnaswamy and Eden Gardens are batting-friendly with short square boundaries — over-totals are typically 175+. Chepauk and Ekana favour spinners; totals are usually 155–170. Pitch character predicts totals better than team form does. Check the toss coverage on the broadcast for the curator's read and adjust your session-runs positions accordingly.` },

      { h: "4. Toss matters more than you think" },
      { p: `In day-night IPL games at dew venues (Chennai, Bangalore, Hyderabad after 6pm), the team chasing wins roughly 60% of the time. Wait for the toss before committing on match odds if you're uncertain. If the team you like loses the toss and is put in on a dew ground, the pricing shift on the exchange is often too favourable to ignore.` },

      { h: "5. Fancy markets reward specialists" },
      { p: `Over-under markets on powerplay runs, batsman totals and wickets in a session are where informed players make their edge. But they punish tourists — casually backing a batter's over-total without studying his last 10 innings is a fast way to lose. Pick 2–3 fancy markets per match you actually have a read on, and sit out the rest.` },

      { h: "6. Cash out is a tool, not a habit" },
      { p: `Use cash-out to protect against genuine collapse risk (rain, injury to the set batter, a sudden collapse in a chase). Don't use it to lock in tiny profits from every green position — the accumulated cost of taking small cash-outs eats your season edge. Rule of thumb: only cash-out when the situation has changed since you placed the bet.` },

      { h: "7. Take breaks — every week, every month" },
      { p: `The 60-match IPL is a marathon, not a sprint. Skip a game if you're tilted from a bad session. Skip a week if your read on the season is off. The best players treat rest as a strategic tool, not a weakness.` },

      { h: "Bonus: track everything" },
      { p: `Keep a simple spreadsheet — match, market, stake, odds, result. Two weeks of honest data will teach you more about your edge (and your leaks) than any tipster group ever will.` },

      { p: `Ready to start? Get your IPL-ready ID on WhatsApp — the ${SITE_NAME} team activates you in under two minutes with the 5% joining bonus applied automatically.` },
    ],
  },
  {
    slug: "safe-online-betting-india",
    title: "How to Bet Safely Online in India: A Practical 9-Point Checklist",
    excerpt: "Nine practical safety rules — from picking a verified platform to protecting your UPI, spotting scams, setting hard limits and knowing when to stop.",
    date: "2026-07-15",
    readMin: 9,
    category: "Safety",
    keywords: "safe online betting india, responsible gaming, cricket betting safety, avoid betting scams",
    content: [
      { p: `Online cricket betting has grown fast in India — and so has the number of shady operators and social-media scams. This checklist covers the practical, non-negotiable habits that keep your money, your identity and your relationships safe.` },

      { h: "1. Only use verified platforms" },
      { p: `Stick to established names — FairPlay, Diamond Exchange, Sky Exchange, Lotus 365, Reddy Anna, Mahadev Book, 1xBet, JeetWin, KingExch, 7Cric, 11xPlay, Khelo24. ${SITE_NAME} only issues IDs on platforms with a documented track record of clean payouts and dispute resolution.` },

      { h: "2. Get IDs through WhatsApp with a real provider" },
      { p: `Verified providers work over WhatsApp with a real named support agent. Random Telegram "tipster" groups selling IDs are the single biggest source of scams in Indian betting today. If someone in a public group DMs you offering an ID plus tips plus a bonus, walk away.` },

      { h: "3. Never share your UPI PIN, OTP or card CVV" },
      { p: `No real support agent will ever ask for your UPI PIN or bank OTP. Deposits happen from your side; withdrawals arrive from the platform's side. Nobody needs your PIN. This one rule alone would stop 90% of Indian betting-related fraud cases.` },

      { h: "4. Keep a spending diary for one month" },
      { p: `Track every deposit and withdrawal for 30 days. Most players are shocked at how quickly small stakes add up. Awareness is 80% of control — the exercise itself changes behaviour.` },

      { h: "5. Set a hard weekly cap — and honour it" },
      { p: `Not "a budget I try to stick to" — a hard cap. When it's hit, you're done for the week regardless of how the match is going. Ask ${SITE_NAME} to lock a deposit limit if you'd like the platform itself to enforce it.` },

      { h: "6. Withdraw big wins the same day" },
      { p: `Don't let a significant win sit in the platform wallet. Withdraw at least 50% of any large win to your bank the same day. Money in your bank account genuinely feels different from money on the screen — and it removes the temptation to give it back.` },

      { h: "7. Take mandatory breaks" },
      { p: `One day off every week, minimum. One full week off every month. This keeps the activity a hobby instead of a compulsion. It also improves your reads — the best trades come after rest, not after fatigue.` },

      { h: "8. Recognise the warning signs" },
      { list: [
        "Chasing losses with bigger stakes",
        "Betting to escape stress, boredom or a bad day",
        "Hiding activity from family or partners",
        "Borrowing money to bet, or using credit for stakes",
        "Feeling you 'need' a bet on every match",
      ] },
      { p: `Any one of these is a signal to stop and talk to someone. Responsible-gaming helplines exist in India (icc.responsiblegambling and state-level helplines) — please use them, and message us if you want your account paused or self-excluded.` },

      { h: "9. Know the law in your state" },
      { p: `Real-money gaming laws vary by Indian state. Andhra Pradesh, Telangana, Tamil Nadu and a few others restrict certain formats. Karnataka has active legislation under review. Check your local law and play only where permitted. ${SITE_NAME} services are strictly for adults 18+ and only available where local law allows.` },
    ],
  },
  {
    slug: "cricket-exchange-vs-sportsbook",
    title: "Cricket Exchange vs Sportsbook: Which One Should You Use?",
    excerpt: "Exchanges price liquidity, sportsbooks price odds. The difference matters — for margins, in-play trading, cash-out, and how much of your bankroll actually earns.",
    date: "2026-08-04",
    readMin: 8,
    category: "Comparisons",
    keywords: "cricket exchange vs sportsbook, betting exchange india, back lay betting, fixed odds cricket",
    content: [
      { p: `New Indian players often use "cricket exchange" and "sportsbook" interchangeably. They are not the same product. Understanding the difference is worth 1–3% of your bankroll every month — real money over an IPL season.` },

      { h: "How a sportsbook works" },
      { p: `A sportsbook is the traditional model. The book sets odds, you bet against the book. If you win, the book pays; if you lose, the book keeps your stake. The bookmaker builds in a margin (called the overround or vig) — typically 3–7% on cricket match odds.` },

      { h: "How an exchange works" },
      { p: `An exchange is a marketplace. Players back (bet for) and lay (bet against) outcomes at odds they negotiate with each other. The exchange takes a small commission (usually 2–5%) on net winnings only. There's no built-in overround — you can find zero-margin markets during peak liquidity.` },

      { h: "When to use a sportsbook" },
      { list: [
        "You want simple fixed-odds betting without thinking about liquidity",
        "You prefer accumulator/parlay bets across sports",
        "You value promotional boosts and free-bet offers",
        "You're a casual player who bets once per match",
      ] },

      { h: "When to use an exchange" },
      { list: [
        "You want the tightest possible pricing on match odds",
        "You trade in-play — back a team pre-match, lay it in-play to lock profit",
        "You want to bet against a team winning (impossible on a book)",
        "You play consistent volume and the margin savings compound",
      ] },

      { h: "The hybrid approach most winners use" },
      { p: `The most consistent Indian cricket players hold both — a sportsbook (Lotus 365, 1xBet, JeetWin) for accumulators, casino and match-day promos, plus an exchange (FairPlay, Diamond, Sky) for the core match-odds and fancy trading. ${SITE_NAME} can set up both on the same WhatsApp thread — no repeat KYC, no duplicate hassle.` },
    ],
  },
];

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: `Cricket Betting Blog — Guides, Strategy & Platform Reviews | ${SITE_NAME}` },
      { name: "description", content: `Long-form cricket betting guides, IPL strategy, exchange vs sportsbook comparisons, safe-play checklists and platform reviews — from the ${SITE_NAME} team of full-time Indian cricket traders.` },
      { name: "keywords", content: "cricket betting blog, ipl strategy, cricket id guide, exchange vs sportsbook, safe cricket betting" },
      { property: "og:title", content: `${SITE_NAME} Blog — Cricket Betting Guides & Strategy` },
      { property: "og:description", content: "Practical, honest long-form guides for online cricket ID users in India." },
      { property: "og:url", content: "/blog" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Blog",
        name: `${SITE_NAME} Blog`,
        blogPost: POSTS.map((p) => ({
          "@type": "BlogPosting",
          headline: p.title,
          description: p.excerpt,
          datePublished: p.date,
          url: `/blog/${p.slug}`,
        })),
      }),
    }],
  }),
  component: Blog,
});

function Blog() {
  const [featured, ...rest] = POSTS;
  return (
    <>
      <section className="container-page pt-16 md:pt-20 pb-8">
        <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground">Home</Link> <span className="mx-1">/</span> Blog
        </nav>
        <div className="max-w-2xl">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider">Blog</p>
          <h1 className="mt-2 text-4xl sm:text-5xl md:text-6xl leading-[1.05]">Guides, strategy & safe-play playbooks.</h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">Long-form pieces written by our team — the same people who answer your WhatsApp messages every match day. Honest, no fluff, no tipster nonsense.</p>
        </div>
      </section>

      <section className="container-page">
        <Link to="/blog/$slug" params={{ slug: featured.slug }} className="card-surface block p-6 md:p-10 hover:border-primary/60 group">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full bg-primary/20 border border-primary/40 px-2.5 py-1 text-primary font-semibold uppercase tracking-wider">Featured</span>
                <span className="rounded-full bg-secondary/60 border border-border/60 px-2.5 py-1 text-muted-foreground">{featured.category}</span>
                <time dateTime={featured.date} className="text-muted-foreground">{new Date(featured.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</time>
                <span className="text-muted-foreground">· {featured.readMin} min read</span>
              </div>
              <h2 className="mt-4 text-2xl md:text-3xl group-hover:text-primary transition-colors">{featured.title}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{featured.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">Read the guide →</span>
            </div>
          </div>
        </Link>
      </section>

      <section className="container-page mt-12">
        <h2 className="text-xl md:text-2xl font-semibold">Latest articles</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <article key={post.slug} className="card-surface p-6 flex flex-col hover:border-primary/50">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full bg-secondary/60 border border-border/60 px-2 py-0.5 text-muted-foreground">{post.category}</span>
                <time dateTime={post.date} className="text-muted-foreground">{new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</time>
                <span className="text-muted-foreground">· {post.readMin} min</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold">
                <Link to="/blog/$slug" params={{ slug: post.slug }} className="hover:text-primary transition-colors">{post.title}</Link>
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{post.excerpt}</p>
              <Link to="/blog/$slug" params={{ slug: post.slug }} className="mt-4 inline-block text-sm text-primary font-medium hover:underline">Read article →</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="container-page mt-16 mb-20">
        <div className="card-surface p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl">Get your cricket ID on WhatsApp</h2>
            <p className="mt-2 text-muted-foreground max-w-xl">30+ verified platforms. 5% joining bonus, 2% refill bonus, 24×7 support. Live in under two minutes.</p>
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary w-full md:w-auto">Chat with a manager</a>
        </div>
      </section>
    </>
  );
}
