import { SITE_NAME } from "./site";

export type KeywordTopic = {
  slug: string;
  keyword: string;
  h1: string;
  title: string;
  description: string;
  intro: string;
  sections: { h: string; p: string }[];
  faqs: { q: string; a: string }[];
  related: string[]; // slugs
};

const s = SITE_NAME;

export const TOPICS: KeywordTopic[] = [
  {
    slug: "online-cricket-id",
    keyword: "online cricket id",
    h1: "Online Cricket ID — get yours in 2 minutes",
    title: `Online Cricket ID in India — Instant WhatsApp Activation | ${s}`,
    description: `Get an online cricket ID in India within 2 minutes. Verified platforms, instant UPI deposits, 5% joining bonus and 24×7 WhatsApp support from ${s}.`,
    intro: `An online cricket ID is your login to a licensed cricket exchange or book where you can place real-money markets on IPL, T20I, ODI, Test and domestic cricket. ${s} pairs Indian players with vetted platforms and delivers credentials over WhatsApp in under two minutes.`,
    sections: [
      { h: "Why players choose an online cricket ID", p: "A dedicated cricket ID unlocks sharper odds, deeper fancy markets, live in-play cash-out, and 24×7 access to global cricket — not just IPL. You also get a personal manager who handles deposits, payouts and platform switches for you." },
      { h: "How activation works on WhatsApp", p: "Send us a message, share your name and preferred platform, complete a one-tap UPI deposit, and receive your login on the same chat. No forms, no OTP juggling. The whole flow closes in the same conversation, and your ID is portable across matches and seasons." },
      { h: "Deposits, withdrawals and bonuses", p: "Every ID accepts Paytm, GPay, PhonePe, UPI, IMPS, NEFT and bank transfer. First deposit unlocks a 5% joining bonus and every top-up carries a 2% refill bonus. Withdrawals settle to your registered UPI in 15–30 minutes." },
      { h: "Which cricket ID suits you?", p: "Exchange IDs like FairPlay, Diamond and Sky Exchange give true back-and-lay pricing. Sportsbook IDs like 1xBet and Lotus 365 bundle cricket with football, tennis and casino. Books like Reddy Anna and Mahadev focus on Indian cricket and kabaddi." },
    ],
    faqs: [
      { q: "Is an online cricket ID legal in India?", a: `Skill-based fantasy is regulated in most Indian states. For real-money markets, ${s} only works with platforms licensed offshore that accept Indian players. Local laws vary by state — check your jurisdiction before playing.` },
      { q: "How much do I need to start?", a: "Most cricket IDs open with a ₹500 first deposit. Higher-limit exchange IDs (Diamond, high-roller books) start at ₹1,000 or ₹2,000." },
      { q: "Can one WhatsApp cover multiple IDs?", a: "Yes. Players commonly hold 2–3 IDs — one exchange for back-and-lay, one sportsbook for accumulators, one casino wallet. All managed from a single chat." },
    ],
    related: ["ipl-betting-id", "whatsapp-cricket-id", "cricket-exchange-id", "online-betting-id"],
  },
  {
    slug: "ipl-betting-id",
    keyword: "ipl betting id",
    h1: "IPL Betting ID — every match, every market",
    title: `IPL Betting ID — Live Odds, Fancy Markets & Cash-out | ${s}`,
    description: `Open an IPL betting ID with ${s}. Live in-play odds, over/under, fancy sessions and player props on every IPL match — activated on WhatsApp in minutes.`,
    intro: `Indian Premier League is the busiest cricket window of the year. An IPL betting ID gives you live odds on every ball, fancy session markets, player props and IPL-only bonuses across ${s}'s partner platforms.`,
    sections: [
      { h: "Markets you'll trade during IPL", p: "Match odds, innings runs, over-by-over totals, fall of the next wicket, top batsman, top bowler, powerplay boundaries, six-count and fancy session lines refreshed every three balls." },
      { h: "Live in-play cash-out", p: "Every partner exchange lets you cash out mid-innings. Lock in green books when your team pulls ahead in the powerplay, or trim red positions if the match tightens in the death overs." },
      { h: "IPL bonus calendar", p: "Extra loyalty rewards drop during Qualifiers, Eliminator and Final week. Combine the standing 5% joining and 2% refill bonuses with IPL-only cashback on losing accumulators." },
    ],
    faqs: [
      { q: "Can I open an IPL ID mid-season?", a: "Yes. Message any time — even five minutes before toss — and your credentials arrive before the first ball." },
      { q: "Which platform is best for IPL fancy markets?", a: "Diamond Exchange and Sky Exchange run the sharpest fancy books during IPL, with the deepest session liquidity." },
    ],
    related: ["online-cricket-id", "fancy-market-id", "cricket-exchange-id", "whatsapp-cricket-id"],
  },
  {
    slug: "cricket-exchange-id",
    keyword: "cricket exchange id",
    h1: "Cricket Exchange ID — trade back & lay in real time",
    title: `Cricket Exchange ID — Back, Lay & Trade Live | ${s}`,
    description: `Cricket exchange IDs from ${s} — trade back-and-lay markets on FairPlay, Diamond, Sky Exchange with deep liquidity and instant WhatsApp activation.`,
    intro: `A cricket exchange is a peer-to-peer market where you can back (bet a team to win) or lay (bet a team to lose). ${s} activates exchange IDs on India's most trusted brands so you can trade every session live.`,
    sections: [
      { h: "Back vs lay explained", p: "Back is a traditional bet — you win if the outcome happens. Lay is the opposite — you become the bookmaker for that runner. Exchange pricing is typically 3–8% sharper than a sportsbook because you're trading against other players, not against a house margin." },
      { h: "Session markets & liquidity", p: "Session lines (6-over, 10-over, innings totals) get the deepest liquidity on Diamond and Sky Exchange. Fancy markets refresh every three balls with two-way pricing so you can enter and exit within the same over." },
      { h: "Commission and limits", p: "Standard exchange commission is 2–5% on net winnings per market. Match limits scale from ₹5,000 for small domestic games up to ₹25,00,000 for IPL Final." },
    ],
    faqs: [
      { q: "Do I need an exchange ID and a sportsbook ID?", a: "Not necessarily, but most serious players keep both — exchange for live trading, sportsbook for accumulators and futures." },
      { q: "What if I lay a runner and it wins?", a: "You pay the lay liability, which is displayed before you place the bet. Exchange interfaces show your worst-case book on every market." },
    ],
    related: ["online-cricket-id", "ipl-betting-id", "fancy-market-id", "online-betting-id"],
  },
  {
    slug: "whatsapp-cricket-id",
    keyword: "whatsapp cricket id",
    h1: "WhatsApp Cricket ID — chat, deposit, play",
    title: `WhatsApp Cricket ID — Instant Activation & 24×7 Support | ${s}`,
    description: `Get a WhatsApp cricket ID from ${s}. One chat handles activation, UPI deposit, withdrawals and match-day support — 24×7, real humans.`,
    intro: `A WhatsApp cricket ID is the fastest way to play in India. Instead of forms, OTPs and email chains, ${s} runs the entire flow — activation, deposit, payout, disputes — inside a single WhatsApp chat.`,
    sections: [
      { h: "One chat, full service", p: "Your personal manager tracks your platform, wallet, bonus schedule and pending payouts. Anything you need — a new market, a platform switch, a limit change — happens inside the same thread." },
      { h: "Deposit and withdrawal on the same chat", p: "Send UPI, receive credentials. Request a withdrawal, receive the transaction ID. Every step is on record and auditable in your chat history." },
      { h: "24×7 human support", p: "No bots. A real human replies within seconds regardless of the hour — including during IPL Final overtime, ICC finals and midnight ODI series." },
    ],
    faqs: [
      { q: "Do you store my WhatsApp chat?", a: "Only for the duration of active support. Financial receipts are retained for audit; personal messages are not archived." },
      { q: "Can I switch managers?", a: "Yes — request a new manager any time. Your ID and balance stay untouched." },
    ],
    related: ["online-cricket-id", "ipl-betting-id", "instant-cricket-id", "online-betting-id"],
  },
  {
    slug: "online-betting-id",
    keyword: "online betting id",
    h1: "Online Betting ID — cricket, football, tennis, casino",
    title: `Online Betting ID India — Sports & Casino in One Wallet | ${s}`,
    description: `Open an online betting ID with ${s} for cricket, football, tennis, kabaddi, horse racing and live casino — one WhatsApp, one wallet, instant activation.`,
    intro: `An online betting ID gives you a single wallet across cricket, football, tennis, kabaddi, horse racing and live casino. ${s} activates all-in-one IDs on Lotus 365, 1xBet and other multi-sport brands.`,
    sections: [
      { h: "Sports covered", p: "Cricket (international + domestic), football (top 5 leagues + UCL + ISL), tennis (all 4 Slams + ATP/WTA), kabaddi (Pro Kabaddi League), horse racing, basketball and esports." },
      { h: "One wallet across products", p: "Move funds instantly between sportsbook, exchange and casino inside the same platform. No re-deposit, no re-KYC when you switch products." },
      { h: "Weekly cashback", p: "All-in-one IDs run cashback on net losses across products — typically 5% weekly on sportsbook losses and 10% on casino losses." },
    ],
    faqs: [
      { q: "Is one ID enough?", a: "For most casual players, yes. Serious cricket traders usually pair it with a dedicated exchange ID." },
      { q: "Can I play casino from the same wallet?", a: "Yes. All-in-one platforms share balance between sports, exchange and casino." },
    ],
    related: ["online-cricket-id", "live-casino-id", "teen-patti-id", "cricket-exchange-id"],
  },
  {
    slug: "live-casino-id",
    keyword: "live casino id",
    h1: "Live Casino ID — real dealers, real time",
    title: `Live Casino ID — Roulette, Blackjack, Baccarat in HD | ${s}`,
    description: `Live casino IDs from ${s} — Evolution, Ezugi and Pragmatic Live tables in HD. Roulette, blackjack, baccarat, Indian Teen Patti and Andar Bahar.`,
    intro: `A live casino ID unlocks HD live-streamed rooms from Evolution, Ezugi and Pragmatic Play Live. Every ${s} partner runs the full studio shelf — from European Roulette to Hindi-speaking Teen Patti tables.`,
    sections: [
      { h: "Table portfolio", p: "40+ roulette tables (European, Lightning, Immersive, Auto), 30+ blackjack rooms (Classic, Infinite, Speed, Party), baccarat (Speed, Squeeze, No Commission), plus game-show titles like Crazy Time, Monopoly Live and Funky Time." },
      { h: "Indian games with Hindi dealers", p: "Teen Patti, Andar Bahar, Casino Hold'em and Sic Bo streamed 24×7 with Hindi-speaking dealers and side bets on Bonus, AA+ and 6-Card Bonus." },
      { h: "Limits and RTP", p: "Roulette min ₹20, max ₹5,00,000. Blackjack house edge as low as 0.42%. Baccarat banker RTP 98.94%. Live tables audited monthly by eCOGRA." },
    ],
    faqs: [
      { q: "Can I tip the dealer?", a: "Yes. Every live table has a built-in tipping UI." },
      { q: "What internet speed do I need?", a: "5 Mbps handles HD streams smoothly. Studios auto-downgrade to SD if bandwidth drops." },
    ],
    related: ["teen-patti-id", "andar-bahar-id", "online-betting-id", "online-cricket-id"],
  },
  {
    slug: "teen-patti-id",
    keyword: "teen patti id",
    h1: "Teen Patti ID — India's favourite card game, live",
    title: `Teen Patti ID Online — Live Dealers, Side Bets | ${s}`,
    description: `Get a live Teen Patti ID with ${s}. Hindi dealers, side bets on Bonus and Pair Plus, min ₹50, max ₹2,00,000 per hand — 24×7.`,
    intro: `Teen Patti — the Indian three-card classic — is the most-played live game inside every ${s} partner. Live-streamed rooms with Hindi dealers deal a new hand every 25 seconds.`,
    sections: [
      { h: "Live Teen Patti formats", p: "Classic Teen Patti, One-Day Teen Patti, 20-20 Teen Patti and Teen Patti Rapid. Each format lets you back Player A, Player B, or a Tie with side bets on Pair Plus and 3+3 Bonus." },
      { h: "Side bets and payouts", p: "Trail (three of a kind) pays 40:1. Pure sequence pays 5:1. Sequence pays 4:1. Colour pays 2:1. Pair pays even money. Side bets on Pair Plus scale up to 100:1 for a mini royal." },
      { h: "Limits", p: "Entry from ₹50 per hand up to ₹2,00,000 on high-roller tables. Side bets from ₹10." },
    ],
    faqs: [
      { q: "Is live Teen Patti fair?", a: "Yes — dealt by a real dealer with 8-deck shoes, audited by eCOGRA and streamed with no cuts." },
      { q: "Can I count cards?", a: "The shoe reshuffles every 4 hands, so card counting has negligible edge." },
    ],
    related: ["andar-bahar-id", "live-casino-id", "online-betting-id", "online-cricket-id"],
  },
  {
    slug: "andar-bahar-id",
    keyword: "andar bahar id",
    h1: "Andar Bahar ID — quick hands, big payouts",
    title: `Andar Bahar ID Online — Live Dealer Tables 24×7 | ${s}`,
    description: `Live Andar Bahar ID from ${s}. Fast rounds every 20 seconds, side bets on card count and first-3, min ₹20, max ₹1,00,000.`,
    intro: `Andar Bahar is the fastest live table in the Indian shelf. Rounds close in 20 seconds and payouts settle instantly to your wallet on every ${s} partner platform.`,
    sections: [
      { h: "How the game plays", p: "The dealer draws a middle card, then deals alternately to Andar and Bahar until a card of the same rank appears. You back which side lands the match — Andar pays 0.9:1, Bahar pays 1:1." },
      { h: "Side bets", p: "First-3, exact-card-count, colour of matching card and lucky-number side bets. Top payout on 'match on first card' is 12:1." },
      { h: "Limits and RTP", p: "Min ₹20, max ₹1,00,000. Standard side RTP 97.85%. Streamed 24×7 from Ezugi and Evolution studios." },
    ],
    faqs: [
      { q: "Andar or Bahar — is one better?", a: "Bahar wins slightly more often statistically; Andar pays lower to balance. Long-term EV is nearly identical." },
      { q: "How fast are payouts credited?", a: "Instantly, into your live wallet. Withdrawal to UPI takes 15–30 min." },
    ],
    related: ["teen-patti-id", "live-casino-id", "online-betting-id", "instant-cricket-id"],
  },
  {
    slug: "fancy-market-id",
    keyword: "fancy market id",
    h1: "Fancy Market ID — session lines refreshed every 3 balls",
    title: `Fancy Market Cricket ID — Session Lines & Over Totals | ${s}`,
    description: `Fancy market cricket IDs from ${s} on Diamond, Sky Exchange and FairPlay. 6-over, 10-over, innings totals and fall-of-wicket lines refreshed every three balls.`,
    intro: `Fancy markets are the sharpest short-form product in cricket trading. ${s} activates fancy-market IDs on exchanges with the deepest session liquidity — updated in real time by traders, not algorithms.`,
    sections: [
      { h: "Which fancy lines you'll see", p: "6-over powerplay totals, 10-over run bands, innings totals, fall of next wicket, batsman runs, bowler wickets, boundary count, six count and next-over runs." },
      { h: "Why exchanges price them best", p: "Fancy is priced by other traders sitting on the market — no house margin. Prices refresh every three balls, so you can trade in and out within the same over." },
      { h: "Risk controls", p: "Every fancy market shows worst-case book before you confirm. Session limits scale from ₹5,000 on domestic to ₹5,00,000 on IPL play-offs." },
    ],
    faqs: [
      { q: "How is fancy different from match odds?", a: "Match odds settle at end of match. Fancy settles at the end of each session (over count) and moves faster." },
      { q: "Are fancy markets available on all matches?", a: "Every IPL, international T20I/ODI/Test and most SMAT/Vijay Hazare games. Some smaller domestic fixtures skip fancy." },
    ],
    related: ["cricket-exchange-id", "ipl-betting-id", "online-cricket-id", "whatsapp-cricket-id"],
  },
  {
    slug: "instant-cricket-id",
    keyword: "instant cricket id",
    h1: "Instant Cricket ID — activated before toss",
    title: `Instant Cricket ID — Under 2 Minutes on WhatsApp | ${s}`,
    description: `Instant cricket IDs from ${s}. Message us, deposit via UPI, receive credentials on the same chat — average activation 90 seconds.`,
    intro: `${s}'s activation flow is designed for one thing — getting you on the platform before toss. Average end-to-end time from first message to first bet is 90 seconds.`,
    sections: [
      { h: "The 90-second flow", p: "0–15s: message us. 15–45s: pick a platform. 45–75s: one-tap UPI deposit. 75–90s: credentials on chat. Login and place your first market before the coin lands." },
      { h: "Pre-toss preparation", p: "Message us the morning of a big game and we'll pre-fund your wallet, pre-select markets and stand by for cash-out instructions. IPL Final players get a dedicated pre-match manager." },
      { h: "Multi-platform switching", p: "If one platform lags or a market suspends, we swap you to a backup ID inside the same chat — no re-deposit, no downtime." },
    ],
    faqs: [
      { q: "What if UPI fails during a big match?", a: "We hold IMPS and bank rails as backup — never a single point of failure on match day." },
      { q: "Can I test the flow without depositing?", a: "Yes — we walk you through a dry run before any funds move." },
    ],
    related: ["whatsapp-cricket-id", "online-cricket-id", "ipl-betting-id", "online-betting-id"],
  },
];

export const TOPIC_BY_SLUG = Object.fromEntries(TOPICS.map((t) => [t.slug, t]));
