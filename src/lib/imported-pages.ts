// Auto-curated list of legacy pages migrated into the Madras Book site.
// Each page is themed to our site and drives users to WhatsApp (+91 63775 23847).

export type ImportedPage = {
  slug: string; // may contain "/"
  title: string;
  h1: string;
  description: string;
  intro: string;
  category: "Platform" | "Exchange" | "Guide" | "Regional" | "App" | "Book";
  bullets: string[];
};

const titleCase = (s: string) =>
  s
    .replace(/[-/]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .replace(/\bId\b/g, "ID")
    .replace(/\bIpl\b/g, "IPL")
    .replace(/\bT20\b/gi, "T20")
    .replace(/\bApp\b/g, "App");

const guessCategory = (slug: string): ImportedPage["category"] => {
  if (/satta-king|kolkata|bhopal|hyderabad|patna|jaipur|noida|dehradun/i.test(slug)) return "Regional";
  if (/exchange|exch|betbhai|betbook|world777|matchbox|tigerexch|lords/i.test(slug)) return "Exchange";
  if (/app|mobile-app/i.test(slug)) return "App";
  if (/book|mahadev|reddy-anna|lotusbook/i.test(slug)) return "Book";
  if (/guide|betting-sites|problem-and-solution|explore|exploring|instant-cricket-id|cricket-id-provider|kolkata-book|finest|online-best|most-trusted|top-betting|horse-race|complete-simple/i.test(slug))
    return "Guide";
  return "Platform";
};

const bulletsFor = (name: string): string[] => [
  `Instant ${name} ID via WhatsApp — activated in under 2 minutes`,
  `5% joining bonus and 2% refill bonus on every deposit`,
  `24×7 support in English & Hindi with dedicated account manager`,
  `Secure UPI, IMPS and NEFT deposits & fastest withdrawals in India`,
];

const SLUGS = [
  "11xplay","7cric-id","999-exchange","allpaanel","allpaanel/allpanel-exchange","allpaanel/allpanelexch-admin",
  "betbhai9","betbook247","betting-exchange-id","bhopal-satta-king","big-win","cricbet99","cricbet99-betting",
  "cricket-betting-exchanges","cricket-id-problem-and-solution","cricket-id-provider-in-india","dafabet-mobile-app",
  "dehradun-satta-king","diamond-exchange-betting","diamondexch9","doexch","dreamexch-id","exchange-playing",
  "explore-the-highest-cricket-score-ever-made","exploring-online-cricket-betting-apps-in-india","fairbet",
  "finest-and-best-bet-app-in-india","go-exchange","gold-365","golden-exch","horse-race-betting-online",
  "hyderabad-satta-king","india24bet","instant-cricket-id-registration","ipl-cricket-id","jaipur-satta-king",
  "kana247","khelo24","kingexch","kolkata-book-digital-cricket-access-online-platforms-in-india","laser-247",
  "laser-247/get-laser247-id","laser-247/laser247-app-download-features",
  "laser-247/laser247-live-sports-betting-top-markets-your-ultimate-guide",
  "laser-247/laser247-payments-deposits-withdrawals-your-complete-guide",
  "laser-247/laser247-registration-login-guide","lords-exchange","lotus-365","lotus-365-app","lotus247-com",
  "lotusbook-247","mahadev-book-id","mahadev-book-id/create-mahadev-book-id","mahadev-book-id/mahadev-book-features",
  "mahadev-book-id/mahadev-book-id-comparison","mahadev-book-id/mahadev-book-id-tips",
  "mahadev-book-id/mahadev-book-login-help","mahadev-book-id/mahadev-book-referral-code",
  "mahadev-book-id/mahadev-book-support","mahadev-book-id/mahadev-id-verification",
  "mahadev-book-id/mahadev-online-id","mahadev-book-id/the-mahadev-betting-app","master-id-betting","matchbox9",
  "max66-id","most-trusted-betting-sites-in-india-for-cricket","noida-satta-king","online-best-betting-sites",
  "online-cricket-betting-sites-complete-simple-guide-2026","online-cricket-id-for-betting","online-cricket-satta-id",
  "patna-satta-king","platinum-exch","play99exch","playexch-id","radheexch","reddy-anna-online-book-id",
  "sapphireexch","silver-exchange","silver-exchange-cricket","sky-exchange","skyexch","t20-exchange",
  "t20-exchange/t20-exchange-app","t20-exchange/t20-exchange-com","t20-exchange/t20-exchange-live-online",
  "t20-exchange/t20-exchange-signup-guide","t20-exchange/t20-exchange-whatsapp-number",
  "t20-exchange/t20exchange-login","tigerexch","top-betting-sites-in-india","world777","xman-247",
];

export const IMPORTED_PAGES: ImportedPage[] = SLUGS.map((slug) => {
  const name = titleCase(slug.split("/").pop()!);
  const cat = guessCategory(slug);
  const h1 = `${name} — Get Your ID on WhatsApp with Madras Book`;
  const title = `${name} | Madras Book Official — Instant Cricket ID on WhatsApp`;
  const description = `Get your ${name} ID with Madras Book in under 2 minutes. Instant activation on WhatsApp, 5% joining bonus, 24×7 Hindi & English support, and lightning-fast UPI withdrawals across India.`;
  const intro = `${name} is one of the most searched ${cat.toLowerCase()} destinations in India — and Madras Book is the fastest way to get a verified ${name} ID today. Skip the guesswork of random agents: our team ships your login credentials directly on WhatsApp, sets up your first deposit on UPI, and stays with you 24×7 across IPL, T20 World Cup, bilateral series and domestic cricket. Every account is opened on the official platform, comes with our 5% joining bonus and 2% refill bonus, and is backed by same-day withdrawals to any Indian bank.`;
  return { slug, title, h1, description, intro, category: cat, bullets: bulletsFor(name) };
});

export const IMPORTED_BY_SLUG: Record<string, ImportedPage> = Object.fromEntries(
  IMPORTED_PAGES.map((p) => [p.slug, p]),
);
