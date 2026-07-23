export const WHATSAPP_URL = "https://wa.me/916377523847";
export const WHATSAPP_NUMBER = "+91 63775 23847";
export const SITE_NAME = "Madras Book";
export const SITE_TAGLINE = "India's #1 Online Cricket ID & Betting Book";

export type Platform = {
  slug: string;
  name: string;
  icon: string;
  tag: string;
  blurb: string;
};

export const PLATFORMS: Platform[] = [
  { slug: "1xbet", name: "1xBet Cricket ID", icon: "🎯", tag: "Sportsbook", blurb: "Global sportsbook with deep cricket markets, IPL specials and live in-play odds." },
  { slug: "fairplay", name: "FairPlay ID", icon: "⚖️", tag: "Exchange", blurb: "Trusted cricket exchange with fair odds, back & lay markets and quick payouts." },
  { slug: "diamond-exchange", name: "Diamond Exchange", icon: "💎", tag: "Exchange", blurb: "Premium cricket exchange with high limits and stable match-day performance." },
  { slug: "skyexch", name: "Sky Exchange ID", icon: "☁️", tag: "Exchange", blurb: "One of India's most popular exchanges for cricket back-lay and fancy markets." },
  { slug: "lotus-365", name: "Lotus 365", icon: "🪷", tag: "All-in-one", blurb: "Cricket, football, tennis and live casino under a single wallet." },
  { slug: "reddy-anna", name: "Reddy Anna Book", icon: "📘", tag: "Book", blurb: "Established Indian book for cricket, kabaddi and seasonal tournaments." },
  { slug: "mahadev-book", name: "Mahadev Book", icon: "🔱", tag: "Book", blurb: "Popular Indian book with fast settlements and dedicated support." },
  { slug: "jeetwin", name: "JeetWin", icon: "🏆", tag: "Casino + Sports", blurb: "Licensed operator with live casino tables and full sportsbook." },
  { slug: "kingexch", name: "KingExch", icon: "👑", tag: "Exchange", blurb: "Feature-rich exchange with cricket, football and live-dealer casino." },
  { slug: "7cric", name: "7Cric", icon: "🏏", tag: "Cricket first", blurb: "Cricket-first platform with generous match promos and rebates." },
  { slug: "11xplay", name: "11xPlay", icon: "🎲", tag: "All-in-one", blurb: "Modern app with slick UX, exchange odds and 500+ casino games." },
  { slug: "khelo24", name: "Khelo24", icon: "🎮", tag: "Sports + Games", blurb: "Broad sportsbook with virtuals, slots and instant games." },
];
