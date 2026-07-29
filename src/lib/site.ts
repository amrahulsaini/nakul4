export const WHATSAPP_URL = "https://wa.me/916377523847?text=Hello%20madras%20exch%2C%20I%20want%20betting%20id";
export const WHATSAPP_NUMBER = "+91 63775 23847";
export const SITE_NAME = "Madras Book";
export const SITE_TAGLINE = "India's #1 Online Cricket ID & Betting Book";
export const SITE_URL = "https://www.madrasbookexchange.com";
export const LOGO_PATH = "/images/madras-book-logo.png";
export const LOGO_URL = `${SITE_URL}${LOGO_PATH}`;

/** Turn a site-relative path into an absolute URL for SEO tags & schema. */
export const abs = (path: string) => `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

export type Platform = {
  slug: string;
  name: string;
  icon: string;
  tag: string;
  blurb: string;
  hero: string;
  keywords: string;
  highlights: string[];
  markets: string[];
  minDeposit: string;
  payoutTime: string;
  bestFor: string;
};

export const PLATFORMS: Platform[] = [
  {
    slug: "1xbet",
    name: "1xBet Cricket ID",
    icon: "🎯",
    tag: "Sportsbook",
    blurb: "Global sportsbook with deep cricket markets, IPL specials and live in-play odds.",
    hero: "Get your 1xBet cricket ID in under two minutes",
    keywords: "1xbet cricket id, 1xbet india, 1xbet online id, 1xbet whatsapp",
    highlights: ["Global sportsbook licensed in 60+ markets", "Deep IPL, T20, ODI and Test coverage", "Live in-play cash-out on match odds", "Weekly cricket accumulator bonuses"],
    markets: ["Match odds", "Fancy sessions", "Player performance", "Fall of wicket", "Innings totals", "Live in-play"],
    minDeposit: "₹300",
    payoutTime: "15–30 min",
    bestFor: "In-play traders who want the widest cricket book on the market.",
  },
  {
    slug: "fairplay",
    name: "FairPlay ID",
    icon: "⚖️",
    tag: "Exchange",
    blurb: "Trusted cricket exchange with fair odds, back & lay markets and quick payouts.",
    hero: "Instant FairPlay cricket ID on WhatsApp",
    keywords: "fairplay id, fairplay club, fairplay exchange, fairplay cricket",
    highlights: ["True back-and-lay exchange pricing", "One of India's most trusted brands", "Same-day withdrawals to any UPI", "Popular during IPL and ICC events"],
    markets: ["Back / Lay match odds", "Bookmaker markets", "Fancy sessions", "Live in-play", "Football & tennis add-ons"],
    minDeposit: "₹500",
    payoutTime: "10–20 min",
    bestFor: "Players who want exchange pricing without switching platforms mid-match.",
  },
  {
    slug: "diamond-exchange",
    name: "Diamond Exchange",
    icon: "💎",
    tag: "Exchange",
    blurb: "Premium cricket exchange with high limits and stable match-day performance.",
    hero: "Diamond Exchange ID — activated in minutes",
    keywords: "diamond exchange id, diamond exchange 9, diamond exchange 99, diamond exchange online",
    highlights: ["Premium high-limit cricket exchange", "Rock-solid performance on IPL final nights", "Sharp fancy-session pricing", "Preferred by professional players"],
    markets: ["Back / Lay match odds", "High-limit bookmaker", "Session runs", "Batsman totals", "Live casino tables"],
    minDeposit: "₹1,000",
    payoutTime: "15–30 min",
    bestFor: "Higher-stake players trading IPL and international T20s.",
  },
  {
    slug: "skyexch",
    name: "Sky Exchange ID",
    icon: "☁️",
    tag: "Exchange",
    blurb: "One of India's most popular exchanges for cricket back-lay and fancy markets.",
    hero: "Sky Exchange cricket ID — instant activation",
    keywords: "sky exchange id, skyexch, sky exchange online, sky exchange 247",
    highlights: ["Deep liquidity on domestic and international cricket", "Wide Evolution & Ezugi live casino shelf", "Reliable withdrawal timing", "Long-running brand trusted since 2019"],
    markets: ["Back / Lay match odds", "Fancy sessions", "Bookmaker", "Domestic cricket (Ranji, Vijay Hazare)", "Live casino"],
    minDeposit: "₹500",
    payoutTime: "10–25 min",
    bestFor: "Volume players on domestic cricket and Indian casino tables.",
  },
  {
    slug: "lotus-365",
    name: "Lotus 365",
    icon: "🪷",
    tag: "All-in-one",
    blurb: "Cricket, football, tennis and live casino under a single wallet.",
    hero: "Lotus 365 all-in-one ID for cricket & casino",
    keywords: "lotus 365 id, lotus365, lotus book, lotus 365 online",
    highlights: ["Cricket, football, tennis and horse racing", "500+ live-casino games", "Single wallet across every product", "Popular Indian brand with 24×7 support"],
    markets: ["Cricket back-lay & fancy", "Football, tennis, horse racing", "Live casino (500+ tables)", "Slots & instant games", "Virtual sports"],
    minDeposit: "₹500",
    payoutTime: "15–30 min",
    bestFor: "Players who want cricket plus casino on one login.",
  },
  {
    slug: "reddy-anna",
    name: "Reddy Anna Book",
    icon: "📘",
    tag: "Book",
    blurb: "Established Indian book for cricket, kabaddi and seasonal tournaments.",
    hero: "Reddy Anna online cricket ID",
    keywords: "reddy anna book, reddy anna id, reddy anna online, reddy anna cricket",
    highlights: ["Long-established Indian brand", "Cricket, kabaddi and Indian sports focus", "Strong seasonal tournament coverage", "Personal manager for every account"],
    markets: ["Match odds", "Fancy sessions", "Kabaddi", "IPL & domestic cricket", "Seasonal tournaments"],
    minDeposit: "₹500",
    payoutTime: "15–30 min",
    bestFor: "Players who prefer a traditional book experience with personal handling.",
  },
  {
    slug: "mahadev-book",
    name: "Mahadev Book",
    icon: "🔱",
    tag: "Book",
    blurb: "Popular Indian book with fast settlements and dedicated support.",
    hero: "Mahadev Book ID — instant on WhatsApp",
    keywords: "mahadev book, mahadev online id, mahadev cricket book",
    highlights: ["Fast match settlement on session bets", "Reliable Indian book with wide user base", "Dedicated Hindi-language support", "Popular during IPL and World Cup"],
    markets: ["Match odds", "Session / fancy", "IPL & bilateral T20", "Kabaddi", "Live casino"],
    minDeposit: "₹500",
    payoutTime: "15–30 min",
    bestFor: "Players who want quick settlements and Hindi-first support.",
  },
  {
    slug: "jeetwin",
    name: "JeetWin",
    icon: "🏆",
    tag: "Casino + Sports",
    blurb: "Licensed operator with live casino tables and full sportsbook.",
    hero: "JeetWin cricket & casino ID",
    keywords: "jeetwin id, jeetwin india, jeetwin casino, jeetwin login",
    highlights: ["Licensed and regulated operator", "Full sportsbook + live casino", "Weekly cashback promotions", "Localised for Indian players"],
    markets: ["Cricket, football, tennis", "Live casino (Evolution, Ezugi)", "Teen Patti, Andar Bahar", "Slots and instant games"],
    minDeposit: "₹500",
    payoutTime: "15–30 min",
    bestFor: "Players who want a licensed brand with strong casino coverage.",
  },
  {
    slug: "kingexch",
    name: "KingExch",
    icon: "👑",
    tag: "Exchange",
    blurb: "Feature-rich exchange with cricket, football and live-dealer casino.",
    hero: "KingExch cricket ID with WhatsApp support",
    keywords: "kingexch, king exchange, kingexch id, king exchange online",
    highlights: ["Full-feature cricket exchange", "Football and tennis exchange markets", "Live-dealer casino integrated", "High deposit and withdrawal limits"],
    markets: ["Cricket back-lay", "Football & tennis exchange", "Fancy sessions", "Live casino"],
    minDeposit: "₹500",
    payoutTime: "15–30 min",
    bestFor: "Players who want a modern exchange with multi-sport depth.",
  },
  {
    slug: "7cric",
    name: "7Cric",
    icon: "🏏",
    tag: "Cricket first",
    blurb: "Cricket-first platform with generous match promos and rebates.",
    hero: "7Cric ID — the cricket-first betting app",
    keywords: "7cric id, 7cric login, 7cric cricket betting",
    highlights: ["Cricket-first product design", "Aggressive match-day promos", "Rebates on losing sessions", "Clean, mobile-native app"],
    markets: ["Cricket match odds", "Fancy sessions", "Player specials", "Live in-play"],
    minDeposit: "₹500",
    payoutTime: "15–30 min",
    bestFor: "Cricket-only players who want the sharpest match-day promos.",
  },
  {
    slug: "11xplay",
    name: "11xPlay",
    icon: "🎲",
    tag: "All-in-one",
    blurb: "Modern app with slick UX, exchange odds and 500+ casino games.",
    hero: "11xPlay ID — sports, exchange & casino",
    keywords: "11xplay id, 11x play, 11xplay online, 11xplay app",
    highlights: ["Modern, mobile-native UX", "Exchange + book + casino in one app", "Strong live-streaming integration", "Fast KYC and payout flow"],
    markets: ["Cricket, football, tennis", "Exchange back-lay", "Live casino & slots", "Virtual sports"],
    minDeposit: "₹500",
    payoutTime: "10–25 min",
    bestFor: "Players who want the cleanest mobile app experience.",
  },
  {
    slug: "khelo24",
    name: "Khelo24",
    icon: "🎮",
    tag: "Sports + Games",
    blurb: "Broad sportsbook with virtuals, slots and instant games.",
    hero: "Khelo24 ID — cricket, casino & virtuals",
    keywords: "khelo24 id, khelo 24, khelo24 online, khelo24 login",
    highlights: ["Broad sportsbook coverage", "Virtual sports 24×7", "Popular slot titles from top studios", "Instant-win games"],
    markets: ["Cricket, football, tennis, kabaddi", "Virtual sports", "Slots (Pragmatic, Evolution)", "Instant games"],
    minDeposit: "₹500",
    payoutTime: "15–30 min",
    bestFor: "Players who want variety beyond cricket alone.",
  },
];
